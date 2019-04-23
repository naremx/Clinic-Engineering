import React from 'react';
import { StyleSheet,View,TouchableOpacity,Image } from 'react-native';
import { LinearGradient,Constants } from 'expo';
import { Actions } from 'react-native-router-flux'


export default class UserSelectModeDoc extends React.Component{
   render(){  
    return(
        <LinearGradient colors ={['#87daf3','#a69beb']} style={{ paddingTop: Constants.statusBarHeight }}>
          <View style={Styles.Container}>
          <View style={{alignItems:'center'}}>
          <View style={Styles.ContainerContacts}>
            <View style={{alignItems:'center'}}>
            <TouchableOpacity onPress={() => Actions.UserRecieveDoc()}>
              <Image style={{ marginTop: 50 }} source={require('../Image/document.png')} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Actions.Assignment()}>
              <Image style={{ marginTop: 30 }} source={require('../Image/documentsent.png')} />
            </TouchableOpacity>
            
            <Image style={{ marginTop: 5 }} source={require('../Image/meeting.png')} />

            </View>
          </View>
          </View>
          </View>
        </LinearGradient>
    );
  }
}

const Styles = StyleSheet.create({
    Container: {
        height: '100%' ,
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
});