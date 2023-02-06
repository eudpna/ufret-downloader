

export function parseUfret(html: string) {
    const score = parseUfretScore(html)
    const re = /<title>(.*?) \/ (.*?)  ギターコード\/ウクレレコード\/ピアノコード - U-フレット<\/title>/g
    const m = re.exec(html)
    const title = m![1]
    const artist = m![2]
    const mts = [
        `{title: ${title}}`,
        `{artist: ${artist}}`,
    ]
    // return mts.join('\n') + '\n' + score
    return {
        score,
        title,
        artist,
    }
}

function parseUfretScore(html: string) {
    const re = /var\ ufret_chord_datas\ =\ (\[.*?\]);/g
    const m = re.exec(html)
    const str = m![1]
    const obj = JSON.parse(str)
    const obj1 = obj.map(line => {
        return line.replaceAll('♭', 'b')
            .replaceAll('♯', '#')

            .replaceAll('\r', '\n')
    })
    return obj1.join('')
}
