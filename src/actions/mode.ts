import * as AppState from "../AppState"

export type ModeAction = 
    | SwitchDrawModeAction

export enum TypeKeys {
    SWITCH_DRAW_MODE = "MODE_SWITCH_DRAW_MODE",
}

export interface SwitchDrawModeAction { type: TypeKeys.SWITCH_DRAW_MODE, drawMode: AppState.DrawMode}

export const switchDrawMode = (drawMode: AppState.DrawMode) : SwitchDrawModeAction => {
    return {
        type: TypeKeys.SWITCH_DRAW_MODE,
        drawMode: drawMode
    }
}