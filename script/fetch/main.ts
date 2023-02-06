// const fetch1 = require('node-fetch')
// const fs = require('fs')

import fetch1 from 'node-fetch'
import fs from 'fs'


async function main(url: string) {
    const response = await fetch1(url);
    const body = await response.text();

    console.log(body);

    fs.writeFileSync('./test2.html', body)
}

const sample1 ='https://www.ufret.jp/song.php?data=64109'
const sample2 = 'https://ja.chordwiki.org/wiki/%E3%82%86%E3%82%8A%E3%82%86%E3%82%89%E3%82%89%E3%82%89%E3%82%89%E3%82%86%E3%82%8B%E3%82%86%E3%82%8A%E5%A4%A7%E4%BA%8B%E4%BB%B6'

main(sample2)
