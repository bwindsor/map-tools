import * as AppState from "../AppState"

export type MAP_CLICK = 'MAP_CLICK'
export const MAP_CLICK : MAP_CLICK = 'MAP_CLICK'
export type MAP_MOUSE_MOVE = 'MAP_MOUSE_MOVE'
export const MAP_MOUSE_MOVE : MAP_MOUSE_MOVE = 'MAP_MOUSE_MOVE'
export type SWITCH_DRAW_MODE = 'SWITCH_DRAW_MODE'
export const SWITCH_DRAW_MODE : SWITCH_DRAW_MODE = 'SWITCH_DRAW_MODE'

export type MapClickAction = { type: MAP_CLICK, latLng: L.LatLng}
export type MapMouseMoveAction = { type: MAP_MOUSE_MOVE, latLng: L.LatLng}
export type SwitchDrawModeAction = { type: SWITCH_DRAW_MODE, drawMode: AppState.DrawMode}

export type MapAction = MapClickAction | MapMouseMoveAction | SwitchDrawModeAction

export const mapMouseMove = (latLng: L.LatLng) : MapMouseMoveAction => {
    return {
        type: MAP_MOUSE_MOVE,
        latLng: latLng
    }
}

export const mapClick = (latLng: L.LatLng) : MapClickAction => {
    return {
        type: MAP_CLICK,
        latLng: latLng
    }
}

export const switchDrawMode = (drawMode: string) : SwitchDrawModeAction => {
    return {
        type: SWITCH_DRAW_MODE,
        drawMode: (<any>AppState.DrawMode)[drawMode]
    }
}