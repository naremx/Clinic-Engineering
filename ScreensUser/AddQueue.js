import React from 'react';
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native';
import { LinearGradient, Constants } from 'expo';
import { Ionicons } from 'react-native-vector-icons'


const AddQueue = (props) => {
    return (
            <LinearGradient colors ={['#87daf3','#a69beb']} style={{ paddingTop: Constants.statusBarHeight }}>
                <View style={Styles.Container}>
                </View>
            </LinearGradient>
    );
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

export default AddQueue;