import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import { LinearGradient, Constants } from 'expo'
import { Ionicons } from 'react-native-vector-icons'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'
import call from 'react-native-phone-call';
import sentemail from 'react-native-email'

class DetailAdvisor extends React.Component{
constructor(props) {
    super(props);
    this.state = {};
    }
    SentDateTime(chosenDate,chosenTime){
        console.log(chosenDate,chosenTime)
        this.props.DatePickerAction(chosenDate)
        Actions.AddQueue();
    }
    callphone = (telephone) => {
        const args = {
          number: telephone
        };
    
        call(args).catch(console.error);
    }
    handleEmail = (email) => {
        console.log(email)
        const to = email
        sentemail(to).catch(console.error);
    }
    gotoCalendar(){
        Actions.CalendarUser();
    }
    render(){
      return(
        <LinearGradient colors ={['#87daf3','#a69beb']} style={{ paddingTop: Constants.statusBarHeight }}>
            <View style={Styles.Container}>
                <View style={Styles.ContainerContacts}>
                    <View style={{ flexDirection: 'row' }}>
                        <Image style={Styles.drawerImage} source={require('../Image/user.png')} />
                        <View style={{ flexDirection: 'column' }}>
                            <Text style={{ 
                                marginLeft : 10 ,
                                color : '#3e48a3' ,
                                fontSize: 15 ,
                                fontWeight: 'bold' ,
                                marginTop: 20 }} 
                                >{this.props.val.first_name}</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <Ionicons name="ios-pin" size={15} style={{ color:'#777' , marginLeft: 22}} />
                                <Text style={{ marginLeft : 10 , color : '#c0c0c0' }}>{this.props.val.department}</Text>
                            </View>
                            <View style={{flexDirection: "row" , marginLeft: 10 }}>
                                <LinearGradient colors={['#87daf3', '#a69beb']} start={{x: 0.0, y: 1.0}} end={{x: 1.0, y: 1.0}} style={Styles.Button}>
                                    <Ionicons name="ios-call" size={30} style={{ 
                                        color:'#fff', 
                                        marginTop: 12 , 
                                        marginLeft: 20}} onPress={() => this.callphone(this.props.val.telephone)}/>
                                </LinearGradient>
                                <LinearGradient colors={['#87daf3', '#a69beb']} start={{x: 0.0, y: 1.0}} end={{x: 1.0, y: 1.0}} style={Styles.Button}>
                                    <Ionicons name="ios-mail" size={30} style={{ 
                                        color:'#fff', 
                                        marginTop: 12 , 
                                        marginLeft: 18}} onPress={() => this.handleEmail(this.props.val.email)}/>
                                </LinearGradient>
                            </View>
                        </View>
                    </View>
                    <View style={{ marginLeft : 20 }}>
                        <Text style={{ color : '#3e48a3' , fontSize: 15 , fontWeight: 'bold' }}>ความถนัดเฉพาะทาง</Text> 
                        <Text style={{ color : '#777' }}>คอมพิวเตอร์</Text>
                        <Text style={{ color : '#3e48a3' , fontSize: 15 , fontWeight: 'bold' }}>วิทยานิพนธ์</Text>
                        <ScrollView style={{ height : 100 }}>
                            <Text style={{ color : '#777' }}>เครื่องมือสำหรับแปลงเค้าร่างฐานข้อมูลเชิงสัมพันธ์เป็นเค้าร่างฐานข้อมูลเชิงวัตถุ</Text>
                        </ScrollView> 
                    </View>
                    <Image source={require('../Image/meeting.png')} />
                    <View style={{alignItems:'center'}}>
                        <TouchableOpacity onPress={() => this.gotoCalendar()}>
                            <Text style={Styles.ButtonChosen}>เลือกวันนัดคิว</Text>
                        </TouchableOpacity>
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
    ButtonChosen:{
        width: 320,
        height: 40,
        color: '#fff' ,
        fontSize: 20 , 
        textAlign: 'center' ,
        paddingTop: 5 ,
        fontWeight: 'bold' ,
        backgroundColor: '#87daf3',
        marginTop: 20,
        position: 'relative',
        borderRadius: 10,
        shadowColor: '#30C1DD',
        shadowRadius: 10,
        shadowOpacity: 0.6,
        elevation: 6,
    },
});

const mapStateToProps = ({ Data_Advisor_Reducer }) => {
    const { val } = Data_Advisor_Reducer;
    return { val };
  }

export default connect(mapStateToProps)(DetailAdvisor);
