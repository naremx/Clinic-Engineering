import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { LinearGradient, Constants } from 'expo';
import { Ionicons } from 'react-native-vector-icons'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'

class Queue extends React.Component{
    ShowDetailQueue(val){
        Actions.DetailAddQueue();
    }
    render(){
        return(
            <LinearGradient colors ={['#87daf3','#a69beb']} style={{ paddingTop: Constants.statusBarHeight }}>
                <View style={Styles.Container}>
                    <TouchableOpacity onPress={() => this.ShowDetailQueue(this.props.val)}>
                        <View style={Styles.ContainerContacts}>
                            <View style={{ flexDirection : 'row' }}>
                                <Image style={Styles.drawerImage} source={{ uri: this.props.val.image }} />
                                <View style={{ flexDirection : 'column' }}>
                                    <View style={{ flexDirection : 'row' }}> 
                                        <Text style={{ marginLeft : 10 , color : '#3e48a3' , fontSize: 15 , fontWeight: 'bold' , marginTop: 20 }} >{this.props.val.book_title}</Text>
                                        <Text style={{ marginLeft : 10 , color : '#777' , marginTop: 20 }}>• รอยืนยัน </Text>
                                    </View>
                                    <Text style={{ marginLeft : 10 , color : '#777' }}>Computer Engineering</Text>
                                    <View style={{ flexDirection : 'row' }}>
                                        <Ionicons name="ios-pin" size={15} style={{ color:'#777' , marginLeft: 22}} />
                                        <Text style={{ marginLeft : 10 , color : '#c0c0c0' }}>{this.props.val.author}</Text>
                                    </View>
                                    <Text style={{ marginLeft : 10 , color : '#3e48a3' , fontSize: 13 , fontWeight: 'bold'}} >วันที่นัด : {this.props.chosenDate}</Text>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
            </LinearGradient>
        )
    }
} 

const Styles = StyleSheet.create({
    Container: {
        height: '100%',
    },
    ContainerContacts: {
        width: 370,
        height: 120,
        marginLeft: 10,
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
});

const mapStateToProps = ({ Add_Queue_Reducer , Data_Datetime_Reducer }) => {
    const { val } = Add_Queue_Reducer;
    const {chosenDate} = Data_Datetime_Reducer;
        return { chosenDate,val };
  }

export default connect(mapStateToProps)(Queue);
