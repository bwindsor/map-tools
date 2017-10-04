import * as React from "react";
import * as Leaflet from "react-leaflet";
import DrawModeSelectorContainer from "../containers/DrawModeSelectorContainer"
import DrawInfoContainer from "../containers/DrawInfoContainer"
import * as AppState from "../AppState"
import Control from "react-leaflet-control"
import IntervalSender from './IntervalSender'

export interface MapDispatchProps {
    onMapClick: (e: L.LeafletMouseEvent) => void
    onMouseMove: (e: L.LeafletMouseEvent) => void
    onInterval: () => void
}
export interface MapStateProps {
    lines: L.LatLng[][],
    circles: AppState.Circle[]
    tileUrl: string
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
                    url = {this.props.tileUrl}
                    attribution = 'Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
                    minZoom = {5}
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
                <Leaflet.ScaleControl position="bottomright"/>
                <DrawModeSelectorContainer />
                <DrawInfoContainer />
                {this.props.onInterval && <IntervalSender interval={100} cb={()=>this.props.onInterval()}/>}
            </Leaflet.Map>
        );
    }
}