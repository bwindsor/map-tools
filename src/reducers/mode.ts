import * as AppState from "../AppState"
import * as Actions from "../actions/mode"
import * as L from "leaflet"
import { Reducer } from "redux"

const initialState = AppState.DrawMode.LINE

export default function modeReducer(state = initialState, action: Actions.ModeAction): AppState.DrawMode {
    switch (action.type) {
        case Actions.TypeKeys.SWITCH_DRAW_MODE:
            return action.drawMode
        default:
            return state
    }
}