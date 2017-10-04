import * as AppState from "../AppState"
import * as Actions from "../actions/path"
import * as Geometry from "../math/geometry"
import * as L from "leaflet"
import { Reducer } from "redux"

const initialState: AppState.PathState = {
    drawCoordinates: [],
    drawStage: AppState.TripleDrawStage.NONE
}

export default function pathReducer(state = initialState, action: Actions.PathAction): AppState.PathState {
    switch (action.type) {
        case Actions.TypeKeys.START_PATH:
            return {
                ...state,
                drawStage: AppState.TripleDrawStage.DRAWING,
                drawCoordinates: copyAndAppend(state.drawCoordinates, action.latLng)
            }
        case Actions.TypeKeys.STOP_PATH:
            console.log(JSON.stringify(state.drawCoordinates.map(c=>[Math.round(c.lat*1e6)/1e6, Math.round(c.lng*1e6)/1e6])))
            return {
                ...state,
                drawStage: AppState.TripleDrawStage.DRAWN
            }
        case Actions.TypeKeys.CLEAR_PATH:
            return {
                ...state,
                drawStage: AppState.TripleDrawStage.NONE,
                drawCoordinates: []
            }
        case Actions.TypeKeys.UPDATE_PATH:
            return {
                ...state,
                drawCoordinates: copyAndAppend(state.drawCoordinates, action.latLng)
            }
        default:
            return state
    }
}

function copyAndAppend<T>(array: T[], item: T) {
    let a = array.slice(0)
    a.push(item)
    return a
}