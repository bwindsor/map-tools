// declare function require(path: string) : any;
// var Control = require("react-leaflet-control");
import Control from "react-leaflet-control"
import * as React from "react";
import * as ReactDOM from "react-dom";
import * as Leaflet from "react-leaflet";
import * as L from 'leaflet'

export interface DrawInfoProps{
    latLon: L.LatLng
    distanceMetres: number
}

export class DrawInfoControl extends React.Component<DrawInfoProps, undefined> {  // note we're extending MapControl from react-leaflet, not Component from react
  render() {
    return (
        <Control position="topleft">
            <div>
            <div>
                Location: {this.props.latLon.lat.toFixed(4)}, {this.props.latLon.lng.toFixed(4)}
            </div>
            <div>
                Distance: {this.props.distanceMetres.toFixed(0)}m
            </div>
            </div>
        </Control>
    )
  }
}