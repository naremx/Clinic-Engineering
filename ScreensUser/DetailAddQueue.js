import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { LinearGradient, Constants } from 'expo';
import { connect } from 'react-redux'
import { Ionicons } from 'react-native-vector-icons'

class DetailAddQueue extends React.Component{
    render(){
        return(
            <LinearGradient colors ={['#87daf3','#a69beb']} style={{ paddingTop: Constants.statusBarHeight }}>
                <View style={{ height: '100%' }}>
                    <View style={{ alignItems:'center' }}>
                        <View style={Styles.ContainerContacts}>
                            <View style={{ flexDirection: 'row' }}>
                                <Image style={Styles.drawerImage} source={{ uri: this.props.val.image }}  />
                                <View style={{ flexDirection: 'column' }}>
                                    <Text style={{ 
                                        marginLeft : 10 , 
                                        color : '#3e48a3' , 
                                        fontSize: 15 , 
                                        fontWeight: 'bold' , 
                                        marginTop: 20 }} >{this.props.val.book_title}</Text>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Ionicons name="ios-pin" size={15} style={{ color:'#777' , marginLeft: 22}} />
                                        <Text style={{ marginLeft : 10 , color : '#c0c0c0' }}>{this.props.val.author}</Text>
                                    </View>
                                    <View style={{flexDirection: "row" , marginLeft: 10 }}>
                                        <LinearGradient colors={['#87daf3', '#a69beb']} start={{x: 0.0, y: 1.0}} end={{x: 1.0, y: 1.0}} style={Styles.Button}>
                                            <Ionicons name="ios-call" size={30} style={{ color:'#fff', marginTop: 12 , marginLeft: 20}} />
                                        </LinearGradient>
                                        <LinearGradient colors={['#87daf3', '#a69beb']} start={{x: 0.0, y: 1.0}} end={{x: 1.0, y: 1.0}} style={Styles.Button}>
                                            <Ionicons name="ios-mail" size={30} style={{ color:'#fff', marginTop: 12 , marginLeft: 18}} />
                                        </LinearGradient>
                                    </View>
                                </View>
                            </View>
                                <View style={{ marginLeft : 20 , marginTop: 20 }}>
                                    <View style={{ flexDirection : 'row' }}>
                                        <Text style={{ color : '#3e48a3' , fontSize: 20 , fontWeight: 'bold' }}>{this.props.chosenDate}</Text> 
                                    </View>
                                    <View style={{ flexDirection : 'row' }}>    
                                        <Text style={{ color : '#3e48a3' , fontSize: 17, fontWeight: 'bold' }}>หัวเรื่อง: </Text>
                                        <Text style={{ color : '#848484' , fontSize: 17 }}>{this.props.collection.topic}</Text>
                                    </View>
                                    <View style={{ flexDirection : 'column' }}>    
                                        <Text style={{ color : '#3e48a3' , fontSize: 17, fontWeight: 'bold' }}>รายละเอียด: </Text> 
                                        <Text style={{ color : '#848484' , fontSize: 17 }}>{this.props.collection.descriptions}</Text> 
                                    </View>
                                    <Text style={{ color : '#3e48a3' , fontSize: 17 , fontWeight: 'bold' }}>ค่าปรึกษา บาท</Text> 
                                    <Text style={{ color : '#3e48a3' , fontSize: 17 , fontWeight: 'bold' }}>สถานะ: รอการยืนยัน </Text> 
                                </View>
                            <View style={{ alignItems: 'center' }}>
                                <LinearGradient colors={['#87daf3', '#a69beb']} start={{x: 0.0, y: 1.0}} end={{x: 1.0, y: 1.0}} style={Styles.ButtonCancel}>
                                        <TouchableOpacity onPress={() => this.SentDateAddQueue()}>
                                            <Text style={{color : '#fff' , fontSize: 20 , fontWeight: 'bold' }}>ยกเลิกการนัด</Text>
                                        </TouchableOpacity>
                                </LinearGradient>
                            </View>
                        </View>
                    </View>
                </View>
            </LinearGradient>
        )
    }
}



const Styles = StyleSheet.create({
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
    ButtonCancel:{
        height: 50, 
        alignItems: 'center', 
        justifyContent: 'center' ,
        width: 150 , 
        borderRadius: 20 , 
        shadowColor: '#30C1DD',
        shadowRadius: 10,
        shadowOpacity: 0.6,
        elevation: 6,
    },
});

const mapStateToProps = ({ Add_Queue_Reducer , Data_Datetime_Reducer , Topic_Queue_Reducer }) => {
    const { val } = Add_Queue_Reducer;
    const { chosenDate } = Data_Datetime_Reducer;
    const { collection } = Topic_Queue_Reducer;
        return { chosenDate,val,collection };
  }

export default connect(mapStateToProps)(DetailAddQueue);
