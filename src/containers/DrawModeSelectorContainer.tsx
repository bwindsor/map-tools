import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { DrawModeSelectorControl, StateFromProps, DispatchFromProps } from '../components/DrawModeSelector'
import { AppState } from '../AppState'
import * as Actions from "../actions/index"

const mapStateToProps = (state: AppState): StateFromProps => {
    return {
        drawMode: state.drawMode
    }
}

const mapDispatchToProps = (dispatch: Dispatch<AppState>): DispatchFromProps => {
    return {
        onChange: (e) => { dispatch(Actions.switchDrawMode(e.target.value)) }
    }
}

export default connect<StateFromProps, DispatchFromProps, {}>(
    mapStateToProps,
    mapDispatchToProps
)(DrawModeSelectorControl)