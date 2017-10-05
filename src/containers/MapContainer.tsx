import * as React from 'react'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { Map, MapStateProps, MapDispatchProps } from '../components/Map'
import * as  AppState from '../AppState'
import * as Actions from "../actions/index"
import DrawModeSelectorContainer from "./DrawModeSelectorContainer"
import DrawInfoContainer from "./DrawInfoContainer"

interface Props {
    onMapClick: (e: L.LeafletMouseEvent) => void
    onMouseMove: (e: L.LeafletMouseEvent) => void
    onInterval: () => void
    lines: L.LatLng[][],
    circles: AppState.Circle[]
    tileUrl: string
}

export class MapCon extends React.Component<Props, undefined> {
    render() {
        return (
            <Map
                onMapClick={this.props.onMapClick}
                onMouseMove={this.props.onMouseMove}
                onInterval={this.props.onInterval}
                lines={this.props.lines}
                circles={this.props.circles}
                tileUrl={this.props.tileUrl}
            >
                <DrawModeSelectorContainer />
                <DrawInfoContainer />
            </Map>
        )
    }
}


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

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MapCon)