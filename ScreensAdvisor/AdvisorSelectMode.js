import React from 'react';
import { StyleSheet,View,TouchableOpacity,Image } from 'react-native';
import { LinearGradient,Constants } from 'expo';
import { Actions } from 'react-native-router-flux'


export default class AdvisorSelectMode extends React.Component{
   render(){  
    return(
        <LinearGradient colors ={['#87daf3','#a69beb']} style={{ paddingTop: Constants.statusBarHeight }}>
          <View style={Styles.Container}>
          <View style={{alignItems:'center'}}>
          <View style={Styles.ContainerContacts}>
            <View style={{alignItems:'center'}}>
            <TouchableOpacity onPress={() => Actions.AdvisorEditAllDate()}>
              <Image style={{ marginTop: 50 , width:300 , height:150 , borderRadius: 20 }} source={{ uri : "https://www.img.in.th/images/f531a60fc338e97251b51c76fc71ac1f.png" }} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Actions.AdvisorEditSelectDate()}>
              <Image style={{ marginTop: 50 , width:300 , height:150 , borderRadius: 20 }} source={{ uri : "https://www.img.in.th/images/160970118a2153353f7bd14c65a986fa.png" }} />
            </TouchableOpacity>
            
            <Image style={{  width:370 , height:194 , borderRadius: 15  }} source={{ uri : "https://www.img.in.th/images/a96c9c44823dd503e7bf0a5cd222a517.png" }} />

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