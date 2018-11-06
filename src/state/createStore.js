import { createStore as reduxCreateStore, combineReducers, applyMiddleware } from "redux"
import Cookies from 'universal-cookie'
import thunk from "redux-thunk"

const LSB_TOGGLE = (state=true, action) => action.type === `LSB_TOGGLE` ? !state : state
const RSB_TOGGLE = (state=true, action) => action.type === `RSB_TOGGLE` ? !state : state

const LOGIN = (state={social: null, token: null, userID: null, name: null}, action) => {
    let cookies
    switch (action.type) {
        case `AUTH`: 
            console.log(action.user)
            cookies = new Cookies()
            cookies.set('user', action.user, { path: '/' });         
            return action.user
        case `LOGIN`:
            console.log("login")
            return state
        case `LOGIN_UPDATE`:
            if (state.name) return state
            console.log("user not validate")
            cookies = new Cookies()
            const user = cookies.get('user')            
            return user
        default: return state
    }
}

const ACCOUNTS = (state=[], action) => {
    switch (action.type) {
        case `SET_ACCOUNTS`: return action.accounts
        default: return state
    }
}

const ADD_ACCOUNT_STATUS = (state="", action) => {
    switch (action.type) {
        case `ADD_ACCOUNT_START`: return `WAIT`;
        case `ADD_ACCOUNT_FIN`: return `OK`
        case `ADD_ACCOUNT_ERR`: return `ERROR`
        default: return state
    }
}

const NEXT_ACCOUNTS = (state=[], action) => {
    switch (action.type) {
        case `ADD_ACCOUNT`:
            console.log("!!!*", [
                ...state,
                action.user
            ])                
        return [
            ...state,
            action.user
        ]
        default: return state
    }
}

const POSTS = (state=[], action) => {
    switch (action.type) {
        case `SET_POSTS`: return action.posts
        default: return state
    }
}

const reducer = combineReducers({LSB_TOGGLE, RSB_TOGGLE, ACCOUNTS, POSTS, LOGIN, NEXT_ACCOUNTS, ADD_ACCOUNT_STATUS})

const createStore = () => reduxCreateStore(reducer, applyMiddleware(thunk))

export default createStore