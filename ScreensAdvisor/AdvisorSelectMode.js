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
              <Image style={{ marginTop: 50 , width:300 , height:150 , borderRadius: 20 }} source={{ uri : "https://www.img.live/images/2019/05/02/editdate.png" }} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Actions.AdvisorEditSelectDate()}>
              <Image style={{ marginTop: 50 , width:300 , height:150 , borderRadius: 20 }} source={{ uri : "https://www.img.live/images/2019/05/02/selectaddalldate.png" }} />
            </TouchableOpacity>
            
            <Image style={{  width:370 , height:194 , borderRadius: 15  }} source={{ uri : "https://www.img.live/images/2019/05/02/shake-up-sales-meeting-og.jpg" }} />

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