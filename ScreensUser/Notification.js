import React from 'react';
import { StyleSheet, View, Text,TouchableOpacity} from 'react-native';
import { LinearGradient, Constants } from 'expo';
import { Ionicons } from 'react-native-vector-icons'


export default class Notification extends React.Component{
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
                <View style={Styles.ListNotification}>
                    <View style={{ flexDirection : 'row' , marginLeft: 20 , marginTop : 10 }}>
                        <Ionicons name="ios-notifications" size={80} style={{ color:'#3e48a3'}} />
                        <View style={{ flexDirection : 'column' , marginTop : 8 , marginLeft: 20 }}>
                            <Text style={{ color : '#3e48a3' , fontSize: 17 , fontWeight: 'bold' }}>การแจ้งเตือนการนัดคิว</Text>
                            <Text style={{ color : '#3e48a3' , fontSize: 15  }}>กนกทิพย์ นามสมมติ</Text>
                            <Text style={{ color : '#3e48a3' , fontSize: 15  }}>วันที่เวลาที่ทำการนัดคิว</Text>
                        </View>
                    </View>
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
    ContainerContacts: {
        width: 370,
        height: 600,
        backgroundColor: 'white',
        borderRadius: 18,
        shadowColor: '#30C1DD',
        shadowRadius: 10,
        shadowOpacity: 0.6,
        elevation: 6,
        alignSelf : 'center',
    },
    ListNotification: {
        width: 330,
        height: 100,
        backgroundColor: '#dcf2f7',
        alignSelf : 'center',
        marginTop: 20,
        shadowColor: '#30C1DD',
        shadowRadius: 10,
        shadowOpacity: 0.6,
        elevation: 6,
    }
});