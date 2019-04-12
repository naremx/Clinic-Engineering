import React from 'react';
import { StyleSheet,View,TouchableOpacity,Image } from 'react-native';
import { LinearGradient,Constants } from 'expo';
import { Calendar } from 'react-native-calendars';
import { connect } from 'react-redux'
import { AdvisorCollectionDateAction } from '../Actions';

class AdvisorEditSelectDate extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
        selectedDate : '' ,
        selectedDateResult: ['2019-04-03' , '2019-04-04'],
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
    onDayPress(day) {
      this.setState({
        selected: day.dateString
      });
  
    }
    SentAllData(){
      let AdvisorCollectionDate={}
      AdvisorCollectionDate.date = this.state.selected.selected,
      this.props.AdvisorCollectionDateAction(AdvisorCollectionDate)
      //Actions.Queue();
    }
   render(){  
    let dates = {};
    this.state.selectedDateResult.forEach((val) => {
        dates[val] = {selected: true}
    });

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
                markedDates= {{ [this.state.selected]: { selected: true,selectedColor: '#a69beb' } }} 
                theme={{
                selectedDayBackgroundColor: '#87daf3',
                todayTextColor: '#a69beb',
                arrowColor: '#a69beb',
                }}
            />
            </View>
            <View style={{ alignItems:'center',marginTop : 40 }}>
            <TouchableOpacity onPress={() => this.SentAllData()}>
              <Image style={{ marginTop: 30 , marginRight : 20 }} source={require('../Image/selecttime.png')} />
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


const mapDispatchToprops = dispatch => ({
  AdvisorCollectionDateAction: (AdvisorCollectionDate) => dispatch(AdvisorCollectionDateAction(AdvisorCollectionDate))
})

const mapStateToProps = ({ LoginUser_Reducer }) => {
  const { token } = LoginUser_Reducer;
  return { token};
}

export default connect(mapStateToProps,mapDispatchToprops)(AdvisorEditSelectDate);
