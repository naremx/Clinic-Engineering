import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { LinearGradient, Constants } from 'expo';
import { Ionicons } from 'react-native-vector-icons'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'
import { AdSelectTimeQueueAction } from '../Actions/AdSelectTimeQueueAction.js'

class Queue extends React.Component{
  constructor(props){
    super(props);
    this.state = {
        isLoading: false,
        selectedDate: '',
    }
}    
  componentDidMount() {
    var url = 'http://10.66.13.208:8000/history/Adshowhistory/' ;

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
        console.log('OK' ,responseData )
      })

    .then(response => console.log('Success:', JSON.stringify(response)))
    .catch(error => console.error('Error:', error));
}
CollectData(val){
    let AdDateTimeDetail={}
    AdDateTimeDetail = val

    this.props.AdSelectTimeQueueAction(AdDateTimeDetail)
    Actions.AdvisorDetailAddQueue()
}
renderText() {
  if (this.state.selectedDate.length > 0) {
      return this.state.selectedDate.map((val, index) => 
      <View key={index} style={Styles.ContainerContacts}>
              <View style={{ flexDirection: 'row' }}>
                  <Image style={Styles.drawerImage} source={require('../Image/user.png')} />
                  <View style={Styles.Column}>
                      <Text style={{ 
                          marginLeft : 10 ,
                          color : '#3e48a3' ,
                          fontSize: 15 ,
                          fontWeight: 'bold' ,
                          marginTop: 20 }} >{val.user}</Text>
                      <Text style={{ marginLeft : 10 , color : '#3e48a3' }}>Topic : {val.topic}</Text>
                      <Text style={{ marginLeft : 10 , color : '#777' }}>Date : {val.date_time}</Text>
                      <View style={{ flexDirection: 'row' }}>
                          <Ionicons name="ios-notifications" size={15} style={{ color:'#48cedb' , marginLeft: 22}} />
                          <Text style={{ marginLeft : 10 , color : '#48cedb' }}>Status : {val.status}</Text>
                      </View>
                  </View>
              </View>
            <TouchableOpacity onPress={() => this.CollectData(val)}>
                <View style={{alignItems:'center'}}>
                <LinearGradient colors={['#87daf3', '#a69beb']} start={{x: 0.0, y: 1.0}} end={{x: 1.0, y: 1.0}} style={Styles.ButtonDescription}>
                    <Text style = {{ color: '#fff', 
                            fontSize: 20,
                            textAlign: 'center',
                            marginTop: 10,
                            fontWeight: 'bold'
                            }}>ดูรายละเอียด</Text>
                </LinearGradient>
                </View>
            </TouchableOpacity>
      </View>
      );
  }
}
  render(){
    return(
      <LinearGradient colors ={['#87daf3','#a69beb']} style={{ paddingTop: Constants.statusBarHeight }}>
        <View style={Styles.Container}>
        <ScrollView>
            <View style={{alignItems:'center'}}>
                { this.renderText() }
            </View> 
        </ScrollView>
        </View>
    </LinearGradient>
    );
  }
}

const Styles = StyleSheet.create({
  Container: {
      height: '100%',
  },
  ContainerContacts: {
      width: 370,
      height: 180,
      backgroundColor: 'white',
      borderRadius: 18,
      shadowColor: '#30C1DD',
      shadowRadius: 10,
      shadowOpacity: 0.6,
      elevation: 6,
      marginTop: 20
  },
  drawerImage: {
      height: 90,
      width: 90,
      borderRadius: 100,
      marginLeft: 20,
      marginTop: 15,
  },
  ButtonDescription: {
    width: 350,
    height: 50,
    backgroundColor: '#000',
    marginTop: 10,
    borderRadius: 10,
  },
});

const mapDispatchToprops = dispatch => ({
    AdSelectTimeQueueAction: (AdDateTimeDetail) => dispatch(AdSelectTimeQueueAction(AdDateTimeDetail))
})

const mapStateToProps = ({ LoginUser_Reducer }) => {
  const { token,role } = LoginUser_Reducer;
      return { token,role };
}

export default connect(mapStateToProps,mapDispatchToprops)(Queue);


