import React from 'react';
import { StyleSheet,View,Text,TouchableOpacity,Modal,TextInput,Alert } from 'react-native';
import { LinearGradient,BlurView } from 'expo';
import { Ionicons } from 'react-native-vector-icons'

export default class ModalCardRegister extends React.Component {
    constructor(){
      super()
      this.state = {
          showMe:false ,
          first_name: '',
          last_name: '',
          email: '',
          password: '',
          username: '',
          telephone: '',
          user_type: '3',
          first_nameValdate: true,
          last_nameValdate: true,
          emailValdate: true,
          passwordValdate: true,
          usernameValdate: true
      }
  }
  validate(text,type)
    {
    alph=/^[a-zA-Z0-9]+$/
    mail=/^[^\s@]+@[^\s@]+\.[^\s@]+$/
    num=/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
      if(type == 'first_name') 
      {
        if(alph.test(text))
        {
          this.setState({
            first_nameValdate:true,
            first_name: text
          })
        }
        else
        {
          this.setState({
            first_nameValdate:false,
          })
        }
      }
      else if(type == 'last_name') 
      {
        if(alph.test(text))
        {
          this.setState({
            last_nameValdate:true,
            last_name: text
          })
        }
        else
        {
          this.setState({
            last_nameValdate:false,
          })
        }
      }
      else if(type == 'telephone') 
      {
          this.setState({
            telephone: text
          })
      }
      else if(type == 'email') 
      {
        if(mail.test(text))
        {
          this.setState({
            emailValdate:true,
            email: text
          })
        }
        else
        {
          this.setState({
            emailValdate:false,
          })
        }
      }
      else if(type == 'password') 
      {
        if(num.test(text))
        {
          this.setState({
            passwordValdate:true,
            password: text
          })
        }
        else
        {
          this.setState({
            passwordValdate:false,
          })
        }
      }
      else if(type == 'username') 
      {
        if(alph.test(text))
        {
          this.setState({
            usernameValdate:true,
            username: text
          })
        }
        else
        {
          this.setState({
            usernameValdate:false,
          })
        }
      }
    }
  submit()
  {
      let collection={}
      collection.first_name=this.state.first_name,
      collection.last_name=this.state.last_name,
      collection.email=this.state.email,
      collection.telephone=this.state.telephone,
      collection.password=this.state.password,
      collection.username=this.state.username,
      collection.user_type=this.state.user_type,
      console.log(collection);
        // this.setState({ showMe:false })

        var url = 'http://10.66.13.208:8000/Account/Usregister/' ;
  
        fetch(url, {
        method: 'POST', 
        body: JSON.stringify(collection),
        headers:{
            'Content-Type': 'application/json'
        }
        }).then(res => res.json())
        .then(responseData => {
            if(responseData.null){
              Alert.alert(
                'ไม่สามารถสมัครสมาชิกได้',
                'กรุณาตรวจสอบหรือกรอกใหม่อีกครั้ง',
              );
            }
            else if (responseData.invalid){
              Alert.alert(
                'ไม่สามารถสมัครสมาชิกได้',
                'กรุณาตรวจสอบหรือกรอกใหม่อีกครั้ง',
              );
            }
            else if (responseData.required){
              Alert.alert(
                'ไม่สามารถสมัครสมาชิกได้',
                'กรุณาตรวจสอบหรือกรอกใหม่อีกครั้ง',
              );
            }
            else {
              this.setState({ showMe:false })
            }
        })
        .catch(error => {
          this.setState({ showMe:true })
          console.log(error)
          Alert.alert(
            'ไม่สามารถสมัครสมาชิกได้',
            'กรุณาตรวจสอบหรือกรอกใหม่อีกครั้ง',
          );
        });
    


    

  }
  
  render() {
      console.log(this.state.visible)
      return(
        <View style={Styles.container}>
        <Modal visible={this.state.showMe} onRequestClose ={()=>console.warn("this is close")} transparent animationType='fade'>
        <BlurView tint="dark" intensity={50} style={StyleSheet.absoluteFill}>
            <View style={{ alignItems:'center', marginTop: 10 }}>
            
                <View style={Styles.ModalBoxRegister}>
                    <View style={{ alignItems:'flex-end' }}>
                        <TouchableOpacity onPress={() => this.setState({ showMe:false })}>
                            <Ionicons name="ios-close-circle" size={30} style={{ color: '#a9aae9' , paddingRight: 10 , paddingTop: 10 }} />
                        </TouchableOpacity>
                    </View>
                <Text style={{ color : '#495090' , fontSize: 23 , fontWeight: 'bold', textAlign: 'center' }}>ลงทะเบียน</Text>
                    <View style={{ marginLeft : 30  ,  marginTop : 5  }}>
                        <Text style={{color : '#95a3e6' , fontSize: 20 , fontWeight: 'bold', margin : 5 }} >ชื่อผู้ใช้งาน</Text>
                        <TextInput style={[Styles.inputBoxRegister, !this.state.usernameValdate? Styles.error:null]}
                        onChangeText={ (text) => this.validate(text,'username')} placeholder="Username"/>

                        <View style={{ flexDirection: 'row' }}>
                        <Text style={{color : '#95a3e6' , fontSize: 20 , fontWeight: 'bold', margin : 5 }} >ชื่อ</Text>
                        <Text style={{color : '#95a3e6' , fontSize: 20 , fontWeight: 'bold', marginTop : 5 , marginLeft : 130 }} >นามสกุล</Text>
                        </View>

                        <View style={{ flexDirection: 'row' }}>
                        <TextInput style={[Styles.inputBoxRegisterName, !this.state.first_nameValdate? Styles.error:null]}
                        onChangeText={ (text) => this.validate(text,'first_name')} placeholder="FirstName"/>
                        <TextInput style={[Styles.inputBoxRegisterLast, !this.state.last_nameValdate? Styles.error:null]}
                        onChangeText={ (text) => this.validate(text,'last_name')} placeholder="LastName"/>
                        </View>

                        <Text style={{color : '#95a3e6' , fontSize: 20 , fontWeight: 'bold', margin : 5 }} >อีเมล</Text>
                        <TextInput style={[Styles.inputBoxRegister, !this.state.emailValdate? Styles.error:null]} placeholder="Email address"
                        onChangeText={(text) => this.validate(text, 'email')} keyboardType={'email-address'}/>

                        <Text style={{color : '#95a3e6' , fontSize: 20 , fontWeight: 'bold', margin : 5 }} >เบอร์ติดต่อ</Text>
                        <TextInput style={Styles.inputBoxRegister}
                        onChangeText={ (text) => this.validate(text,'telephone')} placeholder="Telephone"/>

                        <Text style={{color : '#95a3e6' , fontSize: 20 , fontWeight: 'bold', margin : 5 }} >รหัสผ่าน</Text>
                        <TextInput style={[Styles.inputBoxRegister, !this.state.passwordValdate? Styles.error:null]} placeholder="Password (Least 8 characters)" 
                        secureTextEntry={true} underlineColorAndroid={'transparent'} onChangeText={ (text) => this.validate(text,'password')}/>
                    </View>
                <View style= {{ marginLeft: 110 }}>
                <LinearGradient colors={['#87daf3', '#a69beb']} start={{x: 0.0, y: 1.0}} end={{x: 1.0, y: 1.0}} style={Styles.Button}>
                    <TouchableOpacity onPress={() => this.submit()}>
                    <Text style={{color : '#fff' , fontSize: 20 , fontWeight: 'bold' , paddingTop: 10 }}>ลงทะเบียน</Text>
                    </TouchableOpacity>
                </LinearGradient>
                </View>
                </View>
            </View>
        </BlurView>
        </Modal>
        <TouchableOpacity onPress={() => this.setState({ showMe:true })}>
          <Text style={{color : '#fff' , fontSize: 15 , fontWeight: 'bold' }}>ลงทะเบียน</Text>
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
ModalBoxRegister:{
    width: 370,
    height: 620,
    backgroundColor: '#ecf8ff',
    borderRadius: 25,
    shadowColor: '#30C1DD',
    shadowRadius: 10,
    shadowOpacity: 0.6,
    elevation: 6,
},
inputBoxRegister:{
    width: 320,
    height: 40,
    backgroundColor: '#fff',
    borderRadius: 15,
    borderColor:'#95a3e6',
    borderWidth: 1,
    paddingHorizontal: 16,
    fontSize: 15,
},
inputBoxRegisterName:{
    width: 150,
    height: 40,
    backgroundColor: '#fff',
    borderRadius: 15,
    borderColor:'#95a3e6',
    borderWidth: 1,
    paddingHorizontal: 16,
    fontSize: 15,
},
inputBoxRegisterLast:{
  width: 160,
  height: 40,
  marginLeft: 10,
  backgroundColor: '#fff',
  borderRadius: 15,
  borderColor:'#95a3e6',
  borderWidth: 1,
  paddingHorizontal: 16,
  fontSize: 15,
},
Button:{
    height: 50, 
    alignItems: 'center', 
    width: 150 , 
    borderRadius: 20 , 
    marginTop: 30,
    shadowColor: '#30C1DD',
    shadowRadius: 10,
    shadowOpacity: 0.6,
    elevation: 6,
},
Header:{
    height: 60 ,
    backgroundColor: '#fff' ,
},
error:{
    borderWidth: 1,
    borderColor:'#891c1c',
  }
});
