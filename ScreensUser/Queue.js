import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { LinearGradient, Constants } from 'expo';
import { Ionicons } from 'react-native-vector-icons'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'
import { UserSelectTimeQueueAction } from '../Actions/UserSelectTimeQueueAction.js'

class Queue extends React.Component{

        constructor(props){
            super(props);
            this.state = {
                isLoading: false,
                selectedDate: '',
            }
        }    
    componentDidMount() {
        var url = 'http://10.66.13.208:8000/history/Usshowhistory/' ;
    
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
        let UserDateTimeDetail={}
        UserDateTimeDetail = val

        this.props.UserSelectTimeQueueAction(UserDateTimeDetail)
        Actions.DetailAddQueue()
    }
    renderText() {
        if (this.state.selectedDate.length > 0) {
            return this.state.selectedDate.map((val, index) => 
            <View key={index} style={Styles.ContainerContacts}>
                <TouchableOpacity onPress={() => this.CollectData(val)}>
                    <View style={{ flexDirection: 'row' }}>
                        <Image style={Styles.drawerImage} source={require('../Image/user.png')} />
                        <View style={Styles.Column}>
                            <Text style={{ 
                                marginLeft : 10 ,
                                color : '#3e48a3' ,
                                fontSize: 15 ,
                                fontWeight: 'bold' ,
                                marginTop: 20 }} >{val.name}</Text>
                            <Text style={{ marginLeft : 10 , color : '#3e48a3' }}>Topic : {val.topic}</Text>
                            <Text style={{ marginLeft : 10 , color : '#777' }}>Date : {val.date_time}</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <Ionicons name="ios-notifications" size={15} style={{ color:'#48cedb' , marginLeft: 22}} />
                                <Text style={{ marginLeft : 10 , color : '#48cedb' }}>Status : {val.status}</Text>
                            </View>
                        </View>
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
                    <View style={{alignItems:'center'}}>
                        { this.renderText() }
                    </View> 
                </View>
            </LinearGradient>
        )
    }
} 

const Styles = StyleSheet.create({
    Container: {
        height: '100%',
    },
    ContainerContacts: {
        width: 370,
        height: 120,
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
});

const mapDispatchToprops = dispatch => ({
    UserSelectTimeQueueAction: (UserDateTimeDetail) => dispatch(UserSelectTimeQueueAction(UserDateTimeDetail))
})


const mapStateToProps = ({ Add_Queue_Reducer , Data_Datetime_Reducer , LoginUser_Reducer }) => {
    const { token,role } = LoginUser_Reducer;
    const { val } = Add_Queue_Reducer;
    const {chosenDate} = Data_Datetime_Reducer;
        return { chosenDate,val,token,role };
  }

export default connect(mapStateToProps,mapDispatchToprops)(Queue);