import * as React from "react";
import * as Leaflet from "react-leaflet";
import * as DrawModeSelector from "./DrawModeSelector"

export interface MapState {
    drawMode: DrawModeSelector.DrawMode,
    isDrawing: boolean
    markers: L.LatLng[]
}

export class Map extends React.Component<undefined, MapState> {
    constructor() {
        super();
        // Initial state
        this.state = {
            drawMode: DrawModeSelector.DrawMode.LINE,
            isDrawing: false,
            markers: []
        };
    }

    render() {
        let map = <Leaflet.Map
                    center={[52.2,0.12]} 
                    zoom={12}
                    onclick={this.onMapClick}>
                <Leaflet.TileLayer
                    url = "http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution = 'Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
                    minZoom = {8}
                    maxZoom = {19}
                />
                {
                    this.state.markers.map((position, i) =>
                        <Leaflet.Marker key={"marker"+i.toString()} position={position} />
                    )
                }
            </Leaflet.Map>;
        return map;
    }

    // Note how this uses the arrow and not the function.
    // This preserves bindings so "this" still means the object, not "this" for the click event
    onMapClick = (e: L.MouseEvent) => {
        let {isDrawing} = this.state;
        if (isDrawing) {
            this.addMarker(e.latlng);
            isDrawing = false;
        } else if (this.state.markers.length > 0) {
            this.clearMarkers();
        } else {
            this.addMarker(e.latlng);
            isDrawing = true;
        }
        this.setState({isDrawing});
    }

    clearMarkers() {
        this.setState({markers:[]});
    }
    
    addMarker(latLng: L.LatLng) {
        const {markers:markers} = this.state;
        markers.push(latLng);
        this.setState({markers:markers});
    }
}