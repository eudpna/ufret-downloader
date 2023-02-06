import React from "react"
import { Gctx } from "../../../game/Gctx"

export const TextField: React.FC<{
    gctx: Gctx
}> = (props) => {
    const gctx = props.gctx

    return <div className="">
        <div className="mb-3 mt-2">
            <div className="text-xs" style={{
                color: '#888'
            }}>
            </div>
            <input type="text" className="p-1 resize-none w-full border rounded"
                value={gctx.text}
                placeholder="www.ufret.jp のURL"
                onChange={(e) => {
                    gctx.text = e.target.value
                    gctx.rerenderUI()
                }} style={{
                    width: '100%',
                    border: 'solid 1px #bbb',
                }} />
        </div>

        <div className="">
            <div
            className="px-3 cursor-pointer p-1 rounded inline-block"
            style={{
                border: 'solid 1px #bbb',
            }}
             onClick={() => {
                gctx.submit()
            }}>
                ダウンロード
            </div>
        </div>

        <div>

        </div>
    </div>
}