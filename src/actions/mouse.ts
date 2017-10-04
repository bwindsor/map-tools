import * as AppState from "../AppState"

export type MouseAction = 
    | MapClickAction
    | MapMouseMoveAction

export enum TypeKeys {
    CLICK = "MOUSE_CLICK",
    MOUSE_MOVE = "MOUSE_MOVE",
}

export interface MapClickAction { type: TypeKeys.CLICK, latLng: L.LatLng}
export interface MapMouseMoveAction { type: TypeKeys.MOUSE_MOVE, latLng: L.LatLng}

export const mapMouseMove = (latLng: L.LatLng) : MapMouseMoveAction => {
    return {
        type: TypeKeys.MOUSE_MOVE,
        latLng: latLng
    }
}

export const mapClick = (latLng: L.LatLng) : MapClickAction => {
    return {
        type: TypeKeys.CLICK,
        latLng: latLng
    }
}