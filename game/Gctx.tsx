export class Gctx {
    text: string
    rerenderUI: Function

    constructor(rerenderUI: Function) {
        this.rerenderUI = rerenderUI

        rerenderUI()
    }

    submit() {
        this.fetchUfret(this.text)
    }

    async fetchUfret(ufretUrl: string) {

        const params = {
            url: ufretUrl,
        }

        const queryParams = new URLSearchParams(params)

        try {
            await fetch(`/api/fetchUfret?` + queryParams)
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
            .catch((e) => {
                console.log(e)
            })
        } catch (e) {
            console.log(e)
        }
    }
}