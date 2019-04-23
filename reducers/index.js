import LoginUser_Reducer from './LoginUser_Reducer';
import Add_Queue_Reducer from './Add_Queue_Reducer';
import Data_Datetime_Reducer from './Data_Datetime_Reducer';
import Topic_Queue_Reducer from './Topic_Queue_Reducer';
import Data_Advisor_Reducer from './Data_Advisor_Reducer';
import Advisor_Date_Reducer from './Advisor_Date_Reducer';
import User_Select_time_reducer from './User_Select_time_reducer';
import User_Select_Time_Detail_Reducer from './User_Select_Time_Detail_Reducer';
import Ad_Select_Time_Detail_Reducer from './Ad_Select_Time_Detail_Reducer';
import LoginUser_Data_Reducer from './LoginUser_Data_Reducer';
import User_Search_Reducer from './User_Search_Reducer';
import User_Detail_Doc from './User_Detail_Doc';

import { combineReducers } from 'redux'

export default combineReducers({
    LoginUser_Reducer,
    Add_Queue_Reducer,
    Data_Datetime_Reducer,
    Topic_Queue_Reducer,
    Data_Advisor_Reducer,
    Advisor_Date_Reducer,
    User_Select_time_reducer,
    User_Select_Time_Detail_Reducer,
    Ad_Select_Time_Detail_Reducer,
    LoginUser_Data_Reducer,
    User_Search_Reducer,
    User_Detail_Doc
});