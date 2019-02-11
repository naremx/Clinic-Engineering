import React from 'react';
import { StyleSheet, View, Text,TouchableOpacity,TextInput } from 'react-native';
import { LinearGradient, Constants } from 'expo';
import { CheckBox } from 'react-native-elements'


export default class AddQ extends React.Component{
constructor(props) {
    super(props);
    this.state = {};
    this.onDayPress = this.onDayPress.bind(this);
    }
onDayPress(day) {
    this.setState({
        selected: day.dateString
    });
    this.props.navigation.navigate('Slot', { bookingDate : day })
    }
    _onPressBack(){
    const {goBack} = this.props.navigation
        goBack()
    }
    render(){
      return(
        <LinearGradient colors ={['#87daf3','#a69beb']} style={{ paddingTop: Constants.statusBarHeight }}>
        <View style={Styles.Container}>
            <View style={Styles.ContainerContacts}>
                <View style={{ marginLeft : 30 }}>
                    <Text style={{  marginLeft : 10 , color : '#3e48a3' , fontSize: 25 , fontWeight: 'bold' , marginTop: 20 }} > 10 July 2018</Text>
                    <Text style={{  marginLeft : 10 , color : '#3e48a3' , fontSize: 20 , fontWeight: 'bold' , marginTop: 30 }} >หัวเรื่อง</Text>
                    <TextInput style={Styles.inputBox}/>
                    <Text style={{  marginLeft : 10 , color : '#3e48a3' , fontSize: 20 , fontWeight: 'bold' , marginTop: 30 }} >เวลานัด</Text>
                        <CheckBox title='09.00 - 10.00 น.' checked={this.state.checked}/>
                        <CheckBox title='10.00 - 11.00 น.' checked={this.state.checked}/>
                    <Text style={{  marginLeft : 10 , color : '#3e48a3' , fontSize: 20 , fontWeight: 'bold' , marginTop: 30 }} >ประเภทการปรึกษา</Text>
                    <View style={Styles.FlexContainer}>
                        <CheckBox title='ทั่วไป.' checked={this.state.checked}/>
                        <CheckBox title='เฉพาะทาง' checked={this.state.checked}/>
                    </View>
                    <Text style={{  marginLeft : 10 , color : '#3e48a3' , fontSize: 20 , fontWeight: 'bold' , marginTop: 30 }} >รายละเอียด</Text>
                </View>
                <View style={{ alignItems: 'center' }}>
                    <LinearGradient colors={['#87daf3', '#a69beb']} start={{x: 0.0, y: 1.0}} end={{x: 1.0, y: 1.0}} style={Styles.Button}>
                            <TouchableOpacity >
                                <Text style={{color : '#fff' , fontSize: 20 , fontWeight: 'bold' }}>ตกลง</Text>
                            </TouchableOpacity>
                    </LinearGradient>
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
    Column:{
        flexDirection: "column"
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
        marginLeft: 10
    },
    Button:{
        height: 50, 
        alignItems: 'center', 
        justifyContent: 'center', 
        width: 150 , 
        borderRadius: 20 , 
        marginTop: 20 , 
        shadowColor: '#30C1DD',
        shadowRadius: 10,
        shadowOpacity: 0.6,
        elevation: 6,
    },
    inputBox:{
        width: 220,
        height: 40,
        backgroundColor: '#fff',
        borderRadius: 15,
        borderColor:'#95a3e6',
        borderWidth: 1,
        marginTop: 10,
        paddingHorizontal: 16,
        fontSize: 15,
    },
    FlexContainer:{
        flex:1 ,
        flexDirection: 'row'
    },
});