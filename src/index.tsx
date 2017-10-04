import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux"
import { createStore, applyMiddleware } from "redux"
import MapContainer from "./containers/MapContainer"
import * as AppState from "./AppState"
import mapApp from "./reducers"
import thunk from 'redux-thunk';

declare var require: any
require('./style.scss')

let store = createStore(
    mapApp,
    applyMiddleware(thunk)
)

ReactDOM.render(
    <Provider store={store}>
    <MapContainer/>
    </Provider>,
    document.getElementById("main")
);