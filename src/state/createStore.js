import { createStore as reduxCreateStore } from "redux"

const reducer = (state, action) => {
    switch (action.type) {
        case `LSB_TOGGLE`: return Object.assign({}, state, { lsbToggleOn: !state.lsbToggleOn, })    
        case `RSB_TOGGLE`: return Object.assign({}, state, { rsbToggleOn: !state.rsbToggleOn, })
    }
    return state
}

const initialState = { lsbToggleOn: true, rsbToggleOn: true }

const createStore = () => reduxCreateStore(reducer, initialState)
export default createStore