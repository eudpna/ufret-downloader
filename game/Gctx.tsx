export class Gctx {
    text: string = ''
    rerenderUI: Function
    progressMessage: string = ''

    processingURL: string = ''

    chordMemoURL: string = ''
    downloadText: string = ''
    downloadFileName: string = ''

    downloadSucceed: boolean = false

    nowDownloading: boolean = false

    constructor(rerenderUI: Function) {
        this.rerenderUI = rerenderUI

        rerenderUI()
    }

    make(data: {
        title: string,
        artist: string,
        score: string
    }) {
        this.chordMemoURL = 'https://chordmemo.nyaw.net' +
            `?title=${encodeURIComponent(data.title)}` +
            `&text=${encodeURIComponent(data.score)}`;

        const d = new Date()

        const mts = [
            `# download_date: ${d.toLocaleString("ja")}`,
            `# download_source: ${this.processingURL}\n`,
            `{title: ${data.title}}`,
            `{artist: ${data.artist}}`,
            ]

        this.downloadText = mts.join('\n') + '\n\n' + data.score

        const filename = data.title ? data.title+' コード譜.txt' : 'U-FRETコード譜.txt'
        this.downloadFileName = filename
        this.rerenderUI()
    }

    async submit() {
        if (this.nowDownloading) return

        this.downloadSucceed = false
        this.processingURL = this.text
        this.nowDownloading = true

        this.progressMessage = 'ロード中...'
        this.rerenderUI()

        const res = await this.fetchUfret(this.text)

        this.nowDownloading = false

        if (!res) {
            this.progressMessage = 'ダウンロード失敗。'
            this.rerenderUI()
            return
        }
        this.progressMessage = 'ダウンロード完了。'

        this.make(res)
        this.downloadSucceed = true
        this.rerenderUI()
    }

    async fetchUfret(ufretUrl: string): Promise<any> {

        const params = {
            url: ufretUrl,
        }

        const queryParams = new URLSearchParams(params)

        
        const res = await fetch(`/api/fetchUfret?` + queryParams)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            if (data.score) return data
            else return false
        })
        .catch((e) => {
            console.log('error:', e)
            return false
        })

        return res
    }
}