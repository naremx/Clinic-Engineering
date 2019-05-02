import React from 'react';
import moment from 'moment';
import { StyleSheet,View,Image,TouchableOpacity, } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { LinearGradient, Constants } from 'expo'
import CheckboxGroup from 'react-native-checkbox-group'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'

const _format = 'YYYY-MM-DD'
const _today = moment().format(_format)
const _maxDate = moment().add(100, 'days').format(_format)

class AdvisorEditAllDate extends React.Component {
  initialState = {
      [_today]: {disabled: true}
  }
  
  constructor() {
    super();

    this.state = {
      markedDates: {},
      today: new Date()
    }
  }
  SentSettingDate(){
    let collection={}
        collection.free_date=this.state.DateArray,
        collection.time=this.state.selectedTime,

    console.log('--SENT--',collection)
    Actions.AdvisorSelectMode()

    var url = 'http://10.16.2.185:8000/advisor/createavailable/' ;

    fetch(url, {
      method: 'POST', 
      body: JSON.stringify(collection),
      headers:{
          'Content-Type': 'application/json' ,
          Authorization : `Token ${this.props.token}`
      }
      })
  }
  onDayPress = day => {
    const markedDates = Object.assign({}, this.state.markedDates)
    const dateString = day.dateString

    if (markedDates.hasOwnProperty(dateString)) {
      delete markedDates[dateString]
    } else {
      markedDates[dateString] = { selected: true }
    }
    this.setState({ markedDates })
    var ObjectToArray = Object.entries(markedDates).map(([k]) => ([k]));

    const ResltDateArray = [].concat(...ObjectToArray);
 
    this.setState({
      DateArray : ResltDateArray
    })
    
  }
  
  render() {
    const { markedDates, markedDatesLength, today } = this.state
    return (
      <LinearGradient colors ={['#87daf3','#a69beb']} style={{ paddingTop: Constants.statusBarHeight }}>
        <View style={Styles.Container}>
          <View style={Styles.ContainerContacts}>
            <View style={{ marginTop : 15 }}>
              <Calendar
                  minDate={_today}
                  maxDate={_maxDate}
                  onDayPress={this.onDayPress}
                  markedDates={markedDates}
              />
            </View>
            <View style= {{ flexDirection : "row" , marginTop : 50 }}>
                      <CheckboxGroup
                    callback={(selected) => {         
                      this.setState({
                      selectedTime: {selected}
                  }) 
                }}
                    iconColor={"#00a2dd"}
                    iconSize={30}
                    checkedIcon="ios-checkbox-outline"
                    uncheckedIcon="ios-square-outline"
                    checkboxes={[
                      {
                        label: "09:00-10.00", 
                        value: 1, 
                      },
                      {
                        label: "10.00-11.00",
                        value: 2
                      },
                      {
                        label: "11.00-12.00",
                        value: 3
                      },
                      {
                        label: "13.00-14.00",
                        value: 4
                      },
                      {
                        label: "14.00-15.00",
                        value: 5
                      },
                      {
                        label: "15.00-16.00",
                        value: 6
                      },
                    ]}
                    labelStyle={{
                      color: '#333'
                    }}
                    rowStyle={{
                      flexDirection: 'row'
                    }}
                    rowDirection={"column"}
                  />
                  <TouchableOpacity onPress={() => this.SentSettingDate()}>
                    <Image style={{  width:200 , height:120 , margin :30 }} source={{ uri : "https://www.img.live/images/2019/04/24/ok.png" }} />
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
    paddingTop: 30,
    borderBottomWidth: 1,
    borderColor: '#eee',
    height: 350
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
    marginTop: 120,
    position: 'relative',
    borderRadius: 10,
    shadowColor: '#30C1DD',
    shadowRadius: 10,
    shadowOpacity: 0.6,
    elevation: 6,
},
});

const mapStateToProps = ({ LoginUser_Reducer }) => {
  const { token,role } = LoginUser_Reducer;
  return { token,role };
}

export default connect(mapStateToProps)(AdvisorEditAllDate);
