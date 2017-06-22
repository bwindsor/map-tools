import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { DrawModeSelectorControl, DrawModeSelectorProps, DrawModeSelectorDispatchProps, DrawModeSelectorStateProps } from '../components/DrawModeSelector'
import { AppState } from '../AppState'
import * as Actions from "../actions/index"

const mapStateToProps = (state: AppState): DrawModeSelectorStateProps => {
    return {
        drawMode: state.drawMode
    }
}

const mapDispatchToProps = (dispatch: Dispatch<AppState>): DrawModeSelectorDispatchProps => {
    return {
        onChange: (e) => { dispatch(Actions.switchDrawMode(e.target.value)) }
    }
}

const DrawModeSelectorContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(DrawModeSelectorControl)

export default DrawModeSelectorContainer