import * as AppState from "../AppState"
import * as Actions from "../actions/index"

const initialState: AppState.AppState = {
    drawMode: AppState.DrawMode.LINE,
    isDrawing: false,
    lines: [],
    circles: []
}

const mapReducer = (state = initialState, action: Actions.MapAction) : AppState.AppState=> {
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
                    let newState2 = { ...state };
                    if (state.isDrawing) {
                        newState2.isDrawing = false;
                    } else {
                        if (state.circles.length > 0) {
                            newState2.circles = []
                        } else {
                            newState2.circles.push({ centre: action.latLng, radius: 0 });
                            newState2.isDrawing = true;
                        }
                    }
                    return newState2;
                default:
                    // Do nothing
                    return state;
            }
        case Actions.MAP_MOUSE_MOVE:
            if (state.isDrawing) {
                switch (state.drawMode) {
                    case AppState.DrawMode.LINE:
                        const lines = state.lines.slice();
                        let lastLine = lines.pop().slice();
                        lastLine.pop();
                        lastLine.push(action.latLng);
                        lines.push(lastLine);
                        return {
                            ...state,
                            lines: lines
                        }
                    case AppState.DrawMode.CIRCLE:
                        const circles = state.circles.slice();
                        let lastCircle = {...(circles.pop())};
                        // TODO - calculate this radius
                        lastCircle.radius = 10;
                        circles.push(lastCircle);
                        return {
                            ...state,
                            circles: circles
                        }
                    default:
                        return {...state};
                }
            } else {
                return state;
            }
        case Actions.SWITCH_DRAW_MODE:
            return {
                ...state,
                drawMode: action.drawMode,
                lines: [],
                circles: [],
                isDrawing: false
            }
        default:
            return state
    }
}

export default mapReducer