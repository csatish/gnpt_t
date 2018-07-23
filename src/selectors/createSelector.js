import { createSelectorCreator, defaultMemoize } from 'reselect'
import Immutable from 'immutable'
let defaultEqualityCheck = (currentVal, previousVal) => {
    return Immutable.is(currentVal, previousVal)
}

export const createSelector = createSelectorCreator(defaultMemoize, defaultEqualityCheck)

