import LoginUser_Reducer from './LoginUser_Reducer';
import Add_Queue_Reducer from './Add_Queue_Reducer';
import Data_Datetime_Reducer from './Data_Datetime_Reducer';
import Topic_Queue_Reducer from './Topic_Queue_Reducer';
import Data_Advisor_Reducer from './Data_Advisor_Reducer';
import Advisor_Date_Reducer from './Advisor_Date_Reducer';
import User_Select_time_reducer from './User_Select_time_reducer';

import { combineReducers } from 'redux'

export default combineReducers({
    LoginUser_Reducer,
    Add_Queue_Reducer,
    Data_Datetime_Reducer,
    Topic_Queue_Reducer,
    Data_Advisor_Reducer,
    Advisor_Date_Reducer,
    User_Select_time_reducer
});