import React from 'react';
import { Text,StyleSheet,View,Button } from 'react-native';
import { LinearGradient, Constants } from 'expo';
import call from 'react-native-phone-call';
import email from 'react-native-email'

export default class PhoneBook extends React.Component{
  callphone = () => {
    //handler to make a call
    const args = {
      number: '0000000000',
      prompt: false,
    };

    call(args).catch(console.error);
  }
  handleEmail = () => {
    const to = ['tiaan@email.com', 'foo@bar.com'] // string or array of email addresses
    email(to, {
        // Optional additional arguments
        cc: ['bazzy@moo.com', 'doooo@daaa.com'], // string or array of email addresses
        bcc: 'mee@mee.com', // string or array of email addresses
        subject: 'Show how to use',
        body: 'Some body right here'
    }).catch(console.error)
}
  render(){
    return(
        <LinearGradient colors ={['#87daf3','#a69beb']} style={{ paddingTop: Constants.statusBarHeight }}>
            <View style={Styles.Container}>
              <Button title="Make a Call" onPress={() => this.callphone()} />
              <Button title="Send Mail" onPress={this.handleEmail.bind(this)} />
            </View>
        </LinearGradient>
    );
  }
}
const Styles = StyleSheet.create({
    Container: {
        height: '100%' ,
    },
});