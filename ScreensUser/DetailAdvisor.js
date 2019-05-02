import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import { LinearGradient, Constants } from 'expo'
import { Ionicons } from 'react-native-vector-icons'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'
import call from 'react-native-phone-call';
import sentemail from 'react-native-email'

class DetailAdvisor extends React.Component{
constructor(props) {
    super(props);
    this.state = {
        ResultData : []
    };
}
    componentDidMount() {
        let collection={}
        collection.user_type=this.props.data.user_type,
        collection.id=this.props.val.id,
        console.log(collection);
        var url = 'http://10.16.2.185:8000/Showdetail/Adshowdetail/' ;
      
        fetch(url, {
        method: 'POST', 
        body: JSON.stringify(collection),
        headers:{
            'Content-Type': 'application/json' ,
            Authorization : `Token ${this.props.token}`,
        }
        }).then(res => res.json())
        .then((responseData) => {
            this.setState({
              DataSource: responseData
            }); 
            console.log('OK22222' ,this.state.DataSource )

            const resultData = this.state.DataSource.reduce((arr,item) =>{
                if( item.expertise){
                    arr.push(item.expertise);
                }
                return arr
                  }, [])
                  console.log('--Result9999--', resultData)

            this.setState({
                ResultData : resultData
            }); 
          })
        .then(response => console.log('Success:', JSON.stringify(response)))
        .catch(error => console.error('Error:', error));
      }

    SentDateTime(chosenDate,chosenTime){
        console.log(chosenDate,chosenTime)
        this.props.DatePickerAction(chosenDate)
        Actions.AddQueue();
    }
    callphone = (telephone) => {
        const args = {
          number: telephone
        };
    
        call(args).catch(console.error);
    }
    handleEmail = (email) => {
        console.log(email)
        const to = email
        sentemail(to).catch(console.error);
    }
    gotoCalendar(){
        Actions.CalendarUser();
    }

    renderText() {
        if (this.state.ResultData.length > 0) {
            return this.state.ResultData.map((val, index) => 
            <View key={index}>
                <Text style={{ color : '#777' }}> - {val}</Text>
            </View>
            );
        }
      }
    render(){
      return(
        <LinearGradient colors ={['#87daf3','#a69beb']} style={{ paddingTop: Constants.statusBarHeight }}>
            <View style={Styles.Container}>
                <View style={Styles.ContainerContacts}>
                    <View style={{ flexDirection: 'row' }}>
                        <Image style={Styles.drawerImage} source={require('../Image/user.png')} />
                        <View style={{ flexDirection: 'column' }}>
                            <Text style={{ 
                                marginLeft : 10 ,
                                color : '#3e48a3' ,
                                fontSize: 15 ,
                                fontWeight: 'bold' ,
                                marginTop: 20 }} 
                                >{this.props.val.first_name} {this.props.val.last_name}</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <Ionicons name="ios-pin" size={15} style={{ color:'#777' , marginLeft: 22}} />
                                <Text style={{ marginLeft : 10 , color : '#c0c0c0', width: 200 }}>{this.props.val.department}</Text>
                            </View>
                            <View style={{flexDirection: "row" , marginLeft: 10 }}>
                                <LinearGradient colors={['#87daf3', '#a69beb']} start={{x: 0.0, y: 1.0}} end={{x: 1.0, y: 1.0}} style={Styles.Button}>
                                    <Ionicons name="ios-call" size={30} style={{ 
                                        color:'#fff', 
                                        marginTop: 12 , 
                                        marginLeft: 20}} onPress={() => this.callphone(this.props.val.telephone)}/>
                                </LinearGradient>
                                <LinearGradient colors={['#87daf3', '#a69beb']} start={{x: 0.0, y: 1.0}} end={{x: 1.0, y: 1.0}} style={Styles.Button}>
                                    <Ionicons name="ios-mail" size={30} style={{ 
                                        color:'#fff', 
                                        marginTop: 12 , 
                                        marginLeft: 18}} onPress={() => this.handleEmail(this.props.val.email)}/>
                                </LinearGradient>
                            </View>
                        </View>
                    </View>
                    <View style={{ marginLeft : 20 }}>
                        <Text style={{ color : '#3e48a3' , fontSize: 15 , fontWeight: 'bold' }}>วิทยานิพนธ์</Text>
                        <ScrollView style={{ height : 150 }}>
                            { this.renderText() }
                        </ScrollView> 
                    </View>
                    <Image style={{  width:370 , height:194 , borderRadius: 15 }} source={{ uri : "https://www.img.in.th/images/a96c9c44823dd503e7bf0a5cd222a517.png" }} />
                    <View style={{alignItems:'center'}}>
                        <TouchableOpacity onPress={() => this.gotoCalendar()}>
                            <Text style={Styles.ButtonChosen}>เลือกวันนัดคิว</Text>
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
        height: 90,
        width: 90,
        borderRadius: 100,
        marginLeft: 20,
        marginTop: 15,
    },
    Button:{
        width: 60,
        height: 50,
        backgroundColor: '#000',
        margin: 15,
        borderRadius: 15,
        shadowColor: '#30C1DD',
        shadowRadius: 10,
        shadowOpacity: 0.6,
        elevation: 6,
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
        marginTop: 10,
        position: 'relative',
        borderRadius: 10,
        shadowColor: '#30C1DD',
        shadowRadius: 10,
        shadowOpacity: 0.6,
        elevation: 6,
    },
});

const mapStateToProps = ({ Data_Advisor_Reducer,LoginUser_Reducer,LoginUser_Data_Reducer }) => {
    const { val } = Data_Advisor_Reducer;
    const { token } = LoginUser_Reducer;
    const { data } = LoginUser_Data_Reducer;
    return { val,token,data };
  }

export default connect(mapStateToProps)(DetailAdvisor);
