import React from 'react';
import { StyleSheet,View,Text,TouchableOpacity,Modal,TextInput,Alert } from 'react-native';
import { LinearGradient,BlurView } from 'expo';
import { Ionicons } from 'react-native-vector-icons'

import * as Expo from 'expo';
import * as firebase from 'firebase';

import { getData } from '../Actions';
import { getToken } from '../Actions';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';


const firebaseConfig={
    apiKey: "AIzaSyAzqICgMHtT0GuYtnUMAUYZTPdirJ6hdr8",
    authDomain: "clinicengineering-88f23.firebaseapp.com",
    databaseURL: "https://clinicengineering-88f23.firebaseio.com",
    projectId: "clinicengineering-88f23",
    storageBucket: "clinicengineering-88f23.appspot.com",
    messagingSenderId: "405778123280"
};
firebase.initializeApp(firebaseConfig);

class ModalCardLogin extends React.Component {
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
            showMe: false ,
            // username: 'naremx' ,
            // password: '123456Nn' ,
            // username: '507theerayod.wi@kmitl.ac.th' ,
            // password: '1234' ,
            username: '161pipat.pr@kmitl.ac.th' ,
            password: '1234' ,
        }
    }
    updateValue(text , field){
        if(field == 'username'){
            this.setState({
                username : text
            })
        }
        else if(field == 'password'){
            this.setState({
                password : text
            })
        }
    }
    submit()
    {
        let collection={}
        collection.username=this.state.username,
        collection.password=this.state.password

        this.setState({ showMe:false })

        var url = 'http://10.66.13.208:8000/Account/' ;

        fetch(url, {
        method: 'POST', 
        body: JSON.stringify(collection),
        headers:{
            'Content-Type': 'application/json' ,
            // 'Authorization': 'Token ${this.state.getToken}',
        }
        }).then(res => res.json())
        .then((responseData) => this.selectUserRole(responseData))
        .then(response => console.log('Success:', JSON.stringify(response)))
        .catch(error => console.error('Error:', error));
    }

    selectUserRole(responseData) {
        console.log('--LOGIN--',responseData)
        this.props.getToken(responseData.token , responseData.role );
        this.props.getData(responseData.data);
        if (responseData.role === 3) {
            Actions.user();
        } else if (responseData.role === 2) {
            Actions.Advisor();
        }
        else{
            Alert.alert(
                'อีเมลหรือพาสเวิร์ดผิด',
                'กรุณาตรวจสอบหรือกรอกใหม่อีกครั้ง',
              );
        }
    }
    ResetPassword(){
        Actions.ResetPassword()
        this.setState({ showMe:false })
    }
  
    render() {
        return(
            <View style={Styles.container}>
                <Modal visible={this.state.showMe} onRequestClose ={()=>console.warn("this is close")} transparent animationType='fade'>
                <BlurView tint="dark" intensity={50} style={StyleSheet.absoluteFill}>
                    <View style={{ alignItems:'center', marginTop: 50 }}>
                        <View style={Styles.ModalBoxLogin}>

                            <View style={{ alignItems:'flex-end' }}>
                                <TouchableOpacity onPress={() => this.setState({ showMe:false })}>
                                    <Ionicons name="ios-close-circle" size={30} style={{ color: '#a9aae9' , paddingRight: 10 , paddingTop: 10 }} />
                                </TouchableOpacity>
                            </View>
                            
                        <Text style={{ color : '#495090' , fontSize: 23 , fontWeight: 'bold' , textAlign: 'center' }}>เข้าสู่ระบบ</Text>
                        <View style={{ flexDirection: "row" }}>
                            <View style={{ flexDirection: "column"  }}>
                                <Text style={{color : '#95a3e6' , fontSize: 20 , fontWeight: 'bold' , paddingTop : 20 , paddingLeft : 10 }} >อีเมล</Text>
                                <Text style={{color : '#95a3e6' , fontSize: 20 , fontWeight: 'bold' , paddingTop : 40 , paddingLeft : 10 }} >รหัสผ่าน</Text>
                            </View>

                            <View style={{ flexDirection: "column" , paddingLeft : 10 }}>
                                <TextInput style={Styles.inputBoxLogin} onChangeText={(text) => this.updateValue(text, 'username')}  placeholder="Username"/>
                                <TextInput style={Styles.inputBoxLogin}  secureTextEntry={true} onChangeText={(text) => this.updateValue(text, 'password')}  placeholder="Password"/>
                            </View>
                        </View>

                        <View style={{ alignItems:'center'}}>
                            <LinearGradient colors={['#87daf3', '#a69beb']} start={{x: 0.0, y: 1.0}} end={{x: 1.0, y: 1.0}} style={Styles.Button}>
                                <TouchableOpacity onPress={() => this.submit()}>
                                <Text style={{color : '#fff' , fontSize: 20 , fontWeight: 'bold' , textAlign: 'center' , paddingTop: 10 }}>เข้าสู่ระบบ</Text>
                                </TouchableOpacity>
                            </LinearGradient>
                        </View>
                            <TouchableOpacity onPress={() => this.ResetPassword()}>
                                <Text style={{color : '#95a3e6' ,
                                fontSize: 17 , 
                                textAlign: 'center' , 
                                fontWeight: 'bold',
                                marginTop: 10 }}>ลืมรหัสผ่าน</Text>
                            </TouchableOpacity> 
                        </View>
                    </View>
                </BlurView>
                </Modal>
                <TouchableOpacity onPress={() => this.setState({ showMe:true })}>
                <Text style={{color : '#fff' , fontSize: 15 , fontWeight: 'bold' }}>เข้าสู่ระบบ</Text>
                </TouchableOpacity>
            </View>
        );
    }
  };

export default connect(null, { getToken,getData })(ModalCardLogin);

const Styles = StyleSheet.create({
Container: {
    flex: 1,
    width: '100%',
    height: '100%',
},  
ModalBoxLogin:{
    width: 370,
    height: 320,
    backgroundColor: '#ecf8ff',
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
Header:{
    height: 60 ,
    backgroundColor: '#fff' ,
},
});
