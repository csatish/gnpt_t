import {createSelector} from './createSelector'
import Immutable from 'immutable'

export const departmentListSelect = createSelector(
    state => state.components.get('departments'),
    (departments) => {
        let departmentOptions = []

        for(let dept of departments) {
            departmentOptions.push({key: dept.get('deptId'), text: dept.get('name')})
        }
        return {
            departmentOptions,
            departments
        }
    }
)


export const employeeSelect = createSelector(
    state => state.components.get('users'),
    state => state.components.get('selectedEmployeeId'),
    state => state.components.get('isFetching'),
    (users, selectedEmployeeId, isFetching) => {

        let user = Immutable.Map()
        for(let emp of users) {
            if(selectedEmployeeId === emp.get('id')) {
                user = emp
                break
            }
        }
        return {
            user,
            isFetching
        }
    }
)