import React from 'react';
import { StyleSheet, View, Text,ActivityIndicator,Image,ScrollView } from 'react-native';
import { LinearGradient, Constants } from 'expo';
import { Ionicons } from 'react-native-vector-icons'
import { TextInput } from 'react-native-gesture-handler';
import { Actions } from 'react-native-router-flux';



export default class Search extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isLoading: true,
            dataSource: null,
    }
}
    componentDidMount () {
        fetch('http://www.json-generator.com/api/json/get/ccLAsEcOSq?indent=1')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    isLoading: false,
                    dataSource: responseJson.book_array,
                })
            })
        .catch((error) => {
            console.log('error')
        });
    }
    render() {
        if (this.state.isLoading) {
            return(
                <View>
                    <ActivityIndicator/>
                </View>
            )
        } else {
            let List = this.state.dataSource.map((val,key) => {
                return ( 
                    
                        <View key={key} style={Styles.item}>
                            <View style={Styles.ContainerContacts}>
                                <View style={Styles.FlexContainer}>
                                    <Image style={Styles.drawerImage} source={{ uri: val.image }} />
                                    <View style={Styles.Column}>
                                        <Text style={{ fontFamily:'supermarket' , marginLeft : 10 , color : '#3e48a3' , fontSize: 15 , fontWeight: 'bold' , marginTop: 20 }} >{val.book_title}</Text>
                                        <Text style={{ marginLeft : 10 , color : '#777' }}>Computer Engineering</Text>
                                        <View style={Styles.FlexContainer}>
                                            <Ionicons name="ios-pin" size={15} style={{ color:'#777' , marginLeft: 22}} />
                                            <Text style={{ marginLeft : 10 , color : '#c0c0c0' }}>{val.author}</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>   
                )
            });
            return (
                <LinearGradient colors ={['#87daf3','#a69beb']} style={{ paddingTop: Constants.statusBarHeight }}>
                    <View style={Styles.Container}>
                        <View style={{ marginBottom: 10 }}>
                            <LinearGradient colors ={['#fafafa','#ffffff']} style={Styles.InputBoxSearch}>
                            <Ionicons name="ios-search" size={30} color="#a69beb" style={Styles.InputIconSearch} />
                                <TextInput style={Styles.Input} placeholder='ชื่ออาจารย์ / ชื่อภาควิชา / ชื่อวิทยานิพนธ์' placeholderTextColor='#d2d2d2' underlineColorAndroid='transparent' />
                            </LinearGradient>
                        </View>
                        <ScrollView> 
                            <View style={Styles.FlexContainer}>
                                <View style={{flexDirection: 'column'}}>
                                    {List}
                                </View>
                            </View>
                        </ScrollView> 
                    </View>
                </LinearGradient>
            );
        }
    }
}


const Styles = StyleSheet.create({
    Container: {
        height: '100%',
    },
    Header: {
        height: 60 ,
        backgroundColor: '#fff',
        flexDirection: 'row'
    },
    Icon: {
        marginLeft: 10,
        marginTop: 16
    },
    row:{
        flexDirection: "row",
    },
    Column:{
        flexDirection: "column"
    },
    InputIconSearch:{
        position: 'absolute' ,
        top: 5,
        left: 315,
    },
    InputBoxSearch: {
        width: 350,
        height: 40,
        borderRadius: 25,
        justifyContent: 'center',
        paddingHorizontal: 20,
        marginLeft: 20,
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
    ContainerContacts: {
        width: 370,
        height: 120,
        backgroundColor: 'white',
        borderRadius: 18,
        shadowColor: '#30C1DD',
        shadowRadius: 10,
        shadowOpacity: 0.6,
        elevation: 6,
    },
    FlexContainer:{
        flex:1 ,
        flexDirection: 'row'
    },
    item:{
        alignSelf: 'stretch',
        margin: 10,
    },
});