import React , {Component} from 'react';
import { Router,Scene,Drawer,Tabs,Actions } from 'react-native-router-flux';
import { StyleSheet,View,Image,TouchableOpacity,ActivityIndicator } from 'react-native';
import { LinearGradient,Font} from 'expo';

import Text from './Components/CustomText';
import TabIcon from './TabIcon.js';

import ModalCardRegister from './ModalScreen/ModalCardRegister.js';
import ModalCardLogin from './ModalScreen/ModalCardLogin.js';

import Home from './ScreensUser/Home.js';
import Search from './ScreensUser/Search.js';
import Notification from './ScreensUser/Notification.js';
import Queue from './ScreensUser/Queue.js';
import Assignment from './ScreensUser/Assignment.js';

import PhoneBook from './Screens/PhoneBook.js';

import Contact from './ScreensUser/Contact.js';
import Questions from './ScreensUser/Questions.js';
import Conditions from './ScreensUser/Conditions.js'
import Calendar from './ScreensUser/Calendar.js';
import AddQueue from './ScreensUser/AddQueue.js';
import DetailAddQueue from './ScreensUser/DetailAddQueue.js';

import AdvisorScheduleDate from './ScreensAdvisor/ScheduleDate.js';
import AdvisorScheduleAss from './ScreensAdvisor/ScheduleAss.js';
import AdvisorNotification from './ScreensAdvisor/Notification.js';
import AdvisorQueue from './ScreensAdvisor/Queue.js';
import AdvisorAssignment from './ScreensAdvisor/Assignment.js';

class Routes extends React.Component{
    render(){
        return (
            <Router titleStyle={Styles.Title}>
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

                    <Drawer key='auth' contentComponent={SideMenu}  drawerImage={require('./Image/menu.png')} >
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

                    <Drawer key='user' contentComponent={SideMenu}  drawerImage={require('./Image/menu.png')}initial>
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
                                                key='Calendar' 
                                                component={Calendar} 
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
                                    <Scene key='QueuePage' iconName="ios-people" icon={TabIcon} title='คิว'>
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

                    <Drawer key='Advisor' contentComponent={SideMenu}  drawerImage={require('./Image/menu.png')} >
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


class SideMenu extends Component {
    constructor(){
        super();
        this.state = {
            fontLoaded: false
        };
    }
    async componentDidMount() {
        await Font.loadAsync({
          'supermarket': require('./assets/fonts/supermarket.ttf'),
          'LayijiMahaniyomV105': require('./assets/fonts/LayijiMahaniyomV105.ttf'),
        });
        this.setState({fontLoaded: true});
      }
      
    render() {
      return (
        <View style={Styles.viewContainer}>
            <LinearGradient colors ={['#87daf3','#a69beb']} style={Styles.Profile}>
                <View style={{flexDirection: "row" , marginLeft: 20 , marginTop: 80}}>
                    <Image
                        style={Styles.drawerImage}
                        source={require('./Image/user.png')} />
                    <View style={{flexDirection: "column" , marginLeft: 20 , marginTop: 30}}>
                        <ModalCardLogin/>
                        <ModalCardRegister/>
                    </View>
                </View>
            </LinearGradient>
            <TouchableOpacity onPress={()=> Actions.ContactRoot()}>
                {this.state.fontLoaded ? (
                    <Text type="basic" style={{ color : '#a69beb' , fontSize: 20 , marginTop: 10 , marginLeft: 20  }}>ติดต่อเรา</Text>
            ):(
                <ActivityIndicator/>
            )}
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> Actions.QuestionsRoot()} >
                {this.state.fontLoaded ? (
                    <Text type="basic" style={{ color : '#a69beb' , fontSize: 20 , marginTop: 10 , marginLeft: 20  }}>คำถามที่พบบ่อย</Text>
            ):(
                <ActivityIndicator/>
            )}
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> Actions.ConditionsRoot()}>
                {this.state.fontLoaded ? (
                    <Text type="basic" style={{ color : '#a69beb' , fontSize: 20 , marginTop: 10 , marginLeft: 20  }}>เงื่อนไขและข้อตกลง</Text>
            ):(
                <ActivityIndicator/>
            )}
            </TouchableOpacity>
        </View>
      );
    }
  }



const Styles = StyleSheet.create({
viewContainer: {
    flex: 1,
    backgroundColor: '#fff'
},
Profile:{
    height: 200,
    width: 300,
},
Title:{
    color:'#87daf3',
    flex: 1,
    textAlign: 'center',
},
drawerImage: {
    height: 100,
    width: 100,
    borderRadius: 100,
}
});

export default Routes