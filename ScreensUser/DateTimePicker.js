import React, { Component } from 'react';
import { Text, TouchableOpacity , View , StyleSheet } from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import moment from 'moment';

export default class DateTimePickerTester extends Component {
  constructor(){
    super()
    this.state = {
    isDateTimePickerVisible: false,
    chosenDate: ''
  }
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

  render () {
    return (
      <View style={{ flex: 1 }}>
        <TouchableOpacity onPress={this._showDateTimePicker}>
          <Text style={Styles.Button}>เลือกวันนัดคิว</Text>
        </TouchableOpacity>
        <Text style={{ fontSize: 20 , color: '#655ba3' , marginLeft: 10 , marginTop: 20 , fontWeight: 'bold' }} >{this.state.chosenDate}</Text>
        <DateTimePicker
          isVisible={this.state.isDateTimePickerVisible}
          onConfirm={this._handleDatePicked}
          onCancel={this._hideDateTimePicker}
          mode={'datetime'}
        />
      </View>
    );
  }

}

const Styles = StyleSheet.create({
    Button:{
        width: 350,
        height: 40,
        color: '#fff' ,
        fontSize: 20 , 
        paddingLeft: 120 ,
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
