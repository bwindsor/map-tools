import * as React from 'react'
import { configure, mount } from 'enzyme'
import * as renderer from 'react-test-renderer'
import reducer from './circle'
import * as actions from '../actions/circle'
import * as Adapter from 'enzyme-adapter-react-15'
import * as AppState from '../AppState'
import * as L from 'leaflet'
import * as Geometry from '../math/geometry'

configure({ adapter: new (Adapter as any)() });

describe('Circle Reducers', () => {

    it('should return the initial state', () => {
        expect(reducer(undefined, {} as any)).toEqual(
            {
                drawCentre: null,
                drawRadius: null,
                drawStage: AppState.TripleDrawStage.NONE
            }
        )
    })

    it ('should start a circle at the given location', ()=>{
        expect(reducer(
            {
                drawCentre: null,
                drawRadius: null,
                drawStage: AppState.TripleDrawStage.NONE
            },
            actions.startCircle(L.latLng(1,2))
        )).toEqual(
            {
                drawCentre: L.latLng(1,2),
                drawRadius: 0,
                drawStage: AppState.TripleDrawStage.DRAWING
            }
        )
    })

    it ('should change the circle size to a given location', ()=>{
        expect(reducer(
            {
                drawCentre: L.latLng(0,0),
                drawRadius: 0,
                drawStage: AppState.TripleDrawStage.DRAWING
            },
            actions.updateCircle(L.latLng(1,1))
        )).toEqual(
            {
                drawCentre: L.latLng(0,0),
                drawRadius: Geometry.latLonToArcLength(L.latLng(0,0), L.latLng(1,1)),
                drawStage: AppState.TripleDrawStage.DRAWING
            }
        )
    })

    it ('should stop drawing a circle', ()=>{
        expect(reducer(
            {
                drawCentre: L.latLng(0,1),
                drawRadius: 455,
                drawStage: AppState.TripleDrawStage.DRAWING
            },
            actions.stopCircle()
        )).toEqual(
            {
                drawCentre: L.latLng(0,1),
                drawRadius: 455,
                drawStage: AppState.TripleDrawStage.DRAWN
            }
        )
    })

    it ('should clear the circle whilst drawing', ()=>{
        expect(reducer(
            {
                drawCentre: L.latLng(0,1),
                drawRadius: 455,
                drawStage: AppState.TripleDrawStage.DRAWING
            },
            actions.clearCircle()
        )).toEqual(
            {
                drawCentre: null,
                drawRadius: null,
                drawStage: AppState.TripleDrawStage.NONE
            }
        )
    })

    it('should clear the circle when drawing is finished', ()=>{
        expect(reducer(
            {
                drawCentre: L.latLng(0,1),
                drawRadius: 455,
                drawStage: AppState.TripleDrawStage.DRAWN
            },
            actions.clearCircle()
        )).toEqual(
            {
                drawCentre: null,
                drawRadius: null,
                drawStage: AppState.TripleDrawStage.NONE
            }
        )
    })
})