import * as AppState from "../AppState"
import * as Actions from "../actions/circle"
import * as Geometry from "../math/geometry"
import * as L from "leaflet"
import { Reducer } from "redux"

const initialState: AppState.CircleState = {
    drawCentre: null,
    drawRadius: null,
    drawStage: AppState.TripleDrawStage.NONE
}

export default function circleReducer(state = initialState, action: Actions.CircleAction): AppState.CircleState {
    switch (action.type) {
        case Actions.TypeKeys.START_CIRCLE:
            return {
                ...state,
                drawStage: AppState.TripleDrawStage.DRAWING,
                drawCentre: action.latLng,
                drawRadius: 0
            }
        case Actions.TypeKeys.STOP_CIRCLE:
            return {
                ...state,
                drawStage: AppState.TripleDrawStage.DRAWN
            }
        case Actions.TypeKeys.CLEAR_CIRCLE:
            return {
                ...state,
                drawStage: AppState.TripleDrawStage.NONE,
                drawCentre: null,
                drawRadius: null
            }
        case Actions.TypeKeys.UPDATE_CIRCLE_RADIUS:
            return {
                ...state,
                drawRadius: Geometry.latLonToArcLength(state.drawCentre, action.latLng)
            }
        default:
            return state
    }
}