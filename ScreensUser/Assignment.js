import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { LinearGradient, Constants } from 'expo';
import { Ionicons } from 'react-native-vector-icons'
import { connect } from 'react-redux'


class Assignment extends React.Component{
    Logout(token)
    {
        console.log(token)
    }

    render(){
        return(
            <LinearGradient colors ={['#87daf3','#a69beb']} style={{ paddingTop: Constants.statusBarHeight }}>
            <View style={Styles.Container}>
                <View style={{ alignItems : 'flex-end' }}>
                    <TouchableOpacity onPress={() => this.Logout(this.props.token)}>
                        <Text> ออกจากระบบ </Text>
                    </TouchableOpacity>
                    <Text>{this.props.val.author}</Text>
                </View>
            </View>
        </LinearGradient>
        )
    }
}

const Styles = StyleSheet.create({
    Container: {
        height: '100%' ,
    },
    Header: {
        height: 60 ,
        backgroundColor: '#fff'  ,
        flexDirection: 'row'
    },
    Icon: {
        marginLeft: 10  ,
        marginTop: 16
    }
});


const mapStateToProps = ({ LoginUser_Reducer,Add_Queue_Reducer }) => {
    const { token,role } = LoginUser_Reducer;
    const { val } = Add_Queue_Reducer;
        return { token,role,val };
  }

export default connect(mapStateToProps)(Assignment);
