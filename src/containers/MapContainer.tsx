import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { Map, MapStateProps, MapDispatchProps, MapProps } from '../components/Map'
import { AppState, DrawMode } from '../AppState'
import * as Actions from "../actions/index"

const mapStateToProps = (state: AppState): MapStateProps => {
    if (!state.drawStart || !state.drawEnd) {
        return {
            lines: [],
            circles: []
        }
    }
    switch (state.drawMode) {
        case DrawMode.LINE:
            return {
                lines: [[state.drawStart, state.drawEnd]],
                circles: []
            }
        case DrawMode.CIRCLE:
            return {
                lines: [],
                circles: [{
                    centre: state.drawStart,
                    radius: state.distanceMetres
                }]
            }
        default:
            return {lines: [], circles: []}
    }
}

const mapDispatchToProps = (dispatch: Dispatch<AppState>): MapDispatchProps => {
    return {
        onMapClick: e => {
            dispatch(Actions.mapClick(e.latlng))
        },
        onMouseMove: e => { dispatch(Actions.mapMouseMove(e.latlng)) }
    }
}

const MapContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Map)

export default MapContainer