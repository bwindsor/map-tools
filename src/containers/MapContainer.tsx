import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { Map, MapStateProps, MapDispatchProps, MapProps } from '../components/Map'
import { AppState, DrawMode } from '../AppState'
import * as Actions from "../actions/index"

const mapStateToProps = (state: AppState): MapStateProps => {
    let mapProps: MapStateProps = {
        lines: [],
        circles:  [],
        tileUrl: state.tileUrl
    }
    
    if (!state.drawStart || !state.drawEnd) {
        return mapProps;
    }
    switch (state.drawMode) {
        case DrawMode.LINE:
            mapProps.lines = [[state.drawStart, state.drawEnd]];
            break;
        case DrawMode.CIRCLE:
            mapProps.circles = [{
                    centre: state.drawStart,
                    radius: state.distanceMetres
                }];
            break;
        default:
            // Do  nothing
    }
    return mapProps;
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