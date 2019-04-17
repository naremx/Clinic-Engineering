import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { LinearGradient, Constants } from 'expo';
import { connect } from 'react-redux'
import { Ionicons } from 'react-native-vector-icons'

import ModalCardCancelAd from '../ModalScreen/ModalCardCancelAd.js';
import ModalCardConfirm from '../ModalScreen/ModalCardConfirm.js';

class DetailAddQueue extends React.Component{
    constructor(props){
        super(props);
        this.state = {
        }
    }   
    render(){
        return(
            <LinearGradient colors ={['#87daf3','#a69beb']} style={{ paddingTop: Constants.statusBarHeight }}>
                <View style={{ height: '100%' }}>
                    <View style={{ alignItems:'center' }}>
                        <View style={Styles.ContainerContacts}>
                            <View style={{ flexDirection: 'row' }}>
                                <Image style={Styles.drawerImage} source={require('../Image/user.png')} />
                                <View style={{ flexDirection: 'column' }}>
                                    <Text style={{ 
                                        marginLeft : 10 , 
                                        color : '#3e48a3' , 
                                        fontSize: 20 , 
                                        fontWeight: 'bold' , 
                                        marginTop: 20 }} >{this.props.AdDateTimeDetail.user}</Text>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Ionicons name="ios-calendar" size={20} style={{ color:'#777' , marginLeft: 22}} />
                                        <Text style={{ marginLeft : 15 , color : '#3e48a3' }}>วันที่ : {this.props.AdDateTimeDetail.date_time}</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Ionicons name="ios-alarm" size={20} style={{ color:'#777' , marginLeft: 22}} />
                                        <Text style={{ marginLeft : 15 , color : '#3e48a3' }}> ช่วงเวลา : {this.props.AdDateTimeDetail.available}</Text>
                                    </View>
                                </View>
                            </View>
                                <View style={{ marginLeft : 20 , marginTop: 10 }}>
                                    <View style={{ flexDirection : 'row' }}>
                                        <Text style={{ color : '#3e48a3' , fontSize: 20 , fontWeight: 'bold' }}>รายละเอียดคิว</Text> 
                                    </View>
                                    <View style={{ flexDirection : 'row' }}>    
                                        <Text style={{ color : '#3e48a3' , fontSize: 17, fontWeight: 'bold' }}>หัวเรื่อง: </Text>
                                        <Text style={{ color : '#848484' , fontSize: 17 }}>{this.props.AdDateTimeDetail.topic}</Text>
                                    </View>
                                    <View style={{ flexDirection : 'row' }}>
                                        <Text style={{ color : '#3e48a3' , fontSize: 17 , fontWeight: 'bold' }}>สถานะ: </Text>
                                        <Text style={{ color : '#848484' , fontSize: 17 }}>{this.props.AdDateTimeDetail.status}</Text> 
                                    </View>
                                    <View style={{ flexDirection : 'column' }}> 
                                        <ScrollView style={{ height : 100 }}>
                                            <Text style={{ color : '#3e48a3' , fontSize: 17, fontWeight: 'bold' }}>รายละเอียด: </Text> 
                                            <Text style={{ color : '#848484' , fontSize: 17 }}>{this.props.AdDateTimeDetail.detail}</Text> 
                                        </ScrollView> 
                                    </View>
                                </View>
                            <View style={{ flexDirection : 'row' }}> 
                            <ModalCardConfirm/>
                            <ModalCardCancelAd/>
                            </View>
                        </View>
                    </View>
                </View>
            </LinearGradient>
        )
    }
}



const Styles = StyleSheet.create({
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
    drawerImage: {
        height: 90,
        width: 90,
        borderRadius: 100,
        marginLeft: 20,
        marginTop: 15,
    },
    Button:{
        width: 60,
        height: 50,
        backgroundColor: '#000',
        margin: 15,
        borderRadius: 15,
        shadowColor: '#30C1DD',
        shadowRadius: 10,
        shadowOpacity: 0.6,
        elevation: 6,
    },
    ButtonCancel:{
        height: 50, 
        alignItems: 'center', 
        justifyContent: 'center' ,
        width: 150 , 
        borderRadius: 20 , 
        shadowColor: '#30C1DD',
        shadowRadius: 10,
        shadowOpacity: 0.6,
        elevation: 6,
        marginTop: 20,
        position: 'relative',
    },
});

const mapStateToProps = ({ LoginUser_Reducer , Ad_Select_Time_Detail_Reducer }) => {
    const { token} = LoginUser_Reducer;
    const { AdDateTimeDetail } = Ad_Select_Time_Detail_Reducer;
        return { token,AdDateTimeDetail };
  }

export default connect(mapStateToProps)(DetailAddQueue);
