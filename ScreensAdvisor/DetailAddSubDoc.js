import React from 'react';
import { StyleSheet,View,Text,ScrollView,Image,TouchableOpacity,TextInput } from 'react-native';
import { LinearGradient,Constants} from 'expo';
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'


class DetailAddSubDoc extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
        topic: '',
        description: ''
    };
  }
  updateValue(text , field){
    if(field == 'topic'){
        this.setState({
          topic : text
        })
    }
    else if(field == 'description'){
        this.setState({
          description : text
        })
    }
}
SentDataConfirm()
{
    let collection={}
    collection.id = this.props.DetailDoc.id
    collection.name = this.props.DetailDoc.name
    collection.topic = this.state.topic
    collection.description = this.state.description

    console.log(collection);
    Actions.AdDetailAddDoc();

    var url = 'http://10.66.13.208:8000/Document/addsubdoc/' ;

    fetch(url, {
    method: 'POST', 
    body: JSON.stringify(collection),
    headers:{
        'Content-Type': 'application/json' ,
        Authorization : `Token ${this.props.token}`,
    }
    })
}
   render(){  
    return(
        <LinearGradient colors ={['#87daf3','#a69beb']} style={{ paddingTop: Constants.statusBarHeight }}>
            <View style={{ height: '100%' }}>
                <View style={{ alignItems:'center' }}>
                    <View style={Styles.ContainerContacts}>
                    <Text style={{ color : '#495090' , fontSize: 20 , fontWeight: 'bold' , textAlign: 'center' , marginTop: 30 }}>กรุณากรอกหัวข้อเอกสาร</Text>
                        <View style={{ marginLeft : 30 }}> 
                        <Text style={{color : '#95a3e6' , fontSize: 20 , fontWeight: 'bold', margin : 5 }} >หัวข้อเอกสาร</Text>
                        <TextInput style={Styles.inputBoxAss} onChangeText={(text) => this.updateValue(text, 'topic')}/>
                        <Text style={{color : '#95a3e6' , fontSize: 20 , fontWeight: 'bold', margin : 5 }} >รายละเอียด</Text>
                        <TextInput style={Styles.inputBoxAss} onChangeText={(text) => this.updateValue(text, 'description')}/>
                        </View>
                        <View style={{ alignItems:'center'}}>
                        <LinearGradient colors={['#87daf3', '#a69beb']} start={{x: 0.0, y: 1.0}} end={{x: 1.0, y: 1.0}} style={Styles.Button}>
                            <TouchableOpacity onPress={() => this.SentDataConfirm()}>
                            <Text style={{color : '#fff' , fontSize: 20 , fontWeight: 'bold' , textAlign: 'center' , paddingTop: 10 }}>ยืนยัน</Text>
                            </TouchableOpacity>
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
Button:{
    height: 50, 
    width: 150 , 
    borderRadius: 20 , 
    marginTop: 40 , 
    shadowColor: '#30C1DD',
    shadowRadius: 10,
    shadowOpacity: 0.6,
    elevation: 6,
},
inputBoxAss:{
    width: 290,
    height: 40,
    marginTop: 10 ,
    backgroundColor: '#fff',
    borderRadius: 15,
    borderColor:'#495090',
    borderWidth: 1,
    paddingHorizontal: 16,
    fontSize: 15,
  },


});


const mapStateToProps = ({ LoginUser_Reducer , User_Detail_Doc }) => {
    const { token,role } = LoginUser_Reducer;
    const { DetailDoc } = User_Detail_Doc;
        return { token,role,DetailDoc };
  }

export default connect(mapStateToProps)(DetailAddSubDoc);

