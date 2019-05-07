import React from 'react';
import { StyleSheet,View,Text,ScrollView,Image,TouchableOpacity,RefreshControl } from 'react-native';
import { LinearGradient,Constants} from 'expo';
import { connect } from 'react-redux'
import { Ionicons } from 'react-native-vector-icons'
import { Actions } from 'react-native-router-flux'
import { UserDetailSubDocAction } from '../Actions/UserDetailSubDocAction.js'

import ModalCardCancelDoc from '../ModalScreen/ModalCardCancelDoc.js';

class DetailAddDoc extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
        Data: '',
        refreshing: false,
    };
  }

  componentDidMount() {
    let collection={}
    collection.id=this.props.DetailDoc.id
    console.log(collection);

    var url = 'http://10.66.13.208:8000/Document/showsubdocument/' ;

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
    let DetailSubDoc={}
    DetailSubDoc = val

    this.props.UserDetailSubDocAction(DetailSubDoc)
    Actions.RealDetailAddSubDoc()
}
renderText() {
    if (this.state.Data.length > 0) {
        return this.state.Data.map((val, index) => 
        <View key={index} style={{alignItems:'center'}}>
        <TouchableOpacity onPress={() => this.CollectData(val)}>
            <View style={Styles.ContainerDoc}>
                <View style={{ flexDirection: 'row' }}>
                <Image style={{  width:64 , height:64 , marginLeft : 10 , marginTop : 8 }} source={{ uri : "https://www.img.live/images/2019/05/02/writing.png" }} />
                <View style={{ flexDirection: 'column' }}>
                <Text style={{ 
                                marginLeft : 10 ,
                                color : '#3e48a3' ,
                                fontSize: 20 ,
                                fontWeight: 'bold' ,
                                marginTop: 15 }} >{val.topic}</Text>
                { this.renderStatus(val) }
                </View>
                </View>
            </View>
        </TouchableOpacity>
        </View>
        );
    }
}
renderStatus(val){
    console.log('OK' , val)
    if(val.status === 'completed'){
        return <Text style={{ marginLeft : 15 , color : '#45e353' , fontWeight: 'bold', fontSize: 15 }}>Status : เสร็จเรียบร้อย</Text> 
    }
    else{
        return <Text style={{ marginLeft : 15 , color : '#8d8d8d' , fontWeight: 'bold', fontSize: 15 }}>Status : รอการดำเนินการ</Text> 
    }
  }
  _onRefresh(){
    this.setState({
        refreshing: true
    }); 
    let collection={}
    collection.id=this.props.DetailDoc.id
    console.log(collection);

    var url = 'http://10.66.13.208:8000/Document/showsubdocument/' ;

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
            Data: responseData,
            refreshing: false
        }); 
        console.log('OK' ,responseData )
      })

    .then(response => console.log('Success:', JSON.stringify(response)))
    .catch(error => console.error('Error:', error));
  }
   render(){  
    return(
        <LinearGradient colors ={['#87daf3','#a69beb']} style={{ paddingTop: Constants.statusBarHeight }}>
            <View style={{ height: '100%' }}>
                <View style={{ alignItems:'center' }}>
                    <View style={Styles.ContainerContacts}>
                    <View style={{ flexDirection: 'row' }}>
                        <Image style={{  width:64 , height:64 , marginTop: 30 , marginLeft: 20 }} source={{ uri : "https://www.img.live/images/2019/04/24/edit.png" }} />
                        <View style={{ flexDirection: 'column' }}>
                            <Text style={{ 
                                marginLeft : 10 , 
                                color : '#3e48a3' , 
                                fontSize: 20 , 
                                fontWeight: 'bold' , 
                                marginTop: 20 }} >{this.props.DetailDoc.name}</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <Ionicons name="ios-alarm" size={20} style={{ color:'#777' , marginLeft: 22}} />
                                <Text style={{ marginLeft : 15 , color : '#3e48a3' , fontWeight: 'bold' }}>Start Time :</Text>
                                <Text style={{ marginLeft : 15 , color : '#777' }}>{this.props.DetailDoc.start_date}</Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Ionicons name="ios-alarm" size={20} style={{ color:'#777' , marginLeft: 22}} />
                                <Text style={{ marginLeft : 15 , color : '#3e48a3' , fontWeight: 'bold' }}>End Time :</Text>
                                <Text style={{ marginLeft : 15 , color : '#777' }}>  {this.props.DetailDoc.end_date}</Text>
                            </View>
                        </View>
                    </View>
                    <Text style={{ 
                                marginLeft : 10 , 
                                color : '#3e48a3' , 
                                fontSize: 15 , 
                                fontWeight: 'bold' , 
                                marginTop: 20 }} >รายละเอียดเอกสาร</Text>
                    <Text style={{ marginLeft : 15 , color : '#777' }}>{this.props.DetailDoc.description}</Text>
                    <View style={{ flexDirection: 'row' }}>
                    <Text style={{ 
                                marginLeft : 10 , 
                                color : '#3e48a3' , 
                                fontSize: 15 , 
                                fontWeight: 'bold' , 
                                marginTop: 20 }} >หัวข้อเอกสารย่อย</Text>
                        <View style={Styles.ButtonConfirm}>
                        <TouchableOpacity onPress={() => Actions.DetailAddSubDoc()}>
                        <Ionicons name="ios-add" size={25} style={{ color: '#fff', paddingLeft : 6 }} />
                        </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{height : 250}}>
                        <ScrollView style={{ marginTop : 20 , height : 280 }}
                            refreshControl={
                            <RefreshControl
                                refreshing={this.state.refreshing}
                                onRefresh={() =>this._onRefresh()}
                            />
                            }
                        >
                        <View style={{alignItems:'center'}}>
                            { this.renderText() }
                        </View>
                        </ScrollView>
                    </View>




                    <ModalCardCancelDoc/>
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
ContainerDoc: {
    width: 300,
    height: 80,
    marginTop: 25,
    borderColor: '#3e48a3' ,
    borderWidth: 1 ,
    backgroundColor: '#fff',
    borderRadius: 18
},
drawerImage: {
    marginLeft: 20,
    marginTop: 25,
},
ButtonConfirm:{
    height: 25, 
    width: 25 , 
    borderRadius: 5 , 
    marginTop: 20 ,
    marginLeft: 10,
    backgroundColor: '#3e48a3', 
    shadowColor: '#30C1DD',
    shadowRadius: 10,
    shadowOpacity: 0.6,
    elevation: 6,
},
});

const mapDispatchToprops = dispatch => ({
    UserDetailSubDocAction: (DetailSubDoc) => dispatch(UserDetailSubDocAction(DetailSubDoc))
})


const mapStateToProps = ({ LoginUser_Reducer , User_Detail_Doc }) => {
    const { token,role } = LoginUser_Reducer;
    const { DetailDoc } = User_Detail_Doc;
        return { token,role,DetailDoc };
  }

export default connect(mapStateToProps,mapDispatchToprops)(DetailAddDoc);

