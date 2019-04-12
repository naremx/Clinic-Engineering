import React from 'react';
import { StyleSheet,View,TouchableOpacity,Image } from 'react-native';
import { LinearGradient,Constants } from 'expo';
import { Calendar } from 'react-native-calendars';
import CheckboxGroup from 'react-native-checkbox-group'
import { connect } from 'react-redux'

class AdvisorEditAllDate extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
        selectedDate : '' ,
        selectedDateResult: ['2019-04-03' ,'2019-04-10'],
        markedDates: {}
    };
    this.onDayPress = this.onDayPress.bind(this);
    }
    componentDidMount() {
        var url = 'http://10.66.13.208:8000/advisor/showavailable/' ;

        fetch(url, {
        method: 'POST', 
        body: JSON.stringify(this.props.token),
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
          })

          

        .then(response => console.log('Success:', JSON.stringify(response)))
        .catch(error => console.error('Error:', error));
    }
    onDayPress = day => {
      const markedDates = Object.assign({}, this.state.markedDates)
      const dateString = day.dateString
  
      if (markedDates.hasOwnProperty(dateString)) {
        delete markedDates[dateString]
      } else {
        markedDates[dateString] = {selectedColor: '#a69beb', selected: true}
      }
      this.setState({ markedDates })
      var markedDatesArray = Object.keys(markedDates).map(function(key) {
        return (key);
      });
      this.setState({ markedDatesArray : markedDatesArray })
    }
    SentAllData(){
      let collection={}
      collection.date=this.state.markedDatesArray
      collection.time=this.state.selected

      console.log('--SENT--',collection);
      //Actions.Queue();

      // var url = 'http://192.168.43.212:8000/queue/Queue' ;

      // fetch(url, {
      // method: 'POST', 
      // body: JSON.stringify(collection),
      // headers:{
      //     'Content-Type': 'application/json' ,
      //     Authorization : `Token ${this.props.token}`,
      // }
      // })

    }
   render(){  
    let dates = {};
    this.state.selectedDateResult.forEach((val) => {
        dates[val] = {selected: true};
    });

    const { markedDates, markedDatesLength, today } = this.state
    return(
        <LinearGradient colors ={['#87daf3','#a69beb']} style={{ paddingTop: Constants.statusBarHeight }}>
          <View style={Styles.Container}>
          <View style={{alignItems:'center'}}>
          <View style={Styles.ContainerContacts}>
            <View style={{ marginTop : 10}}>
            <Calendar
                onDayPress={this.onDayPress}
                style={Styles.calendar}
                hideExtraDays
                markedDates= {markedDates}
                theme={{
                selectedDayBackgroundColor: '#87daf3',
                todayTextColor: '#a69beb',
                arrowColor: '#a69beb',
                }}
            />
            </View>

            <View style={{ flexDirection : "row" }}>
            <CheckboxGroup
              callback={(selected) => { this.setState({ selected : selected }) }}
              iconColor={"#00a2dd"}
              iconSize={30}
              checkedIcon="ios-checkbox-outline"
              uncheckedIcon="ios-square-outline"
              checkboxes={[
                {
                  label: "09.00-10.00", 
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
                color: '#3e48a3',
                fontSize: 15 
              }}
              rowStyle={{
                flexDirection: 'row'
              }}
              rowDirection={"column"}
            />

            <TouchableOpacity onPress={() => this.SentAllData()}>
              <Image style={{ marginTop: 30 , marginRight : 20 }} source={require('../Image/ok.png')} />
            </TouchableOpacity>

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
    },
    calendar: {
      borderTopWidth: 1,
      paddingTop: 5,
      borderBottomWidth: 1,
      borderColor: '#eee',
      height: 350
    }
});


const mapStateToProps = ({ LoginUser_Reducer }) => {
  const { token } = LoginUser_Reducer;
  return { token};
}

export default connect(mapStateToProps)(AdvisorEditAllDate);
