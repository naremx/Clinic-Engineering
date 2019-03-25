import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, CheckBox } from 'react-native'
import { LinearGradient, Constants } from 'expo'
import { Ionicons } from 'react-native-vector-icons'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'
import DateTimePicker from 'react-native-modal-datetime-picker';
import moment from 'moment';
import call from 'react-native-phone-call';
import sentemail from 'react-native-email'
import { DatePickerAction } from '../Actions/DatePickerAction.js'

class Calendar extends React.Component{
constructor(props) {
    super(props);
    this.state = {
        isDateTimePickerVisible: false,
        chosenDate: '',
        chosenTime: false
    };
    }
    SentDateTime(chosenDate,chosenTime){
        console.log(chosenDate,chosenTime)
        this.props.DatePickerAction(chosenDate)
        Actions.AddQueue();
    }
    _showDateTimePicker = () => this.setState({ 
        isDateTimePickerVisible: true 
      });
  
    _hideDateTimePicker = () => this.setState({ 
        isDateTimePickerVisible: false
       });
  
    _handleDatePicked = (datetime) => {
      this.setState({
          isDateTimePickerVisible: false ,
          chosenDate: moment(datetime).format('MMMM, Do YYYY HH:mm'),
          
      })
    };
    CheckBoxChange()
    {
        this.setState({
            chosenTime:!this.state.chosenTime
        })
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
                            <Text style={{ marginLeft : 10 , color : '#777' }}>{this.props.chosenDate}</Text>
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
                        <Text style={{ color : '#777' }}>เครื่องมือสำหรับแปลงเค้าร่างฐานข้อมูลเชิงสัมพันธ์เป็นเค้าร่างฐานข้อมูลเชิงวัตถุ</Text>
                        <Text style={{ color : '#c0c0c0' , fontSize: 15 , fontWeight: 'bold'}}>_______________________________________________</Text>
                        <Text style={{ color : '#3e48a3' , fontSize: 15 , fontWeight: 'bold' , marginTop: 20 }}>เวลาที่สามารถนัดได้</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <CheckBox  value={this.state.check} onChange={() => this.CheckBoxChange()}/>
                            <Text style={{ color : '#777' , fontWeight: 'bold', marginTop: 7}}>09.00 - 10.00 น.</Text>
                        </View>
                    </View>
                    <View style={{ flex: 1 }}>
                        <TouchableOpacity onPress={this._showDateTimePicker}>
                        <Text style={Styles.ButtonChosen}>เลือกวันนัดคิว</Text>
                        </TouchableOpacity>
                        <Text style={{ 
                            fontSize: 20 ,
                            color: '#655ba3' ,
                            marginLeft: 10 ,
                            marginTop: 20 ,
                            fontWeight: 'bold',
                            textAlign: 'center' }} 
                            >{this.state.chosenDate}</Text>
                        <DateTimePicker
                        isVisible={this.state.isDateTimePickerVisible}
                        onConfirm={this._handleDatePicked}
                        onCancel={this._hideDateTimePicker}
                        mode={'datetime'}
                        />
                    </View>
                    <TouchableOpacity onPress={() => this.SentDateTime(this.state.chosenDate,this.state.chosenTime)}>
                        <Ionicons name="ios-checkmark-circle" size={70} style={{ color:'#31dff9' , textAlign:'center', padding : 20 }} />
                    </TouchableOpacity>
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
    calendar: {
        paddingTop: 10,
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
        width: 350,
        height: 40,
        color: '#fff' ,
        fontSize: 20 , 
        textAlign: 'center' ,
        paddingTop: 5 ,
        fontWeight: 'bold' ,
        backgroundColor: '#87daf3',
        marginLeft: 10,
        marginTop: 20,
        borderRadius: 20,
        shadowColor: '#30C1DD',
        shadowRadius: 10,
        shadowOpacity: 0.6,
        elevation: 6,
    },
});

const mapDispatchToprops = dispatch => ({
    DatePickerAction: (chosenDate) => dispatch(DatePickerAction(chosenDate))
})

const mapStateToProps = ({ Data_Advisor_Reducer }) => {
    const { val } = Data_Advisor_Reducer;
    return { val };
  }

export default connect(mapStateToProps,mapDispatchToprops)(Calendar);
