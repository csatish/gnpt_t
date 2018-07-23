import { createAction } from 'redux-actions'
import {getUserDetails} from '../networking/restAPI'

export const SET_SELECTED_EMPLOYEE = "SET_SELECTED_EMPLOYEE"
export const setSelectedEmployee = createAction(SET_SELECTED_EMPLOYEE)

export const GET_EMPLOYEE_DETAILS = "GET_EMPLOYEE_DETAILS"
const getEmployeeDetailsAction = createAction(GET_EMPLOYEE_DETAILS, (params) => getUserDetails(params))

export const SET_EMPLOYEE_DETAILS = "SET_EMPLOYEE_DETAILS"
const setEmployeeDetailsAction = createAction(SET_EMPLOYEE_DETAILS)

export const getEmployeeDetails = (params) => (dispatch, getState) => {
    //Check if user already exist in state
    let state = getState()
    let users = state.components.get('users')
    if(users && users.size) {
        for(let user of users) {
            if(user.get('id') === params) {
                return
            }
        }
    }
    //Fetch user details if user does not exist
    return dispatch(getEmployeeDetailsAction(params)).then(
        ({value, action}) => {
            if(value) {
                console.log(value)
                dispatch(setEmployeeDetailsAction(value.data))
            }
        }
    )
}


