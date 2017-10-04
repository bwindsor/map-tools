import * as AppState from "../AppState"
import * as Actions from "../actions/index"
import * as Geometry from "../math/geometry"
import * as L from "leaflet"

const initialState: AppState.AppState = {
    drawMode: AppState.DrawMode.LINE,
    isDrawing: false,
    drawStart: null,
    drawEnd: null,
    distanceMetres: 0,
    mousePosition: L.latLng(0,0),
    tileUrl: AppState.TILE_URL
}

const mapReducer = (state = initialState, action: Actions.MapAction): AppState.AppState => {
    switch (action.type) {
        case Actions.TypeKeys.MAP_CLICK:
            let newState = { ...state };
            if (state.isDrawing) {
                newState.isDrawing = false;
            } else {
                newState.distanceMetres = 0
                if (state.drawEnd) {
                    newState.drawStart = null
                    newState.drawEnd = null
                } else {
                    newState.drawStart = action.latLng
                    newState.drawEnd = action.latLng
                    newState.isDrawing = true;
                }
            }
            return newState;
        case Actions.TypeKeys.MAP_MOUSE_MOVE:
            if (state.isDrawing) {
                return {
                    ...state,
                    mousePosition: action.latLng,
                    drawEnd: action.latLng,
                    distanceMetres: Geometry.latLonToArcLength(state.drawStart, action.latLng)
                }
            } else {
                return { ...state, mousePosition: action.latLng};
            }
        case Actions.TypeKeys.SWITCH_DRAW_MODE:
            return {
                ...state,
                drawMode: action.drawMode,
                drawStart: null,
                drawEnd: null,
                isDrawing: false
            }
        default:
            return state
    }
}

export default mapReducer