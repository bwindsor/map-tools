import * as AppState from "../AppState"
import * as Actions from "../actions/index"
import * as Geometry from "../math/geometry"
import * as L from "leaflet"
import { Reducer } from "redux"
import lineReducer from './line'
import circleReducer from './circle'
import mouseReducer from './mouse'
import drawModeReducer from './mode'

const initialState: AppState.AppState = {
    drawMode: AppState.DrawMode.LINE,
    lineState: undefined,
    circleState: undefined,
    mouseState: undefined,
    tileUrl: AppState.TILE_URL
}

export default function mapReducer (state = initialState, action: Actions.MapAction): AppState.AppState {
    return {
        ...state,
        lineState: lineReducer(state.lineState, action as any),
        circleState: circleReducer(state.circleState, action as any),
        mouseState: mouseReducer(state.mouseState, action as any),
        drawMode: drawModeReducer(state.drawMode, action as any)
    }
}