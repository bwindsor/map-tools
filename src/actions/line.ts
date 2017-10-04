import * as AppState from "../AppState"

export type LineAction =
    | StartLineAction
    | StopLineAction
    | ClearLineAction
    | UpdateLineEndAction

export enum TypeKeys {
    START_LINE = "LINE_START_LINE",
    STOP_LINE = "LINE_STOP_LINE",
    CLEAR_LINE = "LINE_CLEAR_LINE",
    UPDATE_LINE_END = "LINE_UPDATE_LINE_END"
}

export interface StartLineAction { type: TypeKeys.START_LINE, latLng: L.LatLng }
export interface StopLineAction { type: TypeKeys.STOP_LINE }
export interface ClearLineAction { type: TypeKeys.CLEAR_LINE }
export interface UpdateLineEndAction { type: TypeKeys.UPDATE_LINE_END, latLng: L.LatLng }

export const startLine = (latLng: L.LatLng): StartLineAction => {
    return {
        type: TypeKeys.START_LINE,
        latLng: latLng
    }
}

export const stopLine = (): StopLineAction => {
    return { type: TypeKeys.STOP_LINE }
}

export const clearLine = (): ClearLineAction => {
    return { type: TypeKeys.CLEAR_LINE }
}

export const updateLineEnd = (latLng: L.LatLng): UpdateLineEndAction => {
    return {
        type: TypeKeys.UPDATE_LINE_END,
        latLng: latLng
    }
}

export const nextDrawStage = function (state: AppState.LineState, latLng: L.LatLng) {
    switch (state.drawStage) {
        case AppState.TripleDrawStage.NONE:
            return startLine(latLng)
        case AppState.TripleDrawStage.DRAWING:
            return stopLine()
        case AppState.TripleDrawStage.DRAWN:
            return clearLine()
    }
}

