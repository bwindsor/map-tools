import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { Map, MapStateProps, MapDispatchProps } from '../components/Map'
import * as  AppState from '../AppState'
import * as Actions from "../actions/index"

const mapStateToProps = (state: AppState.AppState): MapStateProps => {
    let mapProps: MapStateProps = {
        lines: [],
        circles: [],
        tileUrl: state.tileUrl
    }

    switch (state.drawMode) {
        case AppState.DrawMode.LINE:
            if (state.lineState.drawStage != AppState.TripleDrawStage.NONE) {
                mapProps.lines = [[state.lineState.drawStart, state.lineState.drawEnd]]
            }
            break
        case AppState.DrawMode.CIRCLE:
            if (state.circleState.drawStage != AppState.TripleDrawStage.NONE) {
                mapProps.circles = [{
                    centre: state.circleState.drawCentre,
                    radius: state.circleState.drawRadius
                }]
            }
            break
        case AppState.DrawMode.TIMED_PATH:
            if (state.pathState.drawStage != AppState.TripleDrawStage.NONE) {
                mapProps.lines = [state.pathState.drawCoordinates]
            }
        default:
            // Do  nothing
            break
    }
    return mapProps
}

const mapDispatchToProps = (dispatch: Dispatch<AppState.AppState>): MapDispatchProps => {
    return {
        onMapClick: e => {
            dispatch(Actions.mapClick(e.latlng))
        },
        onMouseMove: e => { dispatch(Actions.mapHover(e.latlng)) },
        onInterval: () => { dispatch(Actions.updatePath()) }
    }
}

const MapContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Map)

export default MapContainer