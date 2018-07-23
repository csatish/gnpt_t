import Immutable from 'immutable'
import {GET_EMPLOYEE_DETAILS, SET_EMPLOYEE_DETAILS, SET_SELECTED_EMPLOYEE} from '../actions/employeeFilterAction'

const compState = Immutable.fromJS({
    users:[],
    departments:[
            {deptId:'d1', name:'HR', employeeIds:[1,2,3,4,5]},
            {deptId:"d2",name:'Engineering', employeeIds:[6,7,8,9,10]}
        ],
    selectedEmployeeId:"",
    isFetching: false
})

export default function (state = compState, action) {
    let payload = action.payload
    switch (action.type) {
        case GET_EMPLOYEE_DETAILS + '_PENDING':
            return state.set('isFetching', true)

        case GET_EMPLOYEE_DETAILS + '_REJECTED':
            return state.set('isFetching', false)

        case SET_EMPLOYEE_DETAILS:
            let existingUsers = state.get('users')
            existingUsers = existingUsers.push(Immutable.fromJS(payload))
            state = state.set('users', existingUsers)
            return state.set('isFetching', false)

        case SET_SELECTED_EMPLOYEE:
            return state.set('selectedEmployeeId', payload)

        default:
            return state
    }
}
