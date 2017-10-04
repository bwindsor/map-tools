// declare function require(path: string) : any;
// var Control = require("react-leaflet-control");
import Control from "react-leaflet-control"
import * as React from "react";
import * as ReactDOM from "react-dom";
import * as Leaflet from "react-leaflet";
import * as L from 'leaflet'
import * as AppState from "../AppState"

export interface StateFromProps{
    drawMode: AppState.DrawMode
}
export interface DispatchFromProps{
    onChange: React.EventHandler<React.ChangeEvent<HTMLButtonElement>>
}

export interface Props extends StateFromProps, DispatchFromProps {}

export class DrawModeSelectorControl extends React.Component<Props, undefined> {  // note we're extending MapControl from react-leaflet, not Component from react
  render() {
    return (
        <Control position="topleft">
            <div className="draw-mode-selector">
            <form>
                {Object.keys(AppState.DrawMode).map((d: AppState.DrawMode,i) => {
                    return (
                        <div key={d}>
                            <label>
                                <input type="radio" value={d} checked={d === this.props.drawMode} onChange={this.props.onChange} />
                                {(AppState.DrawMode as any)[d]}
                            </label>
                        </div>
                    )
                })}
            </form>
            </div>
        </Control>
    )
  }
}