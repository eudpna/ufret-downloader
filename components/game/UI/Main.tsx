import React from "react"
import { Gctx } from "../../../game/Gctx"
import { downloadText } from "../../../game/lib"
import { A } from "../../A"
import { TextField } from "./TextField"

export const Main: React.FC<{
    gctx: Gctx
}> = (props) => {
    const gctx = props.gctx

    return <div className="px-2 max-w-3xl mx-auto">

        <div
            style={{
                display: 'inline-block',
                position: 'absolute',
                right: 0,
                textAlign: 'right',
                paddingRight: 7,
            }}
        >
            <a href="https://github.com/eudpna/ufret-downloader" target="_blank" rel="noopener noreferrer"
                style={{
                    fontSize: '0.9rem',
                }}
            >
                GitHub
            </a>
        </div>

        <div className="pt-6" style={{

        }}>
            <div className="text-lg font-bold text-gray-700 inline-block">
                U-FRET ダウンローダー
            </div>
        </div>

        <div>
         
        </div>

        <div className="mt-8">
            <TextField gctx={gctx} />
        </div>

        <div className="mt-8">
            {gctx.progressMessage}
        </div>

        {gctx.downloadSucceed ?
            <div className="mt-8">
                <div className="mt-3">
                    <A href={gctx.chordMemoURL}>
                        こーどめもで開く
                    </A>
                </div>

                <div className="mt-4">
                    <div className="text-blue-600 cursor-pointer" style={{
                        lineHeight: 1
                    }} onClick={() => {
                        downloadText(gctx.downloadFileName, gctx.downloadText)
                    }}>
                        テキストファイルをダウンロード(chordpro形式)
                    </div>
                </div>
            </div> : null}
    </div>
}