import * as AppState from "../AppState"

export type PathAction =
    | StartPathAction
    | StopPathAction
    | ClearPathAction
    | UpdatePathAction

export enum TypeKeys {
    START_PATH = "PATH_START",
    STOP_PATH = "PATH_STOP",
    CLEAR_PATH = "PATH_CLEAR",
    UPDATE_PATH = "PATH_UPDATE"
}

export interface StartPathAction { type: TypeKeys.START_PATH, latLng: L.LatLng }
export interface StopPathAction { type: TypeKeys.STOP_PATH }
export interface ClearPathAction { type: TypeKeys.CLEAR_PATH }
export interface UpdatePathAction { type: TypeKeys.UPDATE_PATH, latLng: L.LatLng }

export const startPath = (latLng: L.LatLng): StartPathAction => {
    return {
        type: TypeKeys.START_PATH,
        latLng: latLng
    }
}

export const stopPath = (): StopPathAction => {
    return { type: TypeKeys.STOP_PATH }
}

export const clearPath = (): ClearPathAction => {
    return { type: TypeKeys.CLEAR_PATH }
}

export const updatePath = (latLng: L.LatLng): UpdatePathAction => {
    return {
        type: TypeKeys.UPDATE_PATH,
        latLng: latLng
    }
}

export const nextDrawStage = function (state: AppState.PathState, latLng: L.LatLng) {
    switch (state.drawStage) {
        case AppState.TripleDrawStage.NONE:
            return startPath(latLng)
        case AppState.TripleDrawStage.DRAWING:
            return stopPath()
        case AppState.TripleDrawStage.DRAWN:
            return clearPath()
    }
}

