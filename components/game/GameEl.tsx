import React, { useEffect, useState } from "react";
import { Gctx } from "../../game/Gctx";
import { Main } from "./UI/Main";


export const GameEl: React.FC<{}> = () => {
    const [state, setState] = useState<{
        gctx: Gctx | null
    }>({
        gctx: null
    })

    const [_, setState0] = useState<{}>({})

    function rerenderUI() {
        setState0(state => ({ ...state }))
    }

    useEffect(() => {
        setState(state => ({
            gctx: new Gctx(rerenderUI)
        }))
    }, [])


    return <>
        <div className="" style={{
            height: '100%',
            width: '100%',
        }}>
            <div className="">
                {state.gctx ? <Main gctx={state.gctx} /> : null}
            </div>

        </div>

    </>
}
