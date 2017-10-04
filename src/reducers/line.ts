import * as AppState from "../AppState"
import * as Actions from "../actions/line"
import * as L from "leaflet"
import { Reducer } from "redux"

const initialState: AppState.LineState = {
    drawStart: null,
    drawEnd: null,
    drawStage: AppState.TripleDrawStage.NONE
}

export default function lineReducer(state = initialState, action: Actions.LineAction): AppState.LineState {
    switch (action.type) {
        case Actions.TypeKeys.START_LINE:
            return {
                ...state,
                drawStage: AppState.TripleDrawStage.DRAWING,
                drawStart: action.latLng,
                drawEnd: action.latLng
            }
        case Actions.TypeKeys.STOP_LINE:
            return {
                ...state,
                drawStage: AppState.TripleDrawStage.DRAWN
            }
        case Actions.TypeKeys.CLEAR_LINE:
            return {
                ...state,
                drawStage: AppState.TripleDrawStage.NONE,
                drawStart: null,
                drawEnd: null
            }
        case Actions.TypeKeys.UPDATE_LINE_END:
            return {
                ...state,
                drawEnd: action.latLng
            }
        default:
            return state
    }
}