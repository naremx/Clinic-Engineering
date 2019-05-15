import React, { Component } from 'react';
import { StyleSheet,View,Text,TouchableOpacity,StatusBar,Button } from 'react-native';
import { LinearGradient,Constants } from 'expo';
import { Calendar } from 'react-native-calendars';

export default class PhoneBook extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      markedData: ['2019-03-10','2019-03-11','2019-03-12','2019-03-13']
    };
    this.onDayPress = this.onDayPress.bind(this);
  }
  onDayPress(day) {
    this.setState({
      selected: day.dateString
    });
    //nexttoday
  }  render(){
    let dates = {};
    this.state.markedData.forEach((val) => {
      dates[val] = {selected: true};
});
    return(
        <LinearGradient colors ={['#87daf3','#a69beb']} style={{ paddingTop: Constants.statusBarHeight }}>
          <View style={Styles.Container}>
            <StatusBar barStyle="light-content"/>
              <Calendar
                onDayPress={this.onDayPress}
                style={Styles.calendar}
                hideExtraDays
                // markedDates={{[this.state.selected]: {selected: true} ,
                // [this.state.selectdate]: {selected: true} ,}}
                markedDates= {dates}
                theme={{
                  selectedDayBackgroundColor: '#87daf3',
                  todayTextColor: 'green',
                  arrowColor: 'green',
                }}
              />
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
      borderColor: '#eee',
      height: 350
    }
});