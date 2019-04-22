import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { LinearGradient, Constants } from 'expo';
import { Ionicons } from 'react-native-vector-icons'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux';


class Assignment extends React.Component{
    Logout(token)
    {
        console.log(token)
    }

    render(){
        return(
            <LinearGradient colors ={['#87daf3','#a69beb']}>
            <View style={Styles.Container}>
            <TouchableOpacity onPress={() => Actions.ListAddAss()}>
                <View style={{alignItems:'center'}}>
                <LinearGradient colors={['#90ed9c', '#04d11f']} start={{x: 0.0, y: 1.0}} end={{x: 1.0, y: 1.0}} style={Styles.Button}>
                    <Text style = {{ color: '#fff', 
                            fontSize: 20,
                            textAlign: 'center',
                            marginTop: 10,
                            fontWeight: 'bold'
                            }}>เพิ่มงาน</Text>
                </LinearGradient>
                </View>
            </TouchableOpacity>
            </View>
        </LinearGradient>
        )
    }
}

const Styles = StyleSheet.create({
    Container: {
        height: '100%' ,
        alignItems:'center'
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
      marginTop: 20
   },
    drawerImage: {
      height: 90,
      width: 90,
      borderRadius: 100,
      marginLeft: 20,
      marginTop: 15,
  },
  Button: {
    width: 360,
    height: 50,
    backgroundColor: '#000',
    marginTop: 10,
    borderRadius: 10,
    shadowColor: '#30C1DD',
    shadowRadius: 10,
    shadowOpacity: 0.6,
    elevation: 6,
  },
});


const mapStateToProps = ({ LoginUser_Reducer,Add_Queue_Reducer }) => {
    const { token,role } = LoginUser_Reducer;
    const { val } = Add_Queue_Reducer;
        return { token,role,val };
  }

export default connect(mapStateToProps)(Assignment);
