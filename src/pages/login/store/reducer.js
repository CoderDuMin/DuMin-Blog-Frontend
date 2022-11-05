import { Map} from 'immutable'
import * as actionTypes from './constants'
const defaultState = Map({
  userInfo:'',
  token:''
})

export const reducer = function(state=defaultState,action){
  switch(action.type){
    case actionTypes.CHANGE_USEINFO:
      return state.set('userInfo',action.userInfo);
    default:
      return state
  }
}