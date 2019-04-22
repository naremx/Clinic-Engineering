import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import { LinearGradient, Constants } from 'expo'
import { Ionicons } from 'react-native-vector-icons'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'
import { Calendar } from 'react-native-calendars';
import { DatePickerAction } from '../Actions/DatePickerAction.js'

class CalendarUser extends React.Component{
constructor(props) {
    super(props);
    this.state = {
        selectedDate : '' ,
        selectedDateResult: [] ,
        selectedValue : [],
        selectedValueDelete : []
    };
    this.onDayPress = this.onDayPress.bind(this);
    }
    componentDidMount() {
        var url = 'http://10.66.13.208:8000/advisor/Usshowavailable/' ;

        fetch(url, {
        method: 'POST', 
        body: JSON.stringify(this.props.val.id),
        headers:{
            'Content-Type': 'application/json' ,
            Authorization : `Token ${this.props.token}`,
        }
        }).then(res => res.json())
        .then((responseData) => {
            this.setState({
                selectedDate: responseData
            });
            console.log('KK',responseData)
            const resultDate = this.state.selectedDate.reduce((arr,item) =>{
                if( item.free_date){
                    arr.push(item.free_date);
                }
                return arr
            }, [])
            this.setState({
                selectedDateResult: resultDate,
            })
          })

        .then(response => console.log('Success:', JSON.stringify(response)))
        .catch(error => console.error('Error:', error));
    }
    
    onDayPress = (day) => {
    this.setState({ date: day.dateString })
    this.setState({
            selected: {date: day.dateString}
        })
    };
    SentDateTime(){
        let collectionDateTime={}
        collectionDateTime = this.state.selected,

        console.log(collectionDateTime)

        this.props.DatePickerAction(collectionDateTime)
        Actions.CalendarUserTime();
    }
    render(){
        let dates = {};
        this.state.selectedDateResult.forEach((val) => {
            dates[val] = {selected: true};
        });
      return(
        <LinearGradient colors ={['#87daf3','#a69beb']} style={{ paddingTop: Constants.statusBarHeight }}>
            <View style={Styles.Container}>
                <View style={Styles.ContainerContacts}>
                    <View style={{ marginTop : 20 }}>
                        <Calendar
                            onDayPress={this.onDayPress}
                            style={Styles.calendar}
                            hideExtraDays
                            markedDates= {dates}
                            theme={{
                            selectedDayBackgroundColor: '#87daf3',
                            todayTextColor: '#a69beb',
                            arrowColor: '#a69beb',
                            }}
                        />
                    </View>
                    <Text style={{ fontSize: 20 , color: '#3e48a3' , marginLeft: 20 , marginTop: 20 , fontWeight: 'bold' }} >วันที่เลือก : {this.state.date}</Text>
                    <View style={{alignItems:'center'}}>
                        <TouchableOpacity onPress={() => this.SentDateTime()}>
                            <Image style={{ marginTop: 50 }} source={require('../Image/selecttime.png')} />
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
    calendar: {
      borderTopWidth: 1,
      paddingTop: 5,
      borderBottomWidth: 1,
      borderColor: '#eee',
      height: 350
    }
});

const mapDispatchToprops = dispatch => ({
    DatePickerAction: (collectionDateTime) => dispatch(DatePickerAction(collectionDateTime))
})

const mapStateToProps = ({ Data_Advisor_Reducer , LoginUser_Reducer }) => {
    const { val } = Data_Advisor_Reducer;
    const { token,role } = LoginUser_Reducer;
    return { val,token,role };
  }

export default connect(mapStateToProps,mapDispatchToprops)(CalendarUser);
