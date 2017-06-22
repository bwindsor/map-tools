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
    lines: L.LatLng[][],
    circles: Circle[]
}
