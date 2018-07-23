import React from 'react'
import {Provider} from 'react-redux'
import store from './store'
import { initializeIcons } from 'office-ui-fabric-react/lib/Icons'
import BaseContainer from '../containers/BaseContainer'

/** Initialize fabric icons  */
initializeIcons()

let AppRoute = () => {
    return (
        <Provider store={store}>
            <BaseContainer/>
        </Provider>
    )
}

export default AppRoute