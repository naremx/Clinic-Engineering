import LoginUser_Reducer from './LoginUser_Reducer';
import Add_Queue_Reducer from './Add_Queue_Reducer';
import Data_Datetime_Reducer from './Data_Datetime_Reducer';
import Topic_Queue_Reducer from './Topic_Queue_Reducer';

import { combineReducers } from 'redux'

export default combineReducers({
    LoginUser_Reducer,
    Add_Queue_Reducer,
    Data_Datetime_Reducer,
    Topic_Queue_Reducer
});