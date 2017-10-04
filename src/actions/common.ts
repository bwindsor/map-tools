import * as AppState from "../AppState"
import { Dispatch } from 'redux'

export type CreatorFunction = (dispatch: Dispatch<AppState.AppState>, getState: ()=>AppState.AppState) => any