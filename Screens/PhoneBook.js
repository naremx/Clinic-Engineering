import React from 'react';
import { StyleSheet,View,Text,TouchableOpacity } from 'react-native';
import { LinearGradient,Constants } from 'expo';
import axios from 'axios'

export default class PhoneBook extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      dataSource: [],

    };
  }
  componentDidMount() {
    try{
        axios.get(`http://10.66.13.208:8000/advisor/getaddata/`)
      .then(res => {
        this.setState({ dataSource : res.data});
      })
    }
    catch(err){
      console.log(err)
    }
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