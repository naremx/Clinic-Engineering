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
              <Image style={{  width:300 , height:150 , marginTop: 50 , borderRadius: 20 }} source={{ uri : "https://www.img.live/images/2019/05/02/received-doc.png" }} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Actions.AdvisorAssignment()}>
              <Image style={{  width:300 , height:150 , marginTop: 50 , borderRadius: 20 }} source={{ uri : "https://www.img.live/images/2019/05/02/sent-doc.png" }} />
            </TouchableOpacity>
            
            <Image style={{  width:370 , height:194 , marginTop: 5 , borderRadius: 15 }} source={{ uri : "https://www.img.live/images/2019/05/02/shake-up-sales-meeting-og.jpg" }} />

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