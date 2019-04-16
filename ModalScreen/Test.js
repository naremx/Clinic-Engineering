อันนี้ดักพวกแบบฟอร์มต้องถูกต้อง

import React from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, AsyncStorage } from 'react-native'
import { Ionicons } from 'react-native-vector-icons'
import { Actions } from 'react-native-router-flux'


export default class RegisterScreen extends React.Component {

  constructor(){
    super();
    this.state = {
      username: '',
      usernameValdate:true,
      email: '',
      emailValdate:true,
      password1: '',
      password1Valdate:true,
      password2: '',
      password2Valdate:true,
    }
  }

  validate(text,type)
    {
    alph=/^[a-zA-Z0-9]+$/
    mail=/^[^\s@]+@[^\s@]+\.[^\s@]+$/
    num=/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
      if(type == 'username') 
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
      else if(type == 'password1') 
      {
        if(num.test(text))
        {
          this.setState({
            password1Valdate:true,
            password1: text
          })
        }
        else
        {
          this.setState({
            password1Valdate:false,
          })
        }
      }
      else if(type == 'password2') 
      {
        if(num.test(text))
        {
          this.setState({
            password2Valdate:true,
            password2: text
          })
        }
        else
        {
          this.setState({
            password2Valdate:false,
          })
        }
      }
    }

  componentDidMount() {
    this._loadInitialState().done();
  }

  _loadInitialState = async () => {
    var value = await AsyncStorage.getItem('user');
    if (value !== null) {
    Actions.home();
    }
  }


async Register() {

  let collection={}
  collection.username=this.state.username,
  collection.email=this.state.email,
  collection.password1=this.state.password1,
  collection.password2=this.state.password2,
  collection.user_type="Client"
  console.log(collection);

  var url = 'http://10.66.4.239:8000/rest-auth/registration/'

  try{
      const response = await fetch( url, {
          method: 'POST',
          body: JSON.stringify(collection),
          headers: {
              'Content-Type' : 'application/json'
          }

      });
      console.log(response)
      if (response.ok === true) {
        Actions.account_customer();
      }
  }catch (error){
      console.log(error);
   } 
}

  render() {
    return (
        <View style={styles.container}>
        
          <View style={styles.regform}>
            <Text style={styles.header}>Register</Text>

            <View style={{flexDirection: 'row'}}>
              <Ionicons name="ios-contact"  style={styles.ColorIcon} underlineColorAndroid={'transparent'}/>
                <View style={{ flex: 1, marginLeft: 8}}>
                  <TextInput style={[styles.textinput, !this.state.usernameValdate? styles.error:null]}
                  onChangeText={ (text) => this.validate(text,'username')} placeholder="Username"/>
                </View>
            </View>

            <View style={{flexDirection: 'row'}}>
              <Ionicons name="ios-mail"  style={styles.ColorIcon} underlineColorAndroid={'transparent'}/>
                <View style={{ flex: 1, marginLeft: 8}}>
                  <TextInput style={[styles.textinput, !this.state.emailValdate? styles.error:null]} placeholder="Email address" 
                  onChangeText={ (text) => this.validate(text,'email')} keyboardType={'email-address'} />
                </View>
            </View>

            <View style={{flexDirection: 'row'}}>
              <Ionicons name="ios-lock"  style={styles.ColorIcon} underlineColorAndroid={'transparent'}/>
                <View style={{ flex: 1, marginLeft: 8}}>
                  <TextInput style={[styles.textinput, !this.state.password1Valdate? styles.error:null]} placeholder="Password (Least 8 characters)" 
                  secureTextEntry={true} underlineColorAndroid={'transparent'} onChangeText={ (text) => this.validate(text,'password1')}/>
                </View>
            </View>

            <View style={{flexDirection: 'row'}}>
              <Ionicons name="ios-lock"  style={styles.ColorIcon} underlineColorAndroid={'transparent'}/>
                <View style={{ flex: 1, marginLeft: 8}}>
                  <TextInput style={[styles.textinput, !this.state.password2Valdate? styles.error:null]} placeholder="Password (Least 8 characters)" 
                  secureTextEntry={true} underlineColorAndroid={'transparent'} onChangeText={ (text) => this.validate(text,'password2')}/>
                </View>
            </View>

            <TouchableOpacity style={styles.buttonRed} onPress={() => this.Register()} >
              <Text style={styles.btntextWhite}>Create Account</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonGray} onPress={() => Actions.SignInPage()}>
              <Text style={styles.btntextGray}>Already have an account?</Text>
            </TouchableOpacity>
          </View>

        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  regform: {
    alignSelf: 'stretch',
    alignItems: 'center',
    marginLeft: 30,
    marginRight: 30
  },
  header :{
    fontSize: 35,
    color: '#891c1c',
    paddingBottom: 10,
    marginBottom: 40,

  },
  textinput: {
    alignSelf: 'stretch',
    height: 40,
    marginBottom: 30,
    color : '#000000',
    borderBottomColor: '#a8a8a8',
    borderBottomWidth: 1,
  },
  buttonRed: {
    alignSelf: 'stretch',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#891c1c',
    marginTop: 30,
    borderRadius: 5
  },
  buttonGray: {
    alignSelf: 'stretch',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#efefef',
    marginTop: 30,
    borderRadius: 5
  },
  btntextWhite: {
    fontSize: 18,
    marginTop: 5,
    color: '#fff',
    fontWeight: 'bold'
  },
  btntextGray: {
    fontSize: 18,
    marginTop: 5,
    color: '#a8a8a8',
  },
  ColorIcon: {
    fontSize: 30,
    color:'#a8a8a8',
    marginTop: 6
  },
  error:{
    borderWidth: 1,
    borderColor:'#891c1c',
  }
});