import React from 'react';
import { StyleSheet,View,Text,TouchableOpacity,Image } from 'react-native'
import { LinearGradient, Constants } from 'expo'
import { connect } from 'react-redux'
import CheckboxGroup from 'react-native-checkbox-group'
import { Actions } from 'react-native-router-flux'
import { UserSelectTimeAction } from '../Actions/UserSelectTimeAction.js'

class CalendarUserTime extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
        selectedDate : '' ,
        selectedDateResult: [] ,
        selectedValue : [],
    };
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
      console.log('--CHECK--' , responseData)
        this.setState({
            selectedDate: responseData
        });        
        const resultDate = this.state.selectedDate.reduce((arr,item) =>{
            if( item.free_date == this.props.collectionDateTime.date){
              arr.value.push(item.id)
              arr.label.push(item.free_time)
            }
            return arr
        }, { label: [] , value: [] }  )


        console.log(resultDate)

        const resultValueFinal = resultDate.label.reduce((arr,item,index) =>{
          arr.push({
              label: item,
              value: resultDate.value[index]
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
onTimePress = (selected) => {
  this.setState({
          selectedTime: {selected}
      })
}
TopicandDescription(){
  let collectionUserSelectTime={}
  collectionUserSelectTime.free_date = this.props.collectionDateTime.date,
  collectionUserSelectTime = this.state.selectedTime,
  console.log('--Sent--' ,collectionUserSelectTime)

    this.props.UserSelectTimeAction(collectionUserSelectTime)
    Actions.AddQueue()
}

  render(){
    return(
      <LinearGradient colors ={['#87daf3','#a69beb']} style={{ paddingTop: Constants.statusBarHeight }}>
        <View style={Styles.Container}>
            <View style={Styles.ContainerContacts}>
              <Text style={{ 
                              marginLeft : 10 , 
                              color : '#3e48a3' , 
                              fontSize: 30 , 
                              fontWeight: 'bold' , 
                              marginTop: 20 }}>Date : {this.props.collectionDateTime.date}</Text>
              <Text style={{ 
                              marginLeft : 10 , 
                              color : '#a69beb' , 
                              fontSize: 20 , 
                              fontWeight: 'bold' , 
                              marginTop: 5 }}>เลือกเวลาที่ต้องการจอง</Text>
              <CheckboxGroup
              callback={this.onTimePress}
              iconColor={"#00a2dd"}
              iconSize={30}
              checkedIcon="ios-checkbox-outline"
              uncheckedIcon="ios-square-outline"
              checkboxes={this.state.selectedValue}
              labelStyle={{
                  color: '#3e48a3',
                  fontSize: 20
              }}
              rowStyle={{
                  flexDirection: 'row'
              }}
              />
                <View style={{alignItems:'center'}}>
                    <TouchableOpacity onPress={() => this.TopicandDescription()}>
                        <Image source={require('../Image/description.png')} />
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
});

const mapDispatchToprops = dispatch => ({
    UserSelectTimeAction: (collectionUserSelectTime) => dispatch(UserSelectTimeAction(collectionUserSelectTime))
})

const mapStateToProps = ({ Data_Datetime_Reducer , LoginUser_Reducer , Data_Advisor_Reducer }) => {
  const { collectionDateTime } = Data_Datetime_Reducer;
  const { val } = Data_Advisor_Reducer;
  const { token,role } = LoginUser_Reducer;
  return { collectionDateTime,token,role,val };
}

export default connect(mapStateToProps,mapDispatchToprops)(CalendarUserTime);