import { AnyAction } from 'redux'

import { ACTION_SET_LOADING } from './actions'

const initalState: Stores.StoreState = {
    loading: false
}

export default {
    loading(state = initalState.loading, action: AnyAction) {
        const { type, payload } = action
        switch (type) {
            case ACTION_SET_LOADING:
                return payload
            default:
        }
        return state
    }
}
