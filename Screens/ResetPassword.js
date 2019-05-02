import React from 'react';
import { StyleSheet,View,TextInput,Text,TouchableOpacity } from 'react-native';
import { LinearGradient,Constants } from 'expo';
import { Actions } from 'react-native-router-flux'

class ResetPassword extends React.Component{
    constructor(){
        super()
        this.state = {
            email: 'pacaon.us@gmail.com' ,
        }
    }
    updateValue(text , field){
        if(field == 'email'){
            this.setState({
                email : text
            })
        }
    }

    submit()
    {
        let collection={}
        collection=this.state.email,
        console.log(collection);
        Actions.PhoneBook()
  
        var url = 'http://10.16.2.185:8000/Account/fgpassword/' ;
  
        fetch(url, {
        method: 'POST', 
        body: JSON.stringify(collection),
        headers:{
            'Content-Type': 'application/json',
        }
        })
    }

  render(){
    return(
        <LinearGradient colors ={['#87daf3','#a69beb']} style={{ paddingTop: Constants.statusBarHeight }}>
        <View style={Styles.Container}>
            <Text style={{color : '#3e48a3' , fontSize: 20 , fontWeight: 'bold', margin : 5 }} >กรุณากรอกอีเมลผู้ใช้งาน</Text>
            <TextInput style={Styles.inputBox}
            onChangeText={ (text) => this.updateValue(text,'email')} placeholder="Email@gmail.com"/>
            <LinearGradient colors={['#90ed9c', '#04d11f']} start={{x: 0.0, y: 1.0}} end={{x: 1.0, y: 1.0}} style={Styles.ButtonConfirm}>
                <TouchableOpacity onPress={() =>this.submit()}>
                <Text style={{color : '#fff' , fontSize: 20 , fontWeight: 'bold' , textAlign: 'center' , paddingTop: 10 }}>ยืนยัน</Text>
                </TouchableOpacity>
            </LinearGradient>
        </View>
        </LinearGradient>
    );
  }
}

const Styles = StyleSheet.create({
    Container: {
        height: '100%' ,
        alignItems:'center'
  },
    ContainerContacts: {
        width: 370,
        height: 600,
        backgroundColor: 'white',
        borderRadius: 18,
        shadowColor: '#30C1DD',
        shadowRadius: 10,
        shadowOpacity: 0.6,
        elevation: 6,
    },
    inputBox:{
        width: 320,
        height: 40,
        marginTop: 10 ,
        backgroundColor: '#fff',
        borderRadius: 15,
        alignItems:'center',
        borderColor:'#95a3e6',
        borderWidth: 1,
        paddingHorizontal: 16,
        fontSize: 15,
    },
    ButtonConfirm:{
        height: 50, 
        width: 150 , 
        borderRadius: 20 , 
        marginTop: 20, 
        shadowColor: '#30C1DD',
        shadowRadius: 10,
        shadowOpacity: 0.6,
        elevation: 6,
    },
});

export default ResetPassword