import React from "react"
import { Gctx } from "../../../game/Gctx"
import { TextField } from "./TextField"

export const Main: React.FC<{
    gctx: Gctx
}> = (props) => {
    const gctx = props.gctx

    return <div className="px-2 max-w-3xl mx-auto">
        <div>
            <TextField gctx={gctx} />
        </div>
    </div>
}