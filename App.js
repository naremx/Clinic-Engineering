import React from 'react';
import { StyleSheet,Image,TouchableOpacity,View,Modal,TextInput, } from 'react-native';
import { createDrawerNavigator,DrawerItems,createAppContainer } from 'react-navigation';
import { Container,Content,Body,Text } from 'native-base'
import { LinearGradient, Constants } from 'expo';
import { Ionicons } from 'react-native-vector-icons'

import HomeScreen from './Screens/HomeScreen.js';
import Contact from './Screens/Contact.js';
import Questions from './Screens/Questions.js';
import Conditions from './Screens/Conditions.js'

const CustomDrawerContentComponent = (props) => (
  <Container>
    <LinearGradient colors ={['#87daf3','#a69beb']} style={Styles.drawerHeader}>
      <Body>
        <Image
          style={Styles.drawerImage}
          source={require('./Image/user.png')} />
          <ModalCardLogin/>
          <ModalCardRegister/>
      </Body>
    </LinearGradient>
    <Content>
      <DrawerItems {...props} />
    </Content>
  </Container>
); 


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
        <View style={Styles.container}>
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
              <Text style={Styles.drawerText}>ลงทะเบียน</Text>
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
                <Text style={Styles.drawerText}>เข้าสู่ระบบ</Text>
              </TouchableOpacity>
          </View>
      );
  }
};

const HomeScreenDrawer = createDrawerNavigator({
  หน้าหลัก: { screen : HomeScreen },
  ติดต่อเรา: { screen : Contact },
  คำถามที่พบบ่อย: { screen : Questions },
  เงื่อนไขและข้อตกลง: { screen : Conditions }
},{
  initialRouteName: 'หน้าหลัก',
  drawerPosition: 'left',
  contentComponent: CustomDrawerContentComponent,
  drawerOpenRoute: 'DrawerOpen',
  drawerCloseRoute: 'DrawerClose',
  drawerToggleRoute: 'DrawerToggle',
  contentOptions: {
    activeTintColor: '#6f66aa',
    inactiveTintColor: '#a69beb'}
});

const Styles = StyleSheet.create({
  drawerHeader: {
    height: 200,
    paddingTop : 50
  },
  drawerImage: {
    height: 100,
    width: 100,
    borderRadius: 100,
  },
  drawerText: {
    color : '#FFF',
    fontWeight: 'bold',
  },
  Container: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
    height: '100%',
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
  IconCloseLogin:{
    color: '#a9aae9',
    marginTop: 15,
    marginLeft: 300
  }, 
  IconCloseRegister:{
    color: '#a9aae9',
    marginTop: 18,
    marginLeft: 20
  },
  row:{
    flexDirection: "row",
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
  ContainerRegister:{
    height: '100%' ,
  },
  Header: {
    height: 60 ,
    backgroundColor: '#fff' ,
  },
})

const App = createAppContainer(HomeScreenDrawer);

export default App


