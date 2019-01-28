import React from 'react';
import { View, Text, StyleSheet , ImageBackground , StatusBar } from 'react-native';
import { LinearGradient } from 'expo';



const Contact = () => {
    return (
            <LinearGradient colors ={['#87daf3','#a69beb']} style={Styles.Container}>
                <LinearGradient colors ={['#da3686','#fa3b75']} style={Styles.InputBox}>
                </LinearGradient>
            </LinearGradient> 
    );
}

const Styles = StyleSheet.create({
    Container: {
        flex: 1,
        alignItems: 'center',
        width: '100%',
        height: '100%',
    },
    OverlayContainer: {
        alignItems: 'center',
        width: 350,
        height: 500,
        borderRadius: 15,
        backgroundColor: '#ffffff',
    },
   
});

export default Contact;