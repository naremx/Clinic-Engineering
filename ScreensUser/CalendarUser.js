import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import { LinearGradient, Constants } from 'expo'
import { Ionicons } from 'react-native-vector-icons'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'
import { Calendar } from 'react-native-calendars';
import { DatePickerAction } from '../Actions/DatePickerAction.js'
import CheckboxGroup from 'react-native-checkbox-group'


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
        var url = 'http://10.66.13.208:8000/advisor/showavailable/' ;

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
            console.log(this.state.selectedDate)           
            const resultDate = this.state.selectedDate.reduce((arr,item) =>{
                if( item.free_date){
                    arr.push(item.free_date);
                }
                return arr
            }, [])

            const resultValue = this.state.selectedDate.reduce((arr,item) =>{
                if(item.id){
                    arr.value.push(item.id);
                    arr.label.push(item.start_time)
                }
                return arr
                
            }, { label: [] , value: [] } )

            const resultValueFinal = resultValue.label.reduce((arr,item,index) =>{
                arr.push({
                    label: item,
                    value: resultValue.value[index]
                });
                return arr;
            }, [] )

            const resultValueDelete = resultValueFinal.filter((elem, index, self) => self.findIndex(
                (t) => {return (t.label === elem.label)}) === index)

            this.setState({
                selectedDateResult: resultDate,
                selectedValue: resultValueFinal,
                selectedValueDelete: resultValueDelete
            })
          })

          

        .then(response => console.log('Success:', JSON.stringify(response)))
        .catch(error => console.error('Error:', error));
    }
    
    onDayPress = (day) => {
    this.setState({
            selected: {Day: day.dateString}
        })
        console.log(this.state.selected)
    };
    onTimePress = (selected) => {
        this.setState({
                selectedTime: {Time: selected}
            })
    }
    SentDateTime(selected,selectedTime){
        let collectionDateTime={}
        collectionDateTime.selected = selected,
        collectionDateTime.selectedTime = selectedTime
        console.log(collectionDateTime)

        this.props.DatePickerAction(collectionDateTime)
        Actions.AddQueue();
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
                    <View style={{ marginTop : 5 }}>
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
                    <Text style={{ 
                                marginLeft : 10 ,
                                color : '#3e48a3' ,
                                fontSize: 25 ,
                                fontWeight: 'bold' ,
                                marginTop: 20 }} >เลือกเวลาในการนัดคิว</Text>
                    <View style={{ flexDirection : "row" }}>
                        <ScrollView style={{ height : 100 }}>
                            <CheckboxGroup
                                    callback={this.onTimePress}
                                    iconColor={"#00a2dd"}
                                    iconSize={20}
                                    checkedIcon="ios-checkbox-outline"
                                    uncheckedIcon="ios-square-outline"
                                    checkboxes={this.state.selectedValueDelete}
                                    labelStyle={{
                                        color: '#333'
                                    }}
                                    rowStyle={{
                                        flexDirection: 'row'
                                    }}
                                    />
                            </ScrollView> 
                    </View>
                    <TouchableOpacity onPress={() => this.SentDateTime(this.state.selected,this.state.selectedTime)}>
                        <Ionicons name="ios-checkmark-circle" size={70} style={{ color:'#31dff9' , textAlign:'center', padding : 10 }} />
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
