// declare function require(path: string) : any;
// var Control = require("react-leaflet-control");
import Control from "react-leaflet-control"
import * as React from "react";
import * as ReactDOM from "react-dom";
import * as Leaflet from "react-leaflet";
import * as L from 'leaflet'
import * as AppState from "../AppState"

export interface DrawModeSelectorStateProps{
    drawMode: AppState.DrawMode;
}
export interface DrawModeSelectorDispatchProps{
    onChange: React.EventHandler<React.ChangeEvent<HTMLButtonElement>>
}

export interface DrawModeSelectorProps extends DrawModeSelectorStateProps, DrawModeSelectorDispatchProps {}

export class DrawModeSelectorControl extends React.Component<DrawModeSelectorProps, undefined> {  // note we're extending MapControl from react-leaflet, not Component from react
  render() {
    return (
        <Control position="topleft">
            <form>
                {Object.keys(AppState.DrawMode).filter(k => isNaN(parseInt(k))).map((d,i) => {
                    return (
                        <div key={d}>
                            <label>
                                <input type="radio" value={d} checked={i == this.props.drawMode} onChange={this.props.onChange} />
                                {d}
                            </label>
                        </div>
                    )
                })}
            </form>
        </Control>
    )
  }
}
/*
<Control position="topleft">
      <button 
          onClick={ () => console.log("Hello world") }
        >
          Click me
        </button>
    </Control>
    */