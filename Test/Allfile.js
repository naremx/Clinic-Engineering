import React from 'react';
import { StyleSheet,View,Text,TextInput } from 'react-native';
import { LinearGradient,Constants } from 'expo';
import DatePicker from 'react-native-datepicker'

import ModalCardCancel from '../ModalScreen/ModalCardCancel.js';
import ModalCardConfirm from '../ModalScreen/ModalCardConfirm.js';

export default class PhoneBook extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      dataSource: [],
      start_date: "2019-04-12",
      end_date: "2019-05-01"
    };
  }

   render(){  
    console.log(this.state.date)
    return(
        <LinearGradient colors ={['#87daf3','#a69beb']} style={{ paddingTop: Constants.statusBarHeight }}>
            <View style={Styles.Container}>
            {/* <ModalCardCancel/>
            <ModalCardConfirm/> */}

              {/* <View style={Styles.ContainerContacts}> 
                <View style={{alignItems:'center'}}>
                  <View style={{ flexDirection: 'row' }}>
                  <Text style = {{ color: '#000', 
                              fontSize: 20,
                              textAlign: 'center',
                              marginTop: 10,
                              fontWeight: 'bold'
                              }}>การ์ดลิส</Text>
                  </View>
                  <LinearGradient colors={['#87daf3', '#a69beb']} start={{x: 0.0, y: 1.0}} end={{x: 1.0, y: 1.0}} style={Styles.ButtonDescription}>
                    <Text style = {{ color: '#fff', 
                              fontSize: 20,
                              textAlign: 'center',
                              marginTop: 10,
                              fontWeight: 'bold'
                              }}>ดูรายละเอียด</Text>
                    </LinearGradient>
                </View>
              </View>  */}

              {/* <View style={Styles.ContainerContactsCard}> 
                <View style={{alignItems:'center'}}>
                  <View style={{ flexDirection: 'row' }}>
                  <Text style = {{ color: '#000', 
                              fontSize: 20,
                              textAlign: 'center',
                              marginTop: 10,
                              fontWeight: 'bold'
                              }}>การ์ดลิส status เพิ่มงานได้</Text>
                  </View>
                  <LinearGradient colors={['#30f256', '#00bc25']} start={{x: 0.0, y: 1.0}} end={{x: 1.0, y: 1.0}} style={Styles.ButtonDescription}>
                    <Text style = {{ color: '#fff', 
                              fontSize: 20,
                              textAlign: 'center',
                              marginTop: 10,
                              fontWeight: 'bold'
                              }}>เพิ่มงาน</Text>
                    </LinearGradient>
                </View>
              </View> */}
            

        
            <View style={{alignItems:'center'}}>
            <View style={Styles.ContainerContacts}>
                <View style={{ marginLeft : 30 , marginTop : 50 }}>
                    <Text style={{color : '#95a3e6' , fontSize: 20 , fontWeight: 'bold', margin : 5 }} >ชื่อ</Text>
                    <Text style={{color : '#495090' , fontSize: 20 , fontWeight: 'bold', margin : 5 }}> ธีรวัตน์ นามสุกล</Text>
                    <Text style={{color : '#95a3e6' , fontSize: 20 , fontWeight: 'bold', margin : 5 }} >หัวเรื่อง</Text>
                    <TextInput style={Styles.inputBoxAss} onChangeText={(text) => this.updateValue(text, 'Topic')}/>
                    <Text style={{color : '#95a3e6' , fontSize: 20 , fontWeight: 'bold', margin : 5 }} >รายละเอียดงาน</Text>
                    <TextInput style={Styles.inputBoxAss} onChangeText={(text) => this.updateValue(text, 'description')}/>
                    <Text style={{color : '#95a3e6' , fontSize: 20 , fontWeight: 'bold', margin : 5 }} >วันที่รับงาน</Text>
                    <DatePicker
                      style={{width: 200}}
                      date={this.state.start_date}
                      mode="date"
                      placeholder="select date"
                      format="YYYY-MM-DD"
                      minDate="2019-01-01"
                      maxDate="2020-01-01"
                      confirmBtnText="Confirm"
                      cancelBtnText="Cancel"
                      customStyles={{
                        dateIcon: {
                          position: 'absolute',
                          left: 0,
                          top: 4,
                          marginLeft: 0
                        },
                        dateInput: {
                          marginLeft: 36,
                          width: 320,
                          height: 40,
                          backgroundColor: '#fff',
                          borderRadius: 15,
                          borderColor:'#95a3e6',
                          borderWidth: 1,
                          paddingHorizontal: 16,
                          fontSize: 15,
                        }
                        // ... You can check the source to find the other keys.
                      }}
                      onDateChange={(date) => {this.setState({start_date: date})}}
                    />
                    <Text style={{color : '#95a3e6' , fontSize: 20 , fontWeight: 'bold', margin : 5 }} >วันที่ส่งงาน</Text>
                    <DatePicker
                      style={{width: 200}}
                      date={this.state.end_date}
                      mode="date"
                      placeholder="select date"
                      format="YYYY-MM-DD"
                      minDate="2019-01-01"
                      maxDate="2020-01-01"
                      confirmBtnText="Confirm"
                      cancelBtnText="Cancel"
                      customStyles={{
                        dateIcon: {
                          position: 'absolute',
                          left: 0,
                          top: 4,
                          marginLeft: 0
                        },
                        dateInput: {
                          marginLeft: 36,
                          width: 320,
                          height: 40,
                          backgroundColor: '#fff',
                          borderRadius: 15,
                          borderColor:'#95a3e6',
                          borderWidth: 1,
                          paddingHorizontal: 16,
                          fontSize: 15,
                        }
                        // ... You can check the source to find the other keys.
                      }}
                      onDateChange={(date) => {this.setState({end: date})}}
                    />
                </View>
                <View style={{alignItems:'center'}}>
                    <LinearGradient colors={['#87daf3', '#a69beb']} start={{x: 0.0, y: 1.0}} end={{x: 1.0, y: 1.0}} style={Styles.ButtonAddAss}>
                    <Text style = {{ color: '#fff', 
                              fontSize: 20,
                              textAlign: 'center',
                              marginTop: 10,
                              fontWeight: 'bold'
                              }}>เพิ่มงาน</Text>
                    </LinearGradient>
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
    calendar: {
      borderTopWidth: 1,
      paddingTop: 5,
      borderBottomWidth: 1,
      borderColor: '#eee',
      height: 350
    },
    ButtonDescription: {
      width: 350,
      height: 50,
      backgroundColor: '#000',
      marginTop: 20,
      borderRadius: 10,

    },
    ButtonAddAss: {
      width: 200,
      height: 50,
      backgroundColor: '#000',
      marginTop: 50,
      borderRadius: 20,
      shadowColor: '#30C1DD',
      shadowRadius: 10,
      shadowOpacity: 0.6,
      elevation: 6,
    },
    Button:{
      width: 150,
      height: 50,
      backgroundColor: '#000',
      marginLeft: 15,
      marginTop: 20,
      borderRadius: 20,
      shadowColor: '#30C1DD',
      shadowRadius: 10,
      shadowOpacity: 0.6,
      elevation: 6,
  },
    ContainerContactsCard: {
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
    inputBoxAss:{
      width: 320,
      height: 40,
      backgroundColor: '#fff',
      borderRadius: 15,
      borderColor:'#95a3e6',
      borderWidth: 1,
      paddingHorizontal: 16,
      fontSize: 15,
  },
});