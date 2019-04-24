import React from 'react';
import { StyleSheet,View,Text,ActivityIndicator } from 'react-native';
import { LinearGradient,Constants,Asset,Font } from 'expo';


class PhoneBook extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
        fontLoaded: false
    };
  }
  async componentDidMount() {
    await Font.loadAsync({
      'supermarket' : require('../assets/fonts/supermarket.ttf'),
    }).then(() => {
	  this.setState({fontLoaded: true})	
	  })
  }
  


   render(){  
    return(
      <LinearGradient colors ={['#87daf3','#a69beb']} style={{ paddingTop: Constants.statusBarHeight }}>
      <View style={Styles.Container}>
        {this.state.fontLoaded  ? ( 
          <Text style={{ fontFamily: 'supermarket' }}>TEXT เทสจ้าาาาาาาาา</Text>
         ) : (<ActivityIndicator size = "large"/>) }

      </View>
      </LinearGradient>
    );
  }
}

const Styles = StyleSheet.create({
    Container: {
        height: '100%' ,
        alignItems:'center'
  },

});



export default PhoneBook

