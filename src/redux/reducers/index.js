import { combineReducers } from 'redux';
import ListReducers from './ListReducers';


const rootReducer = combineReducers({
    ListReducers: ListReducers,
   
});
export default rootReducer;