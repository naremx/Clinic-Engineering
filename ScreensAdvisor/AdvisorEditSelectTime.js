import React from 'react';
import { StyleSheet,View,Text,TouchableOpacity,Image } from 'react-native'
import { LinearGradient, Constants } from 'expo'
import { connect } from 'react-redux'
import CheckboxGroup from 'react-native-checkbox-group'
import { Actions } from 'react-native-router-flux'

class AdvisorEditSelectTime extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
        selectedDate : '' ,
        selectedDateResult: [] ,
        selectedValue : [],
    };
  }

  componentDidMount() {
    var url = 'http://10.66.13.208:8000/advisor/Adshowavailable/' ;

    fetch(url, {
    method: 'POST', 
    body: JSON.stringify(this.props.token),
    headers:{
        'Content-Type': 'application/json' ,
        Authorization : `Token ${this.props.token}`,
    }
    }).then(res => res.json())
    .then((responseData) => {
        console.log('--CHECK--',responseData)   
        this.setState({
            selectedDate: responseData
        });    
 
        const resultDate = this.state.selectedDate.reduce((arr,item) =>{
            if( item.free_date == this.props.SelectDate.date){
              arr.value.push(item.id)
              arr.label.push(item.start_time)
            }
            return arr
        }, { label: [] , value: [] }  )

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
DeleteDate(){
  let collection={}
  collection.free_date=this.props.SelectDate.date,
  collection.time=this.state.selectedTime,

console.log('--SENT--',collection)
Actions.AdvisorSelectMode()

var url = 'http://10.66.13.208:8000/advisor/deleteavailable/' ;

fetch(url, {
method: 'POST', 
body: JSON.stringify(collection),
headers:{
    'Content-Type': 'application/json' ,
    Authorization : `Token ${this.props.token}`
}
})

}

  render(){
    console.log('--selectedValue--',this.state.selectedValue)
    return(
      <LinearGradient colors ={['#87daf3','#a69beb']} style={{ paddingTop: Constants.statusBarHeight }}>
        <View style={Styles.Container}>
            <View style={Styles.ContainerContacts}>
              <Text style={{ 
                              marginLeft : 10 , 
                              color : '#3e48a3' , 
                              fontSize: 30 , 
                              fontWeight: 'bold' , 
                              marginTop: 20 }}>Date : {this.props.SelectDate.date}</Text>
              <Text style={{ 
                              marginLeft : 10 , 
                              color : '#a69beb' , 
                              fontSize: 20 , 
                              fontWeight: 'bold' , 
                              marginTop: 5 }}>เลือกเวลาที่ต้องการลบ</Text>
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
                    <TouchableOpacity onPress={() => this.DeleteDate()}>
                        <Image style={Styles.drawerImage} source={require('../Image/delete-time.png')} />
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
  drawerImage: {
    marginTop: 20
    },
});

const mapStateToProps = ({ Advisor_Date_Reducer , LoginUser_Reducer }) => {
  const { SelectDate } = Advisor_Date_Reducer;
  const { token,role } = LoginUser_Reducer;
  return { SelectDate,token,role };
}

export default connect(mapStateToProps)(AdvisorEditSelectTime);