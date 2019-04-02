import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, StatusBar } from 'react-native'
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
        
            this.setState({
                selectedDateResult: resultDate,
                selectedValue: resultValueFinal
            })
          })

        .then(response => console.log('Success:', JSON.stringify(response)))
        .catch(error => console.error('Error:', error));
    }
    
    onDayPress = (day) => {
    this.setState({
            selected: day.dateString
        })
    };
    onTimePress = (selected) => {
        console.log(selected)
        this.setState({
                selectedTime: selected
            })
        };
    SentDateTime(selected,selectedTime){
        console.log(selected,selectedTime)
        this.props.DatePickerAction(selected)
        Actions.AddQueue();
    }
    CheckBoxChange()
    {
        this.setState({
            chosenTime:!this.state.chosenTime
        })
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
                    <CheckboxGroup
                            callback={this.onTimePress}
                            iconColor={"#00a2dd"}
                            iconSize={20}
                            checkedIcon="ios-checkbox-outline"
                            uncheckedIcon="ios-square-outline"
                            checkboxes={this.state.selectedValue}
                            labelStyle={{
                                color: '#333'
                            }}
                            rowStyle={{
                                flexDirection: 'row'
                            }}
                            rowDirection={"column"}
                            />
                    <TouchableOpacity onPress={() => this.SentDateTime(this.state.selected,this.state.selectedTime)}>
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
    DatePickerAction: (selected) => dispatch(DatePickerAction(selected))
})

const mapStateToProps = ({ Data_Advisor_Reducer , LoginUser_Reducer }) => {
    const { val } = Data_Advisor_Reducer;
    const { token,role } = LoginUser_Reducer;
    return { val,token,role };
  }

export default connect(mapStateToProps,mapDispatchToprops)(CalendarUser);
