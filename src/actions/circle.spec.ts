import * as actions from './circle'
import * as L from 'leaflet'

describe('actions', () => {
    it('should create an action to start a circle', () => {
        const startLatLng = L.latLng(0, 0)
        const expectedAction = {
            type: actions.TypeKeys.START_CIRCLE,
            latLng: startLatLng
        }
        expect(actions.startCircle(startLatLng)).toEqual(expectedAction)
    })
})