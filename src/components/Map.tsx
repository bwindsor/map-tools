import * as React from "react";
import * as Leaflet from "react-leaflet";
import DrawModeSelectorContainer from "../containers/DrawModeSelectorContainer"
import * as AppState from "../AppState"

export interface MapDispatchProps {
    onMapClick: (e: L.MouseEvent) => void
    onMouseMove: (e: L.MouseEvent) => void
}
export interface MapStateProps {
    lines: L.LatLng[][],
    circles: AppState.Circle[]
}
export interface MapProps extends MapStateProps, MapDispatchProps {}

export class Map extends React.Component<MapProps, undefined> {
    
    render() {
        return (
            <Leaflet.Map
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
                {
                    this.props.circles.map((circle, i) => 
                        <Leaflet.Circle key={"circle"+i.toString()} center={circle.centre} radius={circle.radius} />
                    )
                }
                <DrawModeSelectorContainer />
            </Leaflet.Map>
        );
    }
}