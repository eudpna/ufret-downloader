
import Head from 'next/head'
import React, { useEffect } from 'react'
import { GameEl } from '../components/game/GameEl'

const Index: React.FC<{}> = () => {   
    return <>
        <Head>
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




