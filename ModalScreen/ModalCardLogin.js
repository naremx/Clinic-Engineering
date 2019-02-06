import React from 'react';
import { StyleSheet,View,Text,TouchableOpacity,Modal,TextInput } from 'react-native';
import { LinearGradient } from 'expo';
import { Ionicons } from 'react-native-vector-icons'

import * as Expo from 'expo';
import * as firebase from 'firebase';

const firebaseConfig={
    apiKey: "AIzaSyAzqICgMHtT0GuYtnUMAUYZTPdirJ6hdr8",
    authDomain: "clinicengineering-88f23.firebaseapp.com",
    databaseURL: "https://clinicengineering-88f23.firebaseio.com",
    projectId: "clinicengineering-88f23",
    storageBucket: "clinicengineering-88f23.appspot.com",
    messagingSenderId: "405778123280"
};
firebase.initializeApp(firebaseConfig);

export default class ModalCardLogin extends React.Component {
    componentDidMount(){

        firebase.auth().onAuthStateChanged((user) => {
            if(user != null){
                console.log(user)
            }
        })
    }
    async loginWithFacebook() {
        const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync('2388387324729108' , { permissions: ['public_profile'] })
    
        if (type == 'success') {
    
          const credential = firebase.auth.FacebookAuthProvider.credential(token)
    
          firebase.auth().signInWithCredential(credential).catch((error) => {
            console.log(error)
          })
        }
      }
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
                    <View style={Styles.ModalBoxLogin}>
                      <TouchableOpacity onPress={() => this.setState({ showMe:false })}>
                          <Ionicons name="ios-close-circle" size={30} style={Styles.IconCloseLogin} />
                      </TouchableOpacity>
                      <Text style={{ fontFamily:'supermarket', color : '#495090' , fontSize: 23 , fontWeight: 'bold' }}>เข้าสู่ระบบ</Text>
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
                        <TouchableOpacity onPress={() => this.loginWithFacebook()}>
                            <View style={Styles.ButtonFacebook}>
                            <Ionicons name="logo-facebook" size={40} style={Styles.IconFacebook} />
                            <Text style={{color : '#fff' , fontSize: 16 , fontWeight: 'bold'}}>เข้าสู่ระบบด้วย FACEBOOK</Text>
                            </View>
                        </TouchableOpacity> 
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
Container: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
    height: '100%',
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
row:{
    flexDirection: "row",
},
Header:{
    height: 60 ,
    backgroundColor: '#fff' ,
},
});
