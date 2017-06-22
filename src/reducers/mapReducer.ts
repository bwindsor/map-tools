import * as AppState from "../AppState"
import * as Actions from "../actions/index"

const initialState: AppState.AppState = {
    drawMode: AppState.DrawMode.LINE,
    isDrawing: false,
    lines: []
}

const mapReducer = (state = initialState, action: Actions.MapAction) => {
    switch (action.type) {
        case Actions.MAP_CLICK:
            switch (state.drawMode) {
                case AppState.DrawMode.LINE:
                    let newState = { ...state };
                    if (state.isDrawing) {
                        newState.isDrawing = false;
                    } else {
                        if (state.lines.length > 0) {
                            newState.lines = []
                        } else {
                            newState.lines.push([action.latLng, action.latLng]);
                            newState.isDrawing = true;
                        }
                    }
                    return newState;
                case AppState.DrawMode.CIRCLE:
                    
                default:
                    // Do nothing
                    return state;
            }
        case Actions.MAP_MOUSE_MOVE:
            if (state.isDrawing) {
                const lines = state.lines.slice();
                let lastLine = lines.pop().slice();
                lastLine.pop();
                lastLine.push(action.latLng);
                lines.push(lastLine);
                return {
                    ...state,
                    lines: lines
                }
            } else {
                return state;
            }
        case Actions.SWITCH_DRAW_MODE:
            return {
                ...state,
                drawMode: action.drawMode,
                lines: [],
                isDrawing: false
            }
        default:
            return state
    }
}

export default mapReducer