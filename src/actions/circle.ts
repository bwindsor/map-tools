import * as AppState from "../AppState"

export type CircleAction =
    | StartCircleAction
    | StopCircleAction
    | ClearCircleAction
    | UpdateCircleRadiusAction

export enum TypeKeys {
    START_CIRCLE = "CIRCLE_START_CIRCLE",
    STOP_CIRCLE = "CIRCLE_STOP_CIRCLE",
    CLEAR_CIRCLE = "CIRCLE_CLEAR_CIRCLE",
    UPDATE_CIRCLE_RADIUS = "CIRCLE_UPDATE_CIRCLE_RADIUS"
}

export interface StartCircleAction { type: TypeKeys.START_CIRCLE, latLng: L.LatLng }
export interface StopCircleAction { type: TypeKeys.STOP_CIRCLE }
export interface ClearCircleAction { type: TypeKeys.CLEAR_CIRCLE }
export interface UpdateCircleRadiusAction { type: TypeKeys.UPDATE_CIRCLE_RADIUS, latLng: L.LatLng }

export const startCircle = (latLng: L.LatLng): StartCircleAction => {
    return {
        type: TypeKeys.START_CIRCLE,
        latLng: latLng
    }
}

export const stopCircle = (): StopCircleAction => {
    return { type: TypeKeys.STOP_CIRCLE }
}

export const clearCircle = (): ClearCircleAction => {
    return { type: TypeKeys.CLEAR_CIRCLE }
}

export const updateCircle = (latLng: L.LatLng): UpdateCircleRadiusAction => {
    return {
        type: TypeKeys.UPDATE_CIRCLE_RADIUS,
        latLng: latLng
    }
}

export const nextDrawStage = function (state: AppState.CircleState, latLng: L.LatLng) {
    switch (state.drawStage) {
        case AppState.TripleDrawStage.NONE:
            return startCircle(latLng)
        case AppState.TripleDrawStage.DRAWING:
            return stopCircle()
        case AppState.TripleDrawStage.DRAWN:
            return clearCircle()
    }
}