import * as AppState from "../AppState"
import * as Actions from "../actions/mouse"
import * as L from "leaflet"
import { Reducer } from "redux"

const initialState: AppState.MouseState = {
    position: L.latLng(0,0)
}

export default function mouseReducer(state = initialState, action: Actions.MouseAction): AppState.MouseState {
    switch (action.type) {
        case Actions.TypeKeys.MOUSE_MOVE:
            return {
                ...state,
                position: action.latLng
            }
        case Actions.TypeKeys.CLICK:
            return state
        default:
            return state
    }
}