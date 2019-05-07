import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { LinearGradient, Constants } from 'expo';
import { Ionicons } from 'react-native-vector-icons'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux';
import { DetailReceiveDocAction } from '../Actions/DetailReceiveDocAction.js'


class AdRecieveDoc extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            Data: '',
        }
    }    
    componentDidMount() {
        var url = 'http://35.198.249.38:8000/Document/getdocument/' ;

        let collection={}
        collection.user_type=this.props.data.user_type,
        console.log(this.props.data.user_type)
    
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
                Data: responseData
            }); 
            console.log('OK' ,responseData )
          })
    
        .then(response => console.log('Success:', JSON.stringify(response)))
        .catch(error => console.error('Error:', error));
    }
    CollectData(val){
        let ReceiveDoc={}
        ReceiveDoc = val

        this.props.DetailReceiveDocAction(ReceiveDoc)
        Actions.AdDetailReceiveDoc()
    }
    renderText() {
        if (this.state.Data.length > 0) {
            return this.state.Data.map((val, index) => 
            <View key={index} style={Styles.ContainerContacts}>
                    <View style={{ flexDirection: 'row' }}>
                        <Image style={Styles.drawerImage} source={{ uri : "https://www.img.in.th/images/a185d8d30d7e1eb3d300b0915d195414.png" }} />
                        <View style={Styles.Column}>
                            <Text style={{ 
                                marginLeft : 10 ,
                                color : '#3e48a3' ,
                                fontSize: 15 ,
                                fontWeight: 'bold' ,
                                marginTop: 20 }} >{val.name}</Text>
                            <Text style={{ marginLeft : 10 , color : '#3e48a3',fontWeight: 'bold' }}>Topic : {val.topic}</Text>
                            <View style={{ flexDirection: 'row' }}>
                            <Ionicons name="ios-alarm" size={20} style={{ color:'#3e48a3' , marginLeft: 22}} />
                            <Text style={{ marginLeft : 10 , color : '#777' }}>Start Date : {val.start_date}</Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                            <Ionicons name="ios-alarm" size={20} style={{ color:'#3e48a3' , marginLeft: 22}} />
                            <Text style={{ marginLeft : 10 , color : '#777' }}>End Date : {val.end_date}</Text>
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
            <LinearGradient colors ={['#87daf3','#a69beb']}>
            <View style={Styles.Container}>
            <ScrollView>
                <View style={{alignItems:'center'}}>
                    { this.renderText() }
                </View> 
            </ScrollView>
            </View>
        </LinearGradient>
        )
    }
}

const Styles = StyleSheet.create({
    Container: {
        height: '100%' ,
        alignItems:'center'
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
  Button: {
    width: 360,
    height: 50,
    backgroundColor: '#000',
    marginTop: 10,
    borderRadius: 10,
    shadowColor: '#30C1DD',
    shadowRadius: 10,
    shadowOpacity: 0.6,
    elevation: 6,
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
    DetailReceiveDocAction: (ReceiveDoc) => dispatch(DetailReceiveDocAction(ReceiveDoc))
})

const mapStateToProps = ({ LoginUser_Reducer,Add_Queue_Reducer,LoginUser_Data_Reducer }) => {
    const { token,role } = LoginUser_Reducer;
    const { val } = Add_Queue_Reducer;
    const { data } = LoginUser_Data_Reducer;
        return { token,role,val,data };
  }

export default connect(mapStateToProps,mapDispatchToprops)(AdRecieveDoc);
