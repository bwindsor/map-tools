import * as React from 'react'
import { configure, mount } from 'enzyme'
import * as renderer from 'react-test-renderer'
import { Map } from '../src/components/Map'
import * as L from 'leaflet'
import * as Adapter from 'enzyme-adapter-react-15'

configure({ adapter: new (Adapter as any)() });

describe('Map', () => {

    it('should render the map component', () => {
        const wrapper = mount(
            <div>
                <Map
                    onMapClick={e => { }}
                    onMouseMove={e => { }}
                    onInterval={() => { }}
                    lines={[]}
                    circles={[]}
                    tileUrl=""
                />
            </div>
        , {attachTo: document.createElement('div')})

        expect(wrapper.find('DrawInfo')).toHaveLength(0)
    })
})