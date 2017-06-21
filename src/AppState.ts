export enum DrawMode {
    LINE,
    CIRCLE
}

export interface AppState {
    drawMode: DrawMode,
    isDrawing: boolean
    lines: L.LatLng[][]
}
