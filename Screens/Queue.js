import React from 'react';
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native';
import { LinearGradient, Constants } from 'expo';
import { Ionicons } from 'react-native-vector-icons'


const Queue = (props) => {
    return (
            <LinearGradient colors ={['#87daf3','#a69beb']} style={{ paddingTop: Constants.statusBarHeight }}>
                <View style={Styles.Container}>
                    <View style={Styles.Header} >
                        <TouchableHighlight style={Styles.Icon} onPress={() => props.navigation.openDrawer()}>
                            <Ionicons name="ios-menu" size={30} color="#87daf3"  />
                        </TouchableHighlight>
                        <Text style={{color : '#87daf3' , fontSize: 23 , fontWeight: 'bold' , paddingLeft: 160 , marginTop: 15 }} >คิว</Text>
                        </View>
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

export default Queue;