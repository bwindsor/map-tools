import * as React from "react";
import * as Leaflet from "react-leaflet";
import * as DrawModeSelector from "./DrawModeSelector"

export interface MapDispatchProps {
    onMapClick: (e: L.MouseEvent) => void
    onMouseMove: (e: L.MouseEvent) => void
}
export interface MapStateProps {
    lines: L.LatLng[][]
}
export interface MapProps extends MapStateProps, MapDispatchProps {}

export class Map extends React.Component<MapProps, undefined> {
    
    render() {
        let map = <Leaflet.Map
                    center={[52.2,0.12]} 
                    zoom={12}
                    onclick={this.props.onMapClick}
                    onmousemove={this.props.onMouseMove}>
                <Leaflet.TileLayer
                    url = "http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution = 'Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
                    minZoom = {8}
                    maxZoom = {19}
                />
                {this.props.lines.map((latLngList, i) => 
                    <Leaflet.Polyline key={"polyline"+i.toString()} positions={latLngList} />
                )}
            </Leaflet.Map>;
        return map;
    }
}