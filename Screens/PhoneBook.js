import React from 'react';
import { Text,StyleSheet,View } from 'react-native';
import { LinearGradient, Constants } from 'expo';

export default class PhoneBook extends React.Component{
  render(){
    return(
        <LinearGradient colors ={['#87daf3','#a69beb']} style={{ paddingTop: Constants.statusBarHeight }}>
            <View style={Styles.Container}>
                <Text>PhoneBook</Text>
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