import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { Map, MapStateProps, MapDispatchProps, MapProps } from '../components/Map'
import { AppState } from '../AppState'
import * as Actions from "../actions/index"

const mapStateToProps = (state : AppState) : MapStateProps => {
  return {
    lines: state.lines
  }
}

const mapDispatchToProps = (dispatch: Dispatch<AppState>) : MapDispatchProps => {
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