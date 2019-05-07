import React from 'react';
import { View, Text, StyleSheet,Image,TextInput,TouchableOpacity} from 'react-native';
import { LinearGradient } from 'expo';
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'
import axios from 'axios'

class UserEditProfile extends React.Component{
  constructor(){
    super()
    this.state = {
        first_name: '',
        last_name: '',
        email: '',
        telephone: '',
        address: '',
        DataSource: '',
    }
}
componentDidMount() {
        var url = 'http://35.198.249.38:8000/Showdetail/Usshowdetail/' ;
    
        fetch(url, {
        method: 'POST', 
        body: JSON.stringify(this.props.token),
        headers:{
            'Content-Type': 'application/json' ,
            Authorization : `Token ${this.props.token}`,
        }
        }).then(res => res.json())
        .then((responseData) => {
            this.setState({
              DataSource: responseData
            }); 
            console.log('OK' ,responseData )
            var output = this.state.DataSource.reduce(function (acc, item) {
              acc = item
              return acc
            }, {})
            this.setState({
              first_name: output.first_name,
              last_name: output.last_name,
              email: output.email,
              telephone: output.telephone,
              address: output.address,

            }); 
          })
          
    
        .then(response => console.log('Success:', JSON.stringify(response)))
        .catch(error => console.error('Error:', error));
}
  updateValue(text , field){
    if(field == 'first_name'){
        this.setState({
          first_name : text
        })
    }
    else if(field == 'last_name'){
        this.setState({
          last_name : text
        })
    }
    else if(field == 'email'){
      this.setState({
        email : text
      })
    }
    else if(field == 'telephone'){
      this.setState({
        telephone : text
      })
    }
    else if(field == 'address'){
      this.setState({
        address : text
      })
    }

}
  submit()
  {
      let collection={}
      collection.first_name=this.state.first_name,
      collection.last_name=this.state.last_name,
      collection.email=this.state.email,
      collection.telephone=this.state.telephone,
      collection.address=this.state.address,
      console.log(collection);
      Actions.pop()

      var url = 'http://35.198.249.38:8000/Editprofile/Usedit/' ;

      fetch(url, {
      method: 'POST', 
      body: JSON.stringify(collection),
      headers:{
          'Content-Type': 'application/json',
          Authorization : `Token ${this.props.token}`,
      }
      })
  }

        render(){
          return(
            <LinearGradient colors ={['#87daf3','#a69beb']} style={Styles.Container}>
            <View style={{alignItems:'center'}}>
              <View style={Styles.ContainerContacts}>
              <View style={{alignItems:'center'}}>
                <Image style={Styles.drawerImage}
                          source={require('../Image/Advisor.png')} />
              </View>
              <View style={{alignItems:'center' , flexDirection: 'row' , marginTop : 10}}>
                <Text style={{color : '#3e48a3' , fontSize: 20 , fontWeight: 'bold', marginLeft : 40 }} >ชื่อ</Text>
                <Text style={{color : '#3e48a3' , fontSize: 20 , fontWeight: 'bold', marginLeft : 130 }} >นามสกุล</Text>
              </View>

              <View style={{alignItems:'center' , flexDirection: 'row' , marginTop : 10}}>
                <TextInput style={Styles.inputBoxName} placeholder='first_name' value={this.state.first_name} 
                onChangeText={(text) => this.updateValue(text, 'first_name')} />
                <TextInput style={Styles.inputBoxName} placeholder='last_name' value={this.state.last_name} 
                onChangeText={(text) => this.updateValue(text, 'last_name')} />
              </View>

              <View style={{ marginTop : 10 }}>
                <Text style={{color : '#3e48a3' , fontSize: 20 , fontWeight: 'bold', marginLeft : 40 }} >อีเมล</Text>
                <TextInput style={Styles.inputBox} placeholder='email' value={this.state.email} 
                onChangeText={(text) => this.updateValue(text, 'email')}/>
              </View>

              <View style={{ marginTop : 10 }}>
                <Text style={{color : '#3e48a3' , fontSize: 20 , fontWeight: 'bold', marginLeft : 40 }} >เบอร์ติดต่อ</Text>
                <TextInput style={Styles.inputBox} placeholder='telephone' value={this.state.telephone} 
                onChangeText={(text) => this.updateValue(text, 'telephone')}  />
              </View>

              <View style={{ marginTop : 10 }}>
                <Text style={{color : '#3e48a3' , fontSize: 20 , fontWeight: 'bold', marginLeft : 40 }} >ที่อยู่</Text>
                <TextInput style={Styles.inputBox} placeholder='Address' value={this.state.address} 
                onChangeText={(text) => this.updateValue(text, 'address')}  />
              </View>

              <View style={{alignItems:'center'}}>
              <LinearGradient colors={['#87daf3', '#a69beb']} start={{x: 0.0, y: 1.0}} end={{x: 1.0, y: 1.0}} style={Styles.ButtonConfirm}>
                <TouchableOpacity onPress={() =>this.submit()}>
                <Text style={{color : '#fff' , fontSize: 20 , fontWeight: 'bold' , textAlign: 'center' , paddingTop: 10 }}>ยืนยัน</Text>
                </TouchableOpacity>
              </LinearGradient>
              </View>
              </View>
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
      height: 600,
      backgroundColor: 'white',
      borderRadius: 18,
      shadowColor: '#30C1DD',
      shadowRadius: 10,
      shadowOpacity: 0.6,
      elevation: 6,
      marginTop: 30
  },
  inputBoxName:{
    width: 130,
    height: 30,
    marginLeft: 28,
    backgroundColor: '#fff',
    borderRadius: 20,
    borderColor:'#95a3e6',
    borderWidth: 1,
    paddingHorizontal: 16,
    fontSize: 15,
  },
  inputBox:{
    width: 300,
    height: 30,
    marginLeft: 28,
    marginTop: 10,
    backgroundColor: '#fff',
    borderRadius: 20,
    borderColor:'#95a3e6',
    borderWidth: 1,
    paddingHorizontal: 16,
    fontSize: 15,
  },
  drawerImage: {
    height: 100,
    width: 100,
    borderRadius: 100,
    marginTop: 15
  },
  ButtonConfirm:{
    height: 50, 
    width: 150 , 
    borderRadius: 20 , 
    marginTop: 70, 
    shadowColor: '#30C1DD',
    shadowRadius: 10,
    shadowOpacity: 0.6,
    elevation: 6,
},
});


const mapStateToProps = ({ LoginUser_Reducer }) => {
  const { token } = LoginUser_Reducer;
      return { token };
}

export default connect(mapStateToProps)(UserEditProfile);