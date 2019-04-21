import React from 'react';
import { StyleSheet,View} from 'react-native';
import { LinearGradient,Constants } from 'expo';


class PhoneBook extends React.Component{
  constructor(props) {
    super(props);
    this.state = {

    };
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
        alignItems:'center'
  },
});



export default PhoneBook

