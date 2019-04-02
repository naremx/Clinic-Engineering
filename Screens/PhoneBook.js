import React from 'react';
import { StyleSheet,View,Text,TouchableOpacity } from 'react-native';
import { LinearGradient,Constants } from 'expo';

export default class PhoneBook extends React.Component{
  constructor(props) {
    super(props);
    this.state = {};
  }
   render(){  

    return(
        <LinearGradient colors ={['#87daf3','#a69beb']} style={{ paddingTop: Constants.statusBarHeight }}>
            <View style={Styles.Container}>
            </View>
        </LinearGradient>
    );
  }
}
const Styles = StyleSheet.create({
    Container: {
        height: '100%' ,
    },
    calendar: {
      borderTopWidth: 1,
      paddingTop: 5,
      borderBottomWidth: 1,
      borderColor: '#eee',
      height: 350
    }
});