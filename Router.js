import React , {Component} from 'react';
import { Router,Scene,Drawer,Tabs } from 'react-native-router-flux';
import { StyleSheet,View,Text,Image,TouchableOpacity,Modal,TextInput } from 'react-native';
import { LinearGradient,Actions } from 'expo';
import { Ionicons } from 'react-native-vector-icons'

import TabIcon from './TabIcon.js';

import Home from './Screens/Home.js';
import Search from './Screens/Search.js';
import Notification from './Screens/Notification.js';
import Queue from './Screens/Queue.js';
import Assignment from './Screens/Assignment.js';
import Contact from './Screens/Contact.js';
import Questions from './Screens/Questions.js';
import Conditions from './Screens/Conditions.js'
import AddQueue from './Screens/AddQueue.js'

class Routes extends React.Component{
    render(){
        return (
            <Router titleStyle={Styles.Title}>
                <Scene key='root' hideNavBar>
                    <Scene key='auth' type='replace'>
                        <Scene key='Contact' component={Contact} title='ติดต่อเรา' initial/>
                        <Scene key='Questions' component={Questions} title='คำถามที่พบบ่อย'/>
                        <Scene key='Conditions' component={Conditions} title='เงื่อนไขและข้อตกลง'/>
                    </Scene>
                    <Drawer key='menu' contentComponent={SideMenu}  drawerImage={require('./Image/menu.png')} initial>
                        <Scene key='container' hideNavBar>
                            <Tabs key='tabBar' 
                                tabBarStyle={{ backgroundColor: '#fff' , height : 60 }}  
                                activeTintColor="#87daf3" 
                                inactiveTintColor="#a69beb" >
                                    <Scene key='HomePage' iconName="ios-home" icon={TabIcon}>
                                        <Scene 
                                                key='Home' 
                                                component={Home} 
                                                title='หน้าหลัก' 
                                                initial>
                                        </Scene>
                                    </Scene>

                                    <Scene key='SearchPage' iconName="ios-search" icon={TabIcon}>
                                        <Scene 
                                                key='Search' 
                                                component={Search}
                                                iconName="ios-search"
                                                icon={TabIcon} 
                                                title='ค้นหา'>
                                        </Scene>
                                        <Scene 
                                                key='AddQueue' 
                                                component={AddQueue} 
                                                title='แอดคิว' 
                                                iconName="ios-home"
                                                icon={TabIcon}
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

                                    <Scene 
                                            key='Queue' 
                                            component={Queue}
                                            iconName="ios-people"
                                            icon={TabIcon} 
                                            title='คิว'>
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
                </Scene>
            </Router>
        );
    }
}


class SideMenu extends Component {
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
            <TouchableOpacity onPress={()=> Actions.Contact()}>
                <Text style={{color : '#a69beb' , fontSize: 17 , marginTop: 10 , marginLeft: 20 }}>ติดต่อเรา</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> Actions.Questions()} >
                <Text style={{color : '#a69beb' , fontSize: 17 , marginTop: 10 , marginLeft: 20 }}>คำถามที่พบบ่อย</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> Actions.Conditions()}>
                <Text style={{color : '#a69beb' , fontSize: 17 , marginTop: 10 , marginLeft: 20 }}>เงื่อไขและข้อตกลง</Text>
            </TouchableOpacity>
        </View>
      );
    }
  }

class ModalCardRegister extends React.Component {
  constructor(){
    super()
    this.state = {
        showMe:false
    }
}

render() {
    const { ModalBoxRegister } = Styles;
    console.log(this.state.visible)
    return(
        <View style={Styles.Container}>
            <Modal visible={this.state.showMe} onRequestClose ={()=>console.warn("this is close")} animationType='fade'>
            <LinearGradient colors ={['#87daf3','#a69beb']}>
              <View style={Styles.ContainerRegister}>
              <View style={Styles.Header} >
                  <TouchableOpacity onPress={() => this.setState({ showMe:false })}>
                    <Ionicons name="ios-close-circle" size={30} style={Styles.IconCloseRegister} />
                  </TouchableOpacity>
                    <Text style={{color : '#87daf3' , fontSize: 25 , fontWeight: 'bold' , marginLeft: 140 , marginTop: -30}}>ลงทะเบียน</Text>
                    <View style={ModalBoxRegister}>
                      <Text style={{color : '#3e48a3' , fontSize: 20 , fontWeight: 'bold' , marginLeft: 30 , marginTop: 30}} >ชื่อ</Text>
                      <TextInput style={Styles.inputBoxRegister}/>
                      <Text style={{color : '#3e48a3' , fontSize: 20 , fontWeight: 'bold' , marginLeft: 30}}>นามสกุล</Text>
                      <TextInput style={Styles.inputBoxRegister}/>
                      <Text style={{color : '#3e48a3' , fontSize: 20 , fontWeight: 'bold' , marginLeft: 30}}>เบอร์ติดต่อ</Text>
                      <TextInput style={Styles.inputBoxRegister}/>
                      <Text style={{color : '#3e48a3' , fontSize: 20 , fontWeight: 'bold' , marginLeft: 30}}>อีเมล</Text>
                      <TextInput style={Styles.inputBoxRegister}/>
                      <Text style={{color : '#3e48a3' , fontSize: 20 , fontWeight: 'bold' , marginLeft: 30}}>รหัสผ่าน</Text>
                      <TextInput style={Styles.inputBoxRegister}/>
                      <Text style={{color : '#3e48a3' , fontSize: 20 , fontWeight: 'bold' , marginLeft: 30}}>ยืนยันรหัสผ่าน</Text>
                      <TextInput style={Styles.inputBoxRegister}/>
                      <LinearGradient colors={['#87daf3', '#a69beb']} start={{x: 0.0, y: 1.0}} end={{x: 1.0, y: 1.0}} style={Styles.ButtonRegister}>
                          <TouchableOpacity>
                            <Text style={{color : '#fff' , fontSize: 20 , fontWeight: 'bold' }}>ลงทะเบียน</Text>
                          </TouchableOpacity>
                        </LinearGradient>
                        <View style={Styles.row}>
                            <Text style={{color : '#a69beb' , fontSize: 15 , fontWeight: 'bold' , marginTop: 20 , marginLeft: 80 }}>เป็นสมาชิกอยู่แล้ว ? </Text>
                            <TouchableOpacity>
                                <Text style={{color : '#a69beb' , fontSize: 15 , fontWeight: 'bold' , marginTop: 20 }}>เข้าสู่ระบบ</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                  </View>
                  </View>
              </LinearGradient>
            </Modal>
            <TouchableOpacity onPress={() => this.setState({ showMe:true })}>
              <Text style={{color : '#fff' , fontSize: 15 , fontWeight: 'bold' }}>ลงทะเบียน</Text>
            </TouchableOpacity>
        </View>
    );
}
};

class ModalCardLogin extends React.Component {
  constructor(){
      super()
      this.state = {
          showMe:false
      }
  }

  render() {
      const { ModalBoxLogin } = Styles;
      console.log(this.state.visible)
      return(
          <View style={Styles.container}>
              <Modal visible={this.state.showMe} onRequestClose ={()=>console.warn("this is close")} transparent animationType='fade'>
                  <View style={ModalBoxLogin}>
                    <TouchableOpacity onPress={() => this.setState({ showMe:false })}>
                        <Ionicons name="ios-close-circle" size={30} style={Styles.IconCloseLogin} />
                    </TouchableOpacity>
                    <Text style={{color : '#495090' , fontSize: 23 , fontWeight: 'bold' }}>เข้าสู่ระบบ</Text>
                    <View style={Styles.row}>
                      <Text style={{color : '#95a3e6' , fontSize: 20 , fontWeight: 'bold' , marginTop: 20 , marginRight: 36 , marginLeft: -30 }} >อีเมล</Text>
                      <TextInput style={Styles.inputBoxLogin}/>
                    </View>
                    <View style={Styles.row}>
                      <Text style={{color : '#95a3e6' , fontSize: 20 , fontWeight: 'bold' , marginTop: 20 , marginRight: 10 , marginLeft: -30 }} >รหัสผ่าน</Text>
                      <TextInput style={Styles.inputBoxLogin}  secureTextEntry={true}/>
                    </View>
                    <LinearGradient colors={['#87daf3', '#a69beb']} start={{x: 0.0, y: 1.0}} end={{x: 1.0, y: 1.0}} style={Styles.Button}>
                      <TouchableOpacity>
                        <Text style={{color : '#fff' , fontSize: 20 , fontWeight: 'bold' }}>เข้าสู่ระบบ</Text>
                      </TouchableOpacity>
                    </LinearGradient>
                      <View style={Styles.row}>
                        <TouchableOpacity>
                          <Text style={{color : '#95a3e6' , fontSize: 17 , fontWeight: 'bold' , marginTop: 10}}>ลืมรหัสผ่าน</Text>
                        </TouchableOpacity> 
                        <Text style={{color : '#95a3e6' , fontSize: 17 , fontWeight: 'bold' , marginTop: 10}}> | </Text> 
                        <TouchableOpacity>
                          <Text style={{color : '#95a3e6' , fontSize: 17 , fontWeight: 'bold' , marginTop: 10}}>ลงทะเบียน</Text>
                        </TouchableOpacity>
                      </View>
                      <Text style={{color : '#c0c0c0' , fontSize: 15 , marginTop: 5}}>_________________________________________________</Text>
                      <View style={Styles.ButtonFacebook}>
                        <Ionicons name="logo-facebook" size={40} style={Styles.IconFacebook} />
                        <Text style={{color : '#fff' , fontSize: 16 , fontWeight: 'bold'}}>เข้าสู่ระบบด้วย FACEBOOK</Text>
                      </View>
                  </View>
              </Modal>
              <TouchableOpacity onPress={() => this.setState({ showMe:true })}>
                <Text style={{color : '#fff' , fontSize: 15 , fontWeight: 'bold' }}>เข้าสู่ระบบ</Text>
              </TouchableOpacity>
          </View>
      );
  }
};


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
    textAlign: 'center'
},
drawerImage: {
    height: 100,
    width: 100,
    borderRadius: 100,
},
Container: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
    height: '100%',
},  
ContainerRegister:{
    height: '100%' ,
},
ModalBoxLogin:{
    width: 370,
    height: 420,
    backgroundColor: '#ecf8ff',
    alignItems: 'center',
    marginLeft: 10,
    marginTop: 80,
    borderRadius: 25,
    shadowColor: '#30C1DD',
    shadowRadius: 10,
    shadowOpacity: 0.6,
    elevation: 6,
},
ModalBoxRegister:{
    width: 370,
    height: 600,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    marginLeft: 10,
    marginTop: 50,
    borderRadius: 20,
    shadowColor: '#30C1DD',
    shadowRadius: 10,
    shadowOpacity: 0.6,
    elevation: 6,
},
inputBoxRegister:{
    width: 300,
    height: 30,
    backgroundColor: '#fff',
    borderRadius: 15,
    borderColor:'#95a3e6',
    borderWidth: 1,
    margin: 5,
    paddingHorizontal: 16,
    fontSize: 15,
    marginLeft: 30
},
inputBoxLogin:{
    width: 220,
    height: 40,
    backgroundColor: '#fff',
    borderRadius: 15,
    borderColor:'#95a3e6',
    borderWidth: 1,
    marginTop: 20,
    paddingHorizontal: 16,
    fontSize: 15,
},
ButtonRegister:{
    height: 50, 
    alignItems: 'center', 
    justifyContent: 'center', 
    width: 150 , 
    borderRadius: 20 , 
    marginTop: 20 , 
    marginLeft: 110 , 
    shadowColor: '#30C1DD',
    shadowRadius: 10,
    shadowOpacity: 0.6,
    elevation: 6,
},
Button:{
    height: 50, 
    alignItems: 'center', 
    justifyContent: 'center', 
    width: 150 , 
    borderRadius: 20 , 
    marginTop: 20 , 
    shadowColor: '#30C1DD',
    shadowRadius: 10,
    shadowOpacity: 0.6,
    elevation: 6,
},
ButtonFacebook:{
    height: 50,
    width: 310,
    alignItems: 'center',
    backgroundColor: '#3d5a96',
    marginTop: 20 ,
    flexDirection: "row"
},
IconFacebook:{
    marginTop: 3,
    marginLeft: 30,
    marginRight: 15,
    color: '#fff',
},
IconCloseRegister:{
    color: '#a9aae9',
    marginTop: 18,
    marginLeft: 20
},
IconCloseLogin:{
    color: '#a9aae9',
    marginTop: 15,
    marginLeft: 300
}, 
row:{
    flexDirection: "row",
},
Header:{
    height: 60 ,
    backgroundColor: '#fff' ,
},
});

export default Routes