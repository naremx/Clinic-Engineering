import React , {Component} from 'react';
import { Router,Scene,Drawer,Tabs} from 'react-native-router-flux';
import { connect } from 'react-redux'


import Text from './Components/CustomText';
import TabIcon from './TabIcon.js';

import Home from './ScreensUser/Home.js';
import Search from './ScreensUser/Search.js';
import Notification from './ScreensUser/Notification.js';
import Queue from './ScreensUser/Queue.js';
import Assignment from './ScreensUser/Assignment.js';

import PhoneBook from './Screens/PhoneBook.js';
import Contact from './Screens/Contact.js';
import ResetPassword from './Screens/ResetPassword.js';

import UserContact from './ScreensUser/UserContact.js';
import Questions from './ScreensUser/Questions.js';
import Conditions from './ScreensUser/Conditions.js'
import CalendarUser from './ScreensUser/CalendarUser.js';
import DetailAdvisor from './ScreensUser/DetailAdvisor.js';
import AddQueue from './ScreensUser/AddQueue.js';
import DetailAddQueue from './ScreensUser/DetailAddQueue.js';
import CalendarUserTime from './ScreensUser/CalendarUserTime.js';
import UserEditProfile from './ScreensUser/UserEditProfile.js';
import ResultSearch from './ScreensUser/ResultSearch.js';

import AdvisorSelectMode from './ScreensAdvisor/AdvisorSelectMode.js';
import AdvisorScheduleAss from './ScreensAdvisor/ScheduleAss.js';
import AdvisorNotification from './ScreensAdvisor/Notification.js';
import AdvisorQueue from './ScreensAdvisor/Queue.js';
import AdvisorAssignment from './ScreensAdvisor/Assignment.js';
import AdvisorEditAllDate from './ScreensAdvisor/AdvisorEditAllDate.js';
import AdvisorEditSelectDate from './ScreensAdvisor/AdvisorEditSelectDate.js';
import AdvisorEditSelectTime from './ScreensAdvisor/AdvisorEditSelectTime.js';
import AdvisorDetailAddQueue from './ScreensAdvisor/DetailAddQueue.js';
import AdvisorEditProfile from './ScreensAdvisor/AdvisorEditProfile.js';
import AdvisorContact from './ScreensAdvisor/AdvisorContact.js';

import SlideMenuUser from './SlideMenu/SlideMenuUser';
import SlideMenuAdvisor from './SlideMenu/SlideMenuAdvisor';
import SlideMenu from './SlideMenu/SlideMenu';

class Routes extends React.Component{
    render(){
        return (
            <Router titleStyle={{color:'#87daf3', flex: 1 , textAlign: 'center', }}>
                <Scene key='root' hideNavBar>

                    <Scene key='ContactRoot' >
                        <Scene key='Contact' component={Contact} title='ติดต่อเรา' initial/>
                    </Scene>

                    <Scene key='UserContactRoot' >
                        <Scene key='UserContact' component={UserContact} title='ข้อมูลส่วนตัว' initial/>
                    </Scene>

                    <Scene key='AdvisorContactRoot' >
                        <Scene key='AdvisorContact' component={AdvisorContact} title='ข้อมูลส่วนตัว' initial/>
                    </Scene>

                    <Scene key='AdvisorContactRoot' >
                        <Scene key='AdvisorContact' component={AdvisorContact} title='ข้อมูลส่วนตัว' initial/>
                    </Scene>

                    <Scene key='QuestionsRoot' >
                        <Scene key='Questions' component={Questions} title='คำถามที่พบบ่อย'/>
                    </Scene>
                    
                    <Scene key='ConditionsRoot' >
                        <Scene key='Conditions' component={Conditions} title='เงื่อนไขและข้อตกลง'/>
                    </Scene>

                    <Scene key='UserEditProfileRoot' >
                        <Scene key='UserEditProfile' component={UserEditProfile} title='แก้ไขข้อมูลส่วนตัว'/>
                    </Scene>

                    <Scene key='AdvisorEditProfileRoot' >
                        <Scene key='AdvisorEditProfile' component={AdvisorEditProfile} title='แก้ไขข้อมูลส่วนตัว'/>
                    </Scene>

                    <Scene key='ResetPassword' >
                        <Scene key='ResetPassword' component={ResetPassword} title='ลืมรหัสผ่าน'/>
                    </Scene>

                    <Scene key='AddQueue' >
                        <Scene key='AddQueue' component={AddQueue} title='แอดคิว'/>
                    </Scene>

                    <Drawer key='auth' contentComponent={SlideMenu}  drawerImage={require('./Image/menu.png')} initial>
                        <Scene key='container' hideNavBar>
                            <Tabs key='tabBar' 
                                tabBarStyle={{ backgroundColor: '#fff' , height : 60 }}  
                                activeTintColor="#8ccff1" 
                                inactiveTintColor="#a69beb" >
                                    <Scene 
                                            key='PhoneBook' 
                                            component={PhoneBook} 
                                            icon={TabIcon}
                                            iconName="ios-call"
                                            title='สมุดโทรศัพท์' 
                                            initial>
                                    </Scene>
                            </Tabs>
                        </Scene>
                    </Drawer>

                    <Drawer key='user' contentComponent={SlideMenuUser}  drawerImage={require('./Image/menu.png')} >
                        <Scene key='container' hideNavBar>
                            <Tabs key='tabBar' 
                                tabBarStyle={{ backgroundColor: '#fff' , height : 60 }}  
                                activeTintColor="#87daf3" 
                                inactiveTintColor="#a69beb" >
                                    <Scene key='HomePage' iconName="ios-home" icon={TabIcon} title='หน้าหลัก'>
                                        <Scene 
                                                key='Home' 
                                                component={Home} 
                                                title='หน้าหลัก' 
                                                initial>
                                        </Scene>
                                        <Scene 
                                                key='DetailAdvisor' 
                                                component={DetailAdvisor} 
                                                title='รายละเอียดอาจารย์' 
                                                >
                                        </Scene>
                                        <Scene 
                                                key='CalendarUser' 
                                                component={CalendarUser} 
                                                title='วันที่นัด' 
                                                >
                                        </Scene>
                                        <Scene 
                                                key='CalendarUserTime' 
                                                component={CalendarUserTime} 
                                                title='เวลาที่นัด' 
                                                >
                                        </Scene>
                                        <Scene 
                                                key='AddQueue' 
                                                component={AddQueue} 
                                                title='เพิ่มคิว' 
                                                >
                                        </Scene>
                                    </Scene>

                                    <Scene key='SearchPage' iconName="ios-search" icon={TabIcon} title='ค้นหา'>
                                        <Scene 
                                                key='Search' 
                                                component={Search}
                                                iconName="ios-search"
                                                icon={TabIcon} 
                                                title='ค้นหา'>
                                        </Scene>
                                        <Scene 
                                                key='ResultSearch' 
                                                component={ResultSearch} 
                                                title='ผลการค้นหา' 
                                                >
                                        </Scene>
                                    </Scene>

                                    <Scene 
                                            key='Notification' 
                                            component={Notification}
                                            iconName="ios-notifications"
                                            icon={TabIcon}
                                            title='แจ้งเตือน'>
                                    </Scene>
                                    <Scene key='QueuePage' iconName="ios-people" icon={TabIcon} title='คิวจ้า'>
                                        <Scene 
                                                key='Queue' 
                                                component={Queue}
                                                title='คิว'>
                                        </Scene>

                                        <Scene 
                                                key='DetailAddQueue' 
                                                component={DetailAddQueue}
                                                title='รายละเอียดคิว'>
                                        </Scene>
                                    </Scene>

                                    <Scene 
                                            key='Assignment' 
                                            component={Assignment}
                                            iconName="ios-document"
                                            icon={TabIcon}  
                                            title='งาน'>
                                    </Scene>
                            </Tabs>
                        </Scene>
                    </Drawer>

                    <Drawer key='Advisor' contentComponent={SlideMenuAdvisor}  drawerImage={require('./Image/menu.png')}>
                        <Scene key='container' hideNavBar>
                            <Tabs key='tabBar' 
                                tabBarStyle={{ backgroundColor: '#fff' , height : 60 }}  
                                activeTintColor="#87daf3" 
                                inactiveTintColor="#a69beb" >
                                    <Scene key='AdvisorSelectMode' iconName="ios-home" icon={TabIcon} title='เลือกรายการ'>
                                        <Scene 
                                                key='AdvisorSelectMode' 
                                                component={AdvisorSelectMode} 
                                                title='เลือกรายการ' 
                                                initial>
                                        </Scene>
                                        <Scene 
                                                key='AdvisorEditAllDate' 
                                                component={AdvisorEditAllDate} 
                                                title='เพิ่มวันที่สามารถนัดคิวได้' 
                                                >
                                        </Scene>
                                        <Scene 
                                                key='AdvisorEditSelectDate' 
                                                component={AdvisorEditSelectDate} 
                                                title='แก้ไขวันที่สามารถนัดคิวได้' 
                                                >
                                        </Scene>
                                        <Scene 
                                                key='AdvisorEditSelectTime' 
                                                component={AdvisorEditSelectTime} 
                                                title='แก้ไขเวลาที่สามารถนัดคิวได้' 
                                                >
                                        </Scene>
                                    </Scene>

                                    <Scene key='ScheduleAssPage' iconName="ios-book" icon={TabIcon} title='วิทยานิพนธ์'>
                                        <Scene 
                                                key='AdvisorScheduleAss' 
                                                component={AdvisorScheduleAss}
                                                iconName="ios-search"
                                                icon={TabIcon} 
                                                title='วิทยานิพนธ์'>
                                        </Scene>
                                    </Scene>

                                    <Scene 
                                            key='AdvisorNotification' 
                                            component={AdvisorNotification}
                                            iconName="ios-notifications"
                                            icon={TabIcon}
                                            title='แจ้งเตือน'>
                                    </Scene>
                                    <Scene key='AdvisorQueue' iconName="ios-home" icon={TabIcon} title='คิว'>
                                        <Scene 
                                                key='AdvisorQueue' 
                                                component={AdvisorQueue}
                                                iconName="ios-people"
                                                icon={TabIcon} 
                                                title='คิว'>
                                        </Scene>

                                        <Scene 
                                                key='AdvisorDetailAddQueue' 
                                                component={AdvisorDetailAddQueue}
                                                title='รายละเอียดคิว'>
                                        </Scene>
                                    </Scene>

                                    <Scene 
                                            key='AdvisorAssignment' 
                                            component={AdvisorAssignment}
                                            iconName="ios-document"
                                            icon={TabIcon}  
                                            title='งาน'>
                                    </Scene>
                            </Tabs>
                        </Scene>
                    </Drawer>
                </Scene>
            </Router>
        );
    }
}


const mapStateToProps = ({ LoginUser_Reducer,Add_Queue_Reducer }) => {
    const { token,role } = LoginUser_Reducer;
    const { val } = Add_Queue_Reducer;
        return { token,role,val };
  }

export default connect(mapStateToProps)(Routes);
