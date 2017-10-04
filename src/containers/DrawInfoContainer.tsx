import * as React from "react";
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { DrawInfoControl, DrawInfoProps } from '../components/DrawInfo'
import * as AppState from '../AppState'
import * as Actions from "../actions/index"
import * as Geometry from '../math/geometry'

const mapStateToProps = (state: AppState.AppState): DrawInfoProps => {
    return {
        distanceMetres: stateToDistanceMetres(state),
        distanceDescription: (state.drawMode == AppState.DrawMode.CIRCLE) ? "Radius" : "Length",
        latLon: state.mouseState.position
    }
}
function stateToDistanceMetres(state: AppState.AppState): number {
    switch (state.drawMode) {
        case AppState.DrawMode.CIRCLE:
            return state.circleState.drawRadius || 0
        case AppState.DrawMode.LINE:
            return (state.lineState.drawStage == AppState.TripleDrawStage.NONE) ? 0 : Geometry.latLonToArcLength(state.lineState.drawStart, state.lineState.drawEnd)
        default:
            return 0
    } 
}


const mapDispatchToProps = (dispatch: Dispatch<AppState.AppState>): {} => {
    return {}
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DrawInfoControl)