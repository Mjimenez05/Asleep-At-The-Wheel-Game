import { createStore } from 'relite'
import actions from './actions'

export default function(initialState) {
    
    
    // return createStore(actions, initialState)
    return createStore(actions, initialState)
    
}
