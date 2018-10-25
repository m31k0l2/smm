import { createStore as reduxCreateStore, combineReducers } from "redux"

const LSB_TOGGLE = (state=true, action) => action.type === `LSB_TOGGLE` ? !state : state
const RSB_TOGGLE = (state=true, action) => action.type === `RSB_TOGGLE` ? !state : state

const ACCOUNTS = (state=["tonia", "nikita"], action) => {
    switch (action.type) {
        case `SET_ACCOUNTS`: return action.accounts
        default: return state
    }
}

const reducer = combineReducers({LSB_TOGGLE, RSB_TOGGLE, ACCOUNTS})

const createStore = () => reduxCreateStore(reducer)

export default createStore