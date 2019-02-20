import React from 'react';
import { StyleSheet,View,Text,TouchableOpacity,Modal,TextInput } from 'react-native';
import { LinearGradient } from 'expo';
import { Ionicons } from 'react-native-vector-icons'

export default class ModalCardRegister extends React.Component {
    constructor(){
      super()
      this.state = {
          showMe:false ,
          first_name: '',
          last_name: '',
        //   tel_number: '',
          email: '',
          password: '',
          username: ''
        //   confirmpassword: '',
      }
  }
  updateValue(text , field){
    if(field == 'first_name'){
        this.setState({
            first_name : text
        })
    }
    else if(field == 'last_name'){
        this.setState({
            last_name : text
        })
    }
    // else if(field == 'tel_number'){
    //     this.setState({
    //         tel_number : text
    //     })
    // }
    else if(field == 'email'){
        this.setState({
            email : text
        })
    }
    else if(field == 'password'){
        this.setState({
            password : text
        })
    }
    else if(field == 'username'){
        this.setState({
            username : text
        })
    }
    // else if(field == 'confirmpassword'){
    //     this.setState({
    //         confirmpassword : text
    //     })
    // }
}
  submit()
  {
      let collection={}
      collection.first_name=this.state.first_name,
      collection.last_name=this.state.last_name,
    //   collection.telephone=this.state.tel_number,
      collection.email=this.state.email,
      collection.password=this.state.password,
      collection.username=this.state.username,
    //   collection.confirmpassword=this.state.confirmpassword,
      console.log(collection);

      var url = 'http://192.168.43.212:8000/Account/register' ;

      fetch(url, {
      method: 'POST', 
      body: JSON.stringify(collection),
      headers:{
          'Content-Type': 'application/json'
      }
      }).then(res => res.json())
      .then(response => console.log('Success:', JSON.stringify(response)))
      .catch(error => console.error('Error:', error));
  }
  
  render() {
      const { ModalBoxRegister } = Styles;
      console.log(this.state.visible)
      return(
        <View style={Styles.container}>
        <Modal visible={this.state.showMe} onRequestClose ={()=>console.warn("this is close")} transparent animationType='fade'>
            <View style={Styles.ModalBoxRegister}>
              <TouchableOpacity onPress={() => this.setState({ showMe:false })}>
                  <Ionicons name="ios-close-circle" size={30} style={Styles.IconCloseLogin} />
              </TouchableOpacity>
              <Text style={{ color : '#495090' , fontSize: 23 , fontWeight: 'bold' , marginLeft: 130 }}>ลงทะเบียน</Text>
                <Text style={{color : '#95a3e6' , fontSize: 20 , fontWeight: 'bold' , marginTop: 10 , marginLeft: 20 }} >ชื่อผู้ใช้งาน</Text>
                <TextInput style={Styles.inputBoxRegister} onChangeText={(text) => this.updateValue(text, 'username')}/>
                <Text style={{color : '#95a3e6' , fontSize: 20 , fontWeight: 'bold' , marginTop: 10 , marginLeft: 20 }} >ชื่อ</Text>
                <TextInput style={Styles.inputBoxRegister} onChangeText={(text) => this.updateValue(text, 'first_name')}/>
                <Text style={{color : '#95a3e6' , fontSize: 20 , fontWeight: 'bold' , marginTop: 10 , marginLeft: 20 }} >นามสกุล</Text>
                <TextInput style={Styles.inputBoxRegister}  onChangeText={(text) => this.updateValue(text, 'last_name')}/>
                {/* <Text style={{color : '#95a3e6' , fontSize: 20 , fontWeight: 'bold' , marginTop: 10 , marginLeft: 20 }} >เบอร์ติดต่อ</Text>
                <TextInput style={Styles.inputBoxRegister}  onChangeText={(text) => this.updateValue(text, 'tel_number')}/> */}
                <Text style={{color : '#95a3e6' , fontSize: 20 , fontWeight: 'bold' , marginTop: 10 , marginLeft: 20  }} >อีเมล</Text>
                <TextInput style={Styles.inputBoxRegister}  onChangeText={(text) => this.updateValue(text, 'email')}/>
                <Text style={{color : '#95a3e6' , fontSize: 20 , fontWeight: 'bold' , marginTop: 10 , marginLeft: 20 }} >รหัสผ่าน</Text>
                <TextInput style={Styles.inputBoxRegister}  onChangeText={(text) => this.updateValue(text, 'password')}/>
                {/* <Text style={{color : '#95a3e6' , fontSize: 20 , fontWeight: 'bold' , marginTop: 10 , marginLeft: 20  }} >ยืนยันรหัสผ่าน</Text>
                <TextInput style={Styles.inputBoxRegister} onChangeText={(text) => this.updateValue(text, 'confirmpassword')}/> */}
            <View style= {{ marginLeft: 110 }}>
              <LinearGradient colors={['#87daf3', '#a69beb']} start={{x: 0.0, y: 1.0}} end={{x: 1.0, y: 1.0}} style={Styles.Button}>
                <TouchableOpacity onPress={() => this.submit()}>
                  <Text style={{color : '#fff' , fontSize: 20 , fontWeight: 'bold' }}>เข้าสู่ระบบ</Text>
                </TouchableOpacity>
              </LinearGradient>
            </View>
            </View>
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
    height: 700,
    backgroundColor: '#ecf8ff',
    marginLeft: 10,
    marginTop: 40,
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
    marginTop: 10,
    marginLeft: 20,
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
    marginLeft: 320
}, 
row:{
    flexDirection: "row",
},
Header:{
    height: 60 ,
    backgroundColor: '#fff' ,
},
});
