import * as React from "react";
import * as Leaflet from "react-leaflet";

export enum DrawMode {
    LINE,
    CIRCLE
}

export interface DrawModeSelectorProps {
    drawMode: DrawMode;
}

export class DrawModeSelector extends React.Component<DrawModeSelectorProps, undefined> {
    
}