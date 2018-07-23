import React from 'react'
import { shallow } from 'enzyme'
import adt from './jestSetup'
import BaseContainer from '../containers/BaseContainer'

describe('BaseContainer', () => {

    it('should be defined', () => {
        expect(BaseContainer).toBeDefined();
    })

    it('should render correctly', () => {
        const tree = shallow( <BaseContainer />)
        expect(tree).toMatchSnapshot()
    })

});