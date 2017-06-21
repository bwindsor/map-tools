export type MAP_CLICK = 'MAP_CLICK'
export const MAP_CLICK : MAP_CLICK = 'MAP_CLICK'
export type MAP_MOUSE_MOVE = 'MAP_MOUSE_MOVE'
export const MAP_MOUSE_MOVE : MAP_MOUSE_MOVE = 'MAP_MOUSE_MOVE'

export type MapClickAction = { type: MAP_CLICK, latLng: L.LatLng}
export type MapMouseMoveAction = { type: MAP_MOUSE_MOVE, latLng: L.LatLng}

export type MapAction = MapClickAction | MapMouseMoveAction

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