import * as AppState from "../AppState"

export type MapAction = 
    | MapClickAction
    | MapMouseMoveAction
    | SwitchDrawModeAction
    | OtherAction

export enum TypeKeys {
    MAP_CLICK = "MAP_CLICK",
    MAP_MOUSE_MOVE = "MAP_MOUSE_MOVE",
    SWITCH_DRAW_MODE = "SWITCH_DRAW_MODE",
    OTHER_ACTION = "__OTHER_ACTION__"
}

export interface MapClickAction { type: TypeKeys.MAP_CLICK, latLng: L.LatLng}
export interface MapMouseMoveAction { type: TypeKeys.MAP_MOUSE_MOVE, latLng: L.LatLng}
export interface SwitchDrawModeAction { type: TypeKeys.SWITCH_DRAW_MODE, drawMode: AppState.DrawMode}
export interface OtherAction { type: TypeKeys.OTHER_ACTION }

export const mapMouseMove = (latLng: L.LatLng) : MapMouseMoveAction => {
    return {
        type: TypeKeys.MAP_MOUSE_MOVE,
        latLng: latLng
    }
}

export const mapClick = (latLng: L.LatLng) : MapClickAction => {
    return {
        type: TypeKeys.MAP_CLICK,
        latLng: latLng
    }
}

export const switchDrawMode = (drawMode: string) : SwitchDrawModeAction => {
    return {
        type: TypeKeys.SWITCH_DRAW_MODE,
        drawMode: (<any>AppState.DrawMode)[drawMode]
    }
}