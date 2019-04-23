import React from 'react';
import { StyleSheet,View,Text,ScrollView,Image,TouchableOpacity } from 'react-native';
import { LinearGradient,Constants} from 'expo';
import { connect } from 'react-redux'
import { Ionicons } from 'react-native-vector-icons'
import { Actions } from 'react-native-router-flux'
import { UserDetailSubDocAction } from '../Actions/UserDetailSubDocAction.js'

class DetailAddDoc extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
        Data: ''
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
                <Image style={{ marginLeft : 10 , marginTop : 8 }} source={require('../Image/writing.png')} />
                <View style={{ flexDirection: 'column' }}>
                <Text style={{ 
                                marginLeft : 10 ,
                                color : '#3e48a3' ,
                                fontSize: 20 ,
                                fontWeight: 'bold' ,
                                marginTop: 15 }} >{val.topic}</Text>
                <Text style={{  marginLeft : 15 , color : '#48cedb' , fontSize: 15 }} >status</Text>
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
            <View style={{ height: '100%' }}>
                <View style={{ alignItems:'center' }}>
                    <View style={Styles.ContainerContacts}>
                    <View style={{ flexDirection: 'row' }}>
                        <Image style={Styles.drawerImage} source={require('../Image/edit.png')} />
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
                                <Text style={{ marginLeft : 15 , color : '#777' }}>{this.props.DetailDoc.end_date}</Text>
                            </View>
                        </View>
                    </View>
                    <Text style={{ 
                                marginLeft : 10 , 
                                color : '#3e48a3' , 
                                fontSize: 15 , 
                                fontWeight: 'bold' , 
                                marginTop: 20 }} >รายละเอียดงาน</Text>
                    <Text style={{ marginLeft : 15 , color : '#777' }}>{this.props.DetailDoc.description}</Text>
                    <View style={{ flexDirection: 'row' }}>
                    <Text style={{ 
                                marginLeft : 10 , 
                                color : '#3e48a3' , 
                                fontSize: 15 , 
                                fontWeight: 'bold' , 
                                marginTop: 20 }} >หัวข้องาน </Text>
                        <View style={Styles.ButtonConfirm}>
                        <TouchableOpacity onPress={() => Actions.DetailAddSubDoc()}>
                        <Ionicons name="ios-add" size={25} style={{ color: '#fff', paddingLeft : 6 }} />
                        </TouchableOpacity>
                        </View>
                    </View>
                    <ScrollView style={{ height : 50 }}>
                        { this.renderText() }
                    </ScrollView>
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
