import * as React from "react";
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { DrawInfoControl, DrawInfoProps } from '../components/DrawInfo'
import { AppState, DrawMode } from '../AppState'
import * as Actions from "../actions/index"

const mapStateToProps = (state: AppState): DrawInfoProps => {
    return {
        distanceMetres: state.distanceMetres,
        distanceDescription: (state.drawMode == DrawMode.CIRCLE) ? "Radius" : "Length",
        latLon: state.mousePosition
    }
}

const mapDispatchToProps = (dispatch: Dispatch<AppState>): {} => {
    return {}
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DrawInfoControl)