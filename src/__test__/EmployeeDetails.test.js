import React from 'react'
import { shallow } from 'enzyme'
import adt from './jestSetup'
import EmployeeDetails from '../components/EmployeeDetails'

describe('EmployeeDetails', () => {

    it('should be defined', () => {
        expect(EmployeeDetails).toBeDefined();
    })

    it('should render correctly', () => {
        const tree = shallow( <EmployeeDetails />)
        expect(tree).toMatchSnapshot()
    })

});
