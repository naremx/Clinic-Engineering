import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, TextInput, CheckBox, KeyboardAvoidingView } from 'react-native';
import { LinearGradient, Constants } from 'expo';
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'
import Textarea from 'react-native-textarea';
import { TopicQueueAction } from '../Actions/TopicQueueAction.js'

class AddQueue extends React.Component{
constructor(props) {
    super(props);
    this.state = {
        check: false ,
        topic: '',
        descriptions: ''
        };
    }
    updateValue(text , field){
        if(field == 'topic'){
            this.setState({
                topic : text
            })
        }
        else if(field == 'descriptions'){
            this.setState({
                descriptions : text
            })
        }
    }
    SentDateAddQueue(){
        let collection={}
        collection.topic=this.state.topic
        collection.detail=this.state.descriptions
        collection.type=this.state.check
        collection.free_date=this.props.collectionDateTime.date
        collection.time=this.props.collectionUserSelectTime
        collection.advisor=this.props.val.id

        console.log(collection);
        this.props.TopicQueueAction(collection)
        Actions.replace('Queue')

        var url = 'http://10.66.13.208:8000/queue/addqueue/' ;

        fetch(url, {
        method: 'POST', 
        body: JSON.stringify(collection),
        headers:{
            'Content-Type': 'application/json' ,
            Authorization : `Token ${this.props.token}`,
        }
        })
    }
    CheckBoxChange()
    {
        this.setState({
            
            check:!this.state.check
        })
    }
    render(){
      return(
        <LinearGradient colors ={['#87daf3','#a69beb']} style={{ paddingTop: Constants.statusBarHeight }}>
        <View style={Styles.Container}>
            <View style={Styles.ContainerContacts}>
                <View style={{ alignItems:'flex-start' , marginLeft : 20 }}>
                    <Text style={{ color : '#3e48a3' , fontSize: 25 , fontWeight: 'bold' , marginTop: 10 }} >DATE : {this.props.collectionDateTime.date}</Text>
                    <Text style={{ color : '#777' , fontWeight: 'bold' }} >{this.props.val.book_title}</Text>
                    <Text style={{ color : '#777' }}>Computer Engineering</Text>
                    <Text style={{ color : '#3e48a3' , fontSize: 20 , fontWeight: 'bold' , marginTop: 10 }} >หัวเรื่อง</Text>
                    <TextInput style={Styles.inputBox} onChangeText={(text) => this.updateValue(text, 'topic')}/>
                    <Text style={{ color : '#3e48a3' , fontSize: 20 , fontWeight: 'bold' , marginTop: 10 }} >ประเภทการปรึกษา</Text>
                    <Text style={{ color : '#777' , fontSize: 15 , marginTop: 3 }} >หากต้องการปรึกษาทั่วไปไม่ต้องเลือก</Text>
                    <View style={{ flexDirection: 'row' , marginTop : 10 }}>
                        <CheckBox  value={this.state.check} onChange={() => this.CheckBoxChange()}/>
                        <Text style={{ margin : 6, color : '#3e48a3' }} >เฉพาะทาง</Text>
                    </View>
                    <Text style={{  marginLeft : 10 , color : '#3e48a3' , fontSize: 20 , fontWeight: 'bold' , marginTop: 10 }} >รายละเอียด</Text>
                    <View >
                    <TextInput style={Styles.inputBox} onChangeText={(text) => this.updateValue(text, 'descriptions')}/>
                    </View>
                </View>
                <View style={{ alignItems: 'center' }}>
                    <LinearGradient colors={['#87daf3', '#a69beb']} start={{x: 0.0, y: 1.0}} end={{x: 1.0, y: 1.0}} style={Styles.Button}>
                            <TouchableOpacity onPress={() => this.SentDateAddQueue()}>
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
        alignItems:'center'
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
        width: 300,
        height: 40,
        backgroundColor: '#fff',
        borderRadius: 15,
        borderColor:'#95a3e6',
        borderWidth: 1,
        margin: 10,
        paddingHorizontal: 16,
        fontSize: 15,
    },
    FlexContainer:{
        flex:1 ,
        flexDirection: 'row'
    },
    textareaContainer: {
        height: 150,
        padding: 5,
        backgroundColor: '#fff',
        borderRadius: 15,
        borderColor:'#95a3e6',
        borderWidth: 1,
        marginTop: 10,
        width: 300,
      },
      textarea: {
        textAlignVertical: 'top', 
        height: 150,
        fontSize: 14,
        color: '#333',
      },
});


const mapDispatchToprops = dispatch => ({
    TopicQueueAction: (collection) => dispatch(TopicQueueAction(collection))
})

const mapStateToProps = ({ Data_Advisor_Reducer , Data_Datetime_Reducer , LoginUser_Reducer , User_Select_time_reducer }) => {
    const { val } = Data_Advisor_Reducer;
    const { collectionDateTime } = Data_Datetime_Reducer;
    const { token } = LoginUser_Reducer;
    const { collectionUserSelectTime } = User_Select_time_reducer;
        return { collectionDateTime,collectionUserSelectTime,val,token };
  }

export default connect(mapStateToProps,mapDispatchToprops)(AddQueue);