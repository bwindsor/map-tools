import * as AppState from "../AppState"
import * as Line from './line'
import * as Circle from './circle'
import * as Mouse from './mouse'
import * as Mode from './mode'
import * as Path from './path'
import { Dispatch } from 'redux'
import { CreatorFunction } from './common'

export var LineActions = Line
export var CircleActions = Circle
export var MouseActions = Mouse
export var ModeActions = Mode
export var PathActions = Path

export type MapAction = 
    | Line.LineAction
    | Circle.CircleAction
    | Mouse.MouseAction
    | Mode.ModeAction
    | Path.PathAction
    | OtherAction

export type TypeKeys = OtherTypeKeys | Line.TypeKeys | Circle.TypeKeys | Mouse.TypeKeys | Mode.TypeKeys | Path.TypeKeys

enum OtherTypeKeys {
    OTHER_ACTION = "__OTHER_ACTION__"
}

interface OtherAction { type: OtherTypeKeys.OTHER_ACTION }

// Action creators
export const mapClick = (latLng: L.LatLng) : CreatorFunction => {
    return (dispatch, getState) => {
        dispatch(Mouse.mapClick(latLng))
        let state = getState()
        switch (state.drawMode) {
            case AppState.DrawMode.CIRCLE:
                dispatch(Circle.nextDrawStage(state.circleState, latLng))
                break
            case AppState.DrawMode.LINE:
                dispatch(Line.nextDrawStage(state.lineState, latLng))
                break
            case AppState.DrawMode.TIMED_PATH:
                dispatch(Path.nextDrawStage(state.pathState, latLng))
                break
        }
    }
}

export const mapHover = (latLng: L.LatLng): CreatorFunction => {
    return (dispatch, getState) => {
        dispatch(Mouse.mapMouseMove(latLng))
        let state = getState()
        switch (state.drawMode) {
            case AppState.DrawMode.CIRCLE:
                state.circleState.drawStage == AppState.TripleDrawStage.DRAWING && dispatch(Circle.updateCircle(latLng))
                break
            case AppState.DrawMode.LINE:
                state.lineState.drawStage == AppState.TripleDrawStage.DRAWING && dispatch(Line.updateLineEnd(latLng))
                break
            case AppState.DrawMode.TIMED_PATH:
                break
        }
    }
}

export const modeSelect = (m: AppState.DrawMode): CreatorFunction => {
    return (dispatch, getState) => {
        dispatch(Mode.switchDrawMode(m))
        dispatch(Line.clearLine())
        dispatch(Circle.clearCircle())
        dispatch(Path.clearPath())
    }
}