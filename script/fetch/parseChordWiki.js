// import fetch1 from 'node-fetch'
// import fs from 'fs'
// import puppeteer from 'puppeteer'
const puppeteer = require('puppeteer');

    (async function main() {
        try {
            const browser = await puppeteer.launch();
            const [page] = await browser.pages();

            await page.goto(yuri, { waitUntil: 'networkidle0' });

            await new Promise(res => {
                setTimeout(() => {
                    res()
                }, 10000);
            });
            const data = await page.evaluate(() => document.querySelector('*').outerHTML);

            console.log(data);

            await browser.close();
        } catch (err) {
            console.error(err);
        }
    })();

async function main(url) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);

    // const lines = await page.$$("p"); // page.$$()の返り値は配列
    console.log('hau')
    console.log(page.toString())
    const lines = await page.waitForSelector('.line');
    console.log('nyau')
    console.log(lines, lines.toString())
    lines.map(async line => {
        const spans = await line.$$("span");
        console.log(spans)
        Array.from(spans).map(async span => {
            const classNameHandle = await span.getProperty('className')
            const className = classNameHandle.toString()
            
            if (className === 'chord' || className === 'word') {
                const innerText = (await span.getProperty('innerText')).toString()
                console.log(innerText)
            }
            // const classList = await span.getProperty('classList')
            // Array.from(classList).includes('')

        })
    })


    // const html = fs.readFileSync('./test.html', 'utf-8')
    // const result = parseUfret(html)
    // console.log(result)

    // fs.writeFileSync('./output.html', result)
}

// var song_id = '64109';
// var song_name = 'からくりピエロ';
// var artist_name = 'みゆはん';
// var lyrics = '40mP';
// var music = '40mP';
// var time = '2023-02-06 10:56:15';
const yuri = 'https://ja.chordwiki.org/wiki/%E3%82%86%E3%82%8A%E3%82%86%E3%82%89%E3%82%89%E3%82%89%E3%82%89%E3%82%86%E3%82%8B%E3%82%86%E3%82%8A%E5%A4%A7%E4%BA%8B%E4%BB%B6'

// main(yuri)