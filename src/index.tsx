import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux"
import { createStore } from "redux"
import MapContainer from "./containers/MapContainer"
import * as AppState from "./AppState"
import mapApp from "./reducers/mapReducer"

let store = createStore(mapApp)

ReactDOM.render(
    <Provider store={store}>
    <MapContainer/>
    </Provider>,
    document.getElementById("main")
);