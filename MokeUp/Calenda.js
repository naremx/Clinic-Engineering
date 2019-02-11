import React from 'react';
import { StyleSheet, View, Text,Image } from 'react-native';
import { LinearGradient, Constants } from 'expo';
import { Calendar } from 'react-native-calendars';
import { Ionicons } from 'react-native-vector-icons'


export default class Calenda extends React.Component{
constructor(props) {
    super(props);
    this.state = {};
    this.onDayPress = this.onDayPress.bind(this);
    }
onDayPress(day) {
    this.setState({
        selected: day.dateString
    });
    this.props.navigation.navigate('Slot', { bookingDate : day })
    }
    _onPressBack(){
    const {goBack} = this.props.navigation
        goBack()
    }
    render(){
      return(
        <LinearGradient colors ={['#87daf3','#a69beb']} style={{ paddingTop: Constants.statusBarHeight }}>
        <View style={Styles.Container}>
            <View style={Styles.ContainerContacts}>
                <View style={Styles.FlexContainer}>
                    <Image style={Styles.drawerImage} source={require('../Image/Advisor.png') } />
                    <View style={Styles.Column}>
                        <Text style={{ fontFamily:'supermarket' , marginLeft : 10 , color : '#3e48a3' , fontSize: 15 , fontWeight: 'bold' , marginTop: 20 }} >ธีรวัฒน์ นามสกุล</Text>
                        <Text style={{ marginLeft : 10 , color : '#777' }}>Computer Engineering</Text>
                        <View style={Styles.FlexContainer}>
                            <Ionicons name="ios-pin" size={15} style={{ color:'#777' , marginLeft: 22}} />
                            <Text style={{ marginLeft : 10 , color : '#c0c0c0' }}>Kingmongkut</Text>
                        </View>
                    </View>
                </View>
                <View >
                    <Calendar
                    onDayPress={this.onDayPress}
                    style={Styles.calendar}
                    hideExtraDays
                    markedDates={{[this.state.selected]: {selected: true}}}
                    theme={{
                        selectedDayBackgroundColor: '#50d3b4',
                        todayTextColor: '#50d3b4',
                        arrowColor: 'green',
                    }}
                    />
                </View>
                <View>
                    <Ionicons name="ios-checkmark-circle" size={70} style={{ color:'#31dff9' , textAlign:'center', padding : 20}} />
                </View>
            </View>
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
        borderColor: '#ccc',
        height: 350
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
        marginLeft: 10
    },
    FlexContainer:{
        flex:1 ,
        flexDirection: 'row'
    },
    drawerImage: {
        height: 90,
        width: 90,
        borderRadius: 100,
        marginLeft: 20,
        marginTop: 15,
    },
    Column:{
        flexDirection: "column"
    },
});