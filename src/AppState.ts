export const TILE_URL = "http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"

export enum DrawMode {
    LINE,
    CIRCLE
}
export type Circle = {
    centre: L.LatLng,
    radius: number
}

export interface AppState {
    drawMode: DrawMode,
    isDrawing: boolean
    drawStart: L.LatLng | null
    drawEnd: L.LatLng | null
    distanceMetres: number
    mousePosition: L.LatLng
    tileUrl: string
}
