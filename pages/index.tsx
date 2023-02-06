
import Head from 'next/head'
import React, { useEffect } from 'react'
import { GameEl } from '../components/game/GameEl'


const Index: React.FC<{}> = () => {
   
    return <>
        <Head>
            {/* <link rel="icon" href="/favicon.png" /> */}
            {/* <meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0"></meta> */}
            <title>U-FRET ダウンローダー</title>
        </Head>
        <div lang="ja" className="w-full h-full" style={{
            overflowX: 'hidden',
        }}>
            <GameEl />

        </div>
    </>
}

export default Index




