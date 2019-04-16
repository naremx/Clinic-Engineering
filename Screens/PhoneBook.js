import React from 'react';
import { StyleSheet,View,Button,Image,Text } from 'react-native';
import { LinearGradient,Constants } from 'expo';

// import ModalCardSelectFile from '../ModalScreen/ModalCardSelectFile.js';

class AdvisorEditSelectDate extends React.Component{
  constructor(props) {
    super(props);
    this.state = {

    };
  }
   render(){  
    return(
        <LinearGradient colors ={['#87daf3','#a69beb']} style={{ paddingTop: Constants.statusBarHeight }}>
          <View style={Styles.Container}>
          <View style={{alignItems:'center'}}>
          <View style={Styles.ContainerContacts}>
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


export default AdvisorEditSelectDate