import React from 'react';
import { View, Text, StyleSheet,Image,TextInput,TouchableOpacity} from 'react-native';
import { LinearGradient } from 'expo';
import { Ionicons } from 'react-native-vector-icons'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'

class AdvisorEditProfile extends React.Component{

  constructor(){
    super()
    this.state = {
        first_name: '',
        last_name: '',
        email: '',
        telephone: '',
        address: '',
        department: '',
        tax_number: '',
        DataSource:'' ,
    }
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
    else if(field == 'department'){
      this.setState({
        department : text
      })
    }
    else if(field == 'tax_number'){
      this.setState({
        tax_number : text
      })
    }
}
componentDidMount() {
  let collection={}
  collection.user_type=this.props.data.user_type,
  console.log(collection);
  var url = 'http://161.246.5.11:8000/Showdetail/Adshowdetail/' ;

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
        DataSource: responseData.avs
      }); 
      console.log('OK' ,this.state.DataSource )
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
        department: output.department,
        tax_number: output.tax_number,
      }); 
    })
    

  .then(response => console.log('Success:', JSON.stringify(response)))
  .catch(error => console.error('Error:', error));
}
  submit()
  {
      let collection={}
      collection.first_name=this.state.first_name,
      collection.last_name=this.state.last_name,
      collection.email=this.state.email,
      collection.telephone=this.state.telephone,
      collection.address=this.state.address,
      collection.department=this.state.department,
      collection.tax_number=this.state.tax_number,
      console.log(collection);
      Actions.pop()

      var url = 'http://161.246.5.11:8000/Editprofile/Adedit/' ;

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
                <Text style={{color : '#3e48a3' , fontSize: 15 , fontWeight: 'bold', marginLeft : 40 }} >ชื่อ</Text>
                <Text style={{color : '#3e48a3' , fontSize: 15 , fontWeight: 'bold', marginLeft : 130 }} >นามสกุล</Text>
              </View>

              <View style={{alignItems:'center' , flexDirection: 'row' , marginTop : 10}}>
                <TextInput style={Styles.inputBoxName} placeholder='Firstname' value={this.state.first_name} 
                onChangeText={(text) => this.updateValue(text, 'first_name')}/>
                <TextInput style={Styles.inputBoxName} placeholder='Lastname' value={this.state.last_name} 
                onChangeText={(text) => this.updateValue(text, 'last_name')}/>
              </View>

              <View style={{ marginTop : 5 }}>
                <Text style={{color : '#3e48a3' , fontSize: 15 , fontWeight: 'bold', marginLeft : 40 }} >อีเมล</Text>
                <TextInput style={Styles.inputBox} placeholder='Email' value={this.state.email} 
                onChangeText={(text) => this.updateValue(text, 'email')}/>
              </View>

              <View style={{ marginTop : 5 }}>
                <Text style={{color : '#3e48a3' , fontSize: 15 , fontWeight: 'bold', marginLeft : 40 }} >เบอร์ติดต่อ</Text>
                <TextInput style={Styles.inputBox} placeholder='Telephone' value={this.state.telephone} 
                onChangeText={(text) => this.updateValue(text, 'telephone')}/>
              </View>

              <View style={{ marginTop : 5 }}>
                <Text style={{color : '#3e48a3' , fontSize: 15 , fontWeight: 'bold', marginLeft : 40 }} >คณะ</Text>
                <TextInput style={Styles.inputBox} placeholder='Department' value={this.state.department} 
                onChangeText={(text) => this.updateValue(text, 'department')}/>
              </View>

              <View style={{ marginTop : 5 }}>
                <Text style={{color : '#3e48a3' , fontSize: 15 , fontWeight: 'bold', marginLeft : 40 }} >เลขประจำตัวผู้เสียภาษีอากร</Text>
                <TextInput style={Styles.inputBox} placeholder='Address' value={this.state.tax_number} 
                onChangeText={(text) => this.updateValue(text, 'tax_number')}/>
              </View>

              <View style={{ marginTop : 5 }}>
                <Text style={{color : '#3e48a3' , fontSize: 15 , fontWeight: 'bold', marginLeft : 40 }} >ที่อยู่</Text>
                <TextInput style={Styles.inputBox} placeholder='Address' value={this.state.address} 
                onChangeText={(text) => this.updateValue(text, 'address')}/>
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
      height: 650,
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
    marginTop: 20
  },
  ButtonConfirm:{
    height: 50, 
    width: 150 , 
    borderRadius: 20 , 
    marginTop: 20, 
    shadowColor: '#30C1DD',
    shadowRadius: 10,
    shadowOpacity: 0.6,
    elevation: 6,
},
});


const mapStateToProps = ({ LoginUser_Reducer, LoginUser_Data_Reducer }) => {
  const { token,role } = LoginUser_Reducer;
  const { data } = LoginUser_Data_Reducer;
      return { token,role,data };
}

export default connect(mapStateToProps)(AdvisorEditProfile);