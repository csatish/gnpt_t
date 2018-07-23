import {sendRequest} from './httpRequest'

export const getUserDetails = (userId) => sendRequest("https://reqres.in/api/users/"+userId)

