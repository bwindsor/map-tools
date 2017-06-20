import * as React from "react";
import * as Leaflet from "react-leaflet";
import * as DrawModeSelector from "./DrawModeSelector"

export interface MapState {
    drawMode: DrawModeSelector.DrawMode,
    isDrawing: boolean
    lines: L.LatLng[][]
}

export class Map extends React.Component<undefined, MapState> {

    constructor() {
        super();
        // Initial state
        this.state = {
            drawMode: DrawModeSelector.DrawMode.LINE,
            isDrawing: false,
            lines: []
        };
    }

    render() {
        let map = <Leaflet.Map
                    center={[52.2,0.12]} 
                    zoom={12}
                    onclick={this.onMapClick}
                    onmousemove={this.onMapMouseMove}>
                <Leaflet.TileLayer
                    url = "http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution = 'Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
                    minZoom = {8}
                    maxZoom = {19}
                />
                {this.state.lines.map((latLngList, i) => 
                    <Leaflet.Polyline key={"polyline"+i.toString()} positions={latLngList} />
                )}
            </Leaflet.Map>;
        return map;
    }

    onMapMouseMove = (e: L.MouseEvent) => {
        if (this.state.isDrawing && (this.state.drawMode == DrawModeSelector.DrawMode.LINE)) {
            const lines = this.state.lines.slice();
            let lastLine = lines.pop().slice();
            lastLine.pop();
            lastLine.push(e.latlng);
            lines.push(lastLine);
            this.setState({lines});
        }
        
    }

    // Note how this uses the arrow and not the function.
    // This preserves bindings so "this" still means the object, not "this" for the click event
    onMapClick = (e: L.MouseEvent) => {
        let {isDrawing} = this.state;
        if (isDrawing) {
            isDrawing = false;
        } else if (this.state.lines.length > 0) {
            this.clearLines();
        } else {
            this.addLine([e.latlng, e.latlng])
            isDrawing = true;
        }
        this.setState({isDrawing});
    }

    clearLines() {
        this.setState({lines: []});
    }

    addLine(latLngList: L.LatLng[]) {
        const lines = this.state.lines.slice();
        lines.push(latLngList);
        this.setState({lines});
    }


}