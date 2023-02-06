import fetch1 from 'node-fetch'
import fs from 'fs'

async function main() {
    const html = fs.readFileSync('./test.html', 'utf-8')
    const result = parseUfret(html)
    console.log(result)

    fs.writeFileSync('./output.html', result)
}

// var song_id = '64109';
// var song_name = 'からくりピエロ';
// var artist_name = 'みゆはん';
// var lyrics = '40mP';
// var music = '40mP';
// var time = '2023-02-06 10:56:15';

function parseUfret(html: string) {
    const score = parseUfretScore(html)


    const re = /<title>(.*?) \/ (.*?)  ギターコード\/ウクレレコード\/ピアノコード - U-フレット<\/title>/g
    const m = re.exec(html)
    const title = m![1]
    const artist = m![2]

            // // /<title>(.*?) \/ (.*?) <\/title>/
        // // /
        // const re = new RegExp(``, 'g')
        // console.log(re)
        // const str = parseMetadata(html, re)
        // metadatas[t] = str    
    const mts = [
        // `# download_date: ${Date.now().toString()}`,
        // `# download_source: ${}`,
        `{title: ${title}}`,
        `{artist: ${artist}}`,
    ]

    return mts.join('\n') + '\n'+ score    
}


// function parseUfret(html: string) {
//     // const score = parseUfretScore(html)

//     const metadatas: { [key: string]: string } = {}
    

//     const regexs = [
//         'song_id',
//         'song_name',
//         'artist_name',
//         'lyrics',
//         'music',
//     ].map(t => {
//         const re = new RegExp(`var ${t}( )+?\= (.*?);`, 'g')
//         console.log(re)
//         const str = parseMetadata(html, re)
//         metadatas[t] = str
//     });

//     const mts = [
//         // `# download_date: ${Date.now().toString()}`,
//         // `# download_source: ${}`,
//         `{title: ${metadatas['song_name']}}`,
//         `{artist: ${metadatas['artist_name']}}`,
//         `{lyricist: ${metadatas['lyrics']}}`,
//         `{composer: ${metadatas['music']}}`,
//     ]

//     // return mts.join('\n') + score    
// }


function parseMetadata(html: string, re: RegExp) {
    const m = re.exec(html)
    console.log(m)
    const str = m![1]
    return str
}


function parseUfretScore(html: string) {
    const re = /var\ ufret_chord_datas\ =\ (\[.*?\]);/g
    const m = re.exec(html)
    // console.log(m)
    const str = m![1]
    // console.log(str)
    const obj = JSON.parse(str)
    // console.log(obj)
    const obj1 = obj.map(line => {
        return line.replaceAll('♭', 'b')
            .replaceAll('♯', '#')
        
        .replaceAll('\r', '\n')
    })
    return obj1.join('')
}

main()