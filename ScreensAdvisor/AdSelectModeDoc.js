import React from 'react';
import { StyleSheet,View,TouchableOpacity,Image } from 'react-native';
import { LinearGradient,Constants } from 'expo';
import { Actions } from 'react-native-router-flux'


export default class AdSelectModeDoc extends React.Component{
   render(){  
    return(
        <LinearGradient colors ={['#87daf3','#a69beb']} style={{ paddingTop: Constants.statusBarHeight }}>
          <View style={Styles.Container}>
          <View style={{alignItems:'center'}}>
          <View style={Styles.ContainerContacts}>
            <View style={{alignItems:'center'}}>
            <TouchableOpacity onPress={() => Actions.AdRecieveDoc()}>
              <Image style={{  width:300 , height:150 , marginTop: 50 }} source={{ uri : "https://www.img.in.th/images/8e9cf3f862e18f3542569b4b11ce9a36.png" }} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Actions.AdvisorAssignment()}>
              <Image style={{  width:300 , height:150 , marginTop: 50 }} source={{ uri : "https://www.img.in.th/images/0495389109057a374cbfb6cd522088da.png" }} />
            </TouchableOpacity>
            
            <Image style={{  width:370 , height:194 , marginTop: 5 , borderRadius: 15 }} source={{ uri : "https://www.img.in.th/images/a96c9c44823dd503e7bf0a5cd222a517.png" }} />

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