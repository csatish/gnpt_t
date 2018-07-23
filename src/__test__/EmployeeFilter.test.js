import React from 'react'
import { shallow } from 'enzyme'
import adt from './jestSetup'
import EmployeeFilter from '../components/EmployeeFilter'

describe('EmployeeFilter', () => {

    it('should be defined', () => {
        expect(EmployeeFilter).toBeDefined();
    })

    it('should render correctly', () => {
        const tree = shallow( <EmployeeFilter />)
        expect(tree).toMatchSnapshot()
    })

});
