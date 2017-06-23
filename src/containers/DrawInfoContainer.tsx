import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { DrawInfoControl, DrawInfoProps } from '../components/DrawInfo'
import { AppState, DrawMode } from '../AppState'
import * as Actions from "../actions/index"

const mapStateToProps = (state: AppState): DrawInfoProps => {
    return {
        distanceMetres: state.distanceMetres,
        latLon: state.mousePosition
    }
}

const mapDispatchToProps = (dispatch: Dispatch<AppState>): Object => {
    return {}
}

const DrawModeSelectorContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(DrawInfoControl)

export default DrawModeSelectorContainer