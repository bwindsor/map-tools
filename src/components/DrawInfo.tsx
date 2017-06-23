// declare function require(path: string) : any;
// var Control = require("react-leaflet-control");
import Control from "react-leaflet-control"
import * as React from "react";
import * as ReactDOM from "react-dom";
import * as Leaflet from "react-leaflet";
import * as L from 'leaflet'

export interface DrawInfoProps{
    latLon: L.LatLng
    distanceDescription: String
    distanceMetres: number
}

export class DrawInfoControl extends React.Component<DrawInfoProps, undefined> {  // note we're extending MapControl from react-leaflet, not Component from react
  render() {
    return (
        <Control position="topleft">
            <div className="draw-info">
            <div>
                Location: {this.props.latLon.lat.toFixed(4)}, {this.props.latLon.lng.toFixed(4)}
            </div>
            <div>
                {this.props.distanceDescription}: {this.props.distanceMetres > 10000 ? (this.props.distanceMetres/1000).toFixed(1) + "km" : this.props.distanceMetres.toFixed(0) + "m"}
            </div>
            </div>
        </Control>
    )
  }
}