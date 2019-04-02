import React , {Component} from 'react';
import { Router,Scene,Drawer,Tabs,Actions } from 'react-native-router-flux';
import { StyleSheet,View,Image,TouchableOpacity,ActivityIndicator } from 'react-native';
import { LinearGradient,Font} from 'expo';
import { connect } from 'react-redux'
import { Ionicons } from 'react-native-vector-icons'

import Text from './Components/CustomText';
import TabIcon from './TabIcon.js';

import Home from './ScreensUser/Home.js';
import Search from './ScreensUser/Search.js';
import Notification from './ScreensUser/Notification.js';
import Queue from './ScreensUser/Queue.js';
import Assignment from './ScreensUser/Assignment.js';

import PhoneBook from './Screens/PhoneBook.js';

import Contact from './ScreensUser/Contact.js';
import Questions from './ScreensUser/Questions.js';
import Conditions from './ScreensUser/Conditions.js'
import CalendarUser from './ScreensUser/CalendarUser.js';
import DetailAdvisor from './ScreensUser/DetailAdvisor.js';
import AddQueue from './ScreensUser/AddQueue.js';
import DetailAddQueue from './ScreensUser/DetailAddQueue.js';

import AdvisorScheduleDate from './ScreensAdvisor/ScheduleDate.js';
import AdvisorScheduleAss from './ScreensAdvisor/ScheduleAss.js';
import AdvisorNotification from './ScreensAdvisor/Notification.js';
import AdvisorQueue from './ScreensAdvisor/Queue.js';
import AdvisorAssignment from './ScreensAdvisor/Assignment.js';

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

                    <Scene key='QuestionsRoot' >
                        <Scene key='Questions' component={Questions} title='คำถามที่พบบ่อย'/>
                    </Scene>
                    
                    <Scene key='ConditionsRoot' >
                        <Scene key='Conditions' component={Conditions} title='เงื่อนไขและข้อตกลง'/>
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
                                                title='ปฏิทิน' 
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
                                    <Scene key='ScheduleDatePage' iconName="ios-home" icon={TabIcon} title='ตารางเวลา'>
                                        <Scene 
                                                key='AdvisorScheduleDate' 
                                                component={AdvisorScheduleDate} 
                                                title='ตารางเวลา' 
                                                initial>
                                        </Scene>
                                    </Scene>

                                    <Scene key='ScheduleAssPage' iconName="ios-search" icon={TabIcon} title='รายงาน'>
                                        <Scene 
                                                key='AdvisorScheduleAss' 
                                                component={AdvisorScheduleAss}
                                                iconName="ios-search"
                                                icon={TabIcon} 
                                                title='รายงาน'>
                                        </Scene>
                                    </Scene>

                                    <Scene 
                                            key='AdvisorNotification' 
                                            component={AdvisorNotification}
                                            iconName="ios-notifications"
                                            icon={TabIcon}
                                            title='แจ้งเตือน'>
                                    </Scene>

                                    <Scene 
                                            key='AdvisorQueue' 
                                            component={AdvisorQueue}
                                            iconName="ios-people"
                                            icon={TabIcon} 
                                            title='คิว'>
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
