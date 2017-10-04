export const TILE_URL = "http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"

export enum DrawMode {
    LINE = "LINE",
    CIRCLE = "CIRCLE",
    TIMED_PATH = "TIMED PATH"
}
export interface Circle {
    centre: L.LatLng,
    radius: number
}

export enum TripleDrawStage {
    NONE = 0,
    DRAWING = 1,
    DRAWN = 2
}

export interface TripleDrawState {
    drawStage: TripleDrawStage
}

export interface LineState extends TripleDrawState {
    drawStart: L.LatLng,
    drawEnd: L.LatLng
}
export interface CircleState extends TripleDrawState {
    drawCentre: L.LatLng,
    drawRadius: number
}
export interface MouseState {
    position: L.LatLng
}

export interface AppState {
    drawMode: DrawMode,
    lineState: LineState,
    circleState: CircleState,
    mouseState: MouseState
    tileUrl: string
}
