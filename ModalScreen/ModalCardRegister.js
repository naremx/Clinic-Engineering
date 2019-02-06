import React from 'react';
import { StyleSheet,View,Text,TouchableOpacity,Modal,TextInput } from 'react-native';
import { LinearGradient } from 'expo';
import { Ionicons } from 'react-native-vector-icons'

export default class ModalCardRegister extends React.Component {
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


  
const Styles = StyleSheet.create({
Container: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
    height: '100%',
},  
ContainerRegister:{
    height: '100%' ,
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
IconCloseRegister:{
    color: '#a9aae9',
    marginTop: 18,
    marginLeft: 20
},
row:{
    flexDirection: "row",
},
Header:{
    height: 60 ,
    backgroundColor: '#fff' ,
},
});
