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
        tax_number: ''
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
      // Actions.pop()

      var url = 'http://10.66.13.208:8000/Editprofile/Adedit/' ;

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
                          source={require('../Image/user.png')} />
              </View>
              <View style={{alignItems:'center' , flexDirection: 'row' , marginTop : 10}}>
                <Text style={{color : '#3e48a3' , fontSize: 20 , fontWeight: 'bold', marginLeft : 40 }} >ชื่อ</Text>
                <Text style={{color : '#3e48a3' , fontSize: 20 , fontWeight: 'bold', marginLeft : 130 }} >นามสกุล</Text>
              </View>

              <View style={{alignItems:'center' , flexDirection: 'row' , marginTop : 10}}>
                <TextInput style={Styles.inputBoxName} placeholder={this.props.data.first_name} placeholderTextColor="#000"/>
                <TextInput style={Styles.inputBoxName} placeholder={this.props.data.last_name} placeholderTextColor="#000"/>
              </View>

              <View style={{ marginTop : 5 }}>
                <Text style={{color : '#3e48a3' , fontSize: 20 , fontWeight: 'bold', marginLeft : 40 }} >อีเมล</Text>
                <TextInput style={Styles.inputBox} placeholder={this.props.data.email} placeholderTextColor="#000"/>
              </View>

              <View style={{ marginTop : 5 }}>
                <Text style={{color : '#3e48a3' , fontSize: 20 , fontWeight: 'bold', marginLeft : 40 }} >เบอร์ติดต่อ</Text>
                <TextInput style={Styles.inputBox} placeholder={this.props.data.telephone} placeholderTextColor="#000"/>
              </View>

              <View style={{ marginTop : 5 }}>
                <Text style={{color : '#3e48a3' , fontSize: 20 , fontWeight: 'bold', marginLeft : 40 }} >คณะ</Text>
                <TextInput style={Styles.inputBox} placeholder={this.props.data.department} placeholderTextColor="#000"/>
              </View>

              <View style={{ marginTop : 5 }}>
                <Text style={{color : '#3e48a3' , fontSize: 20 , fontWeight: 'bold', marginLeft : 40 }} >เลขประจำตัวผู้เสียภาษีอากร</Text>
                <TextInput style={Styles.inputBox} placeholder={this.props.data.tax_number} placeholderTextColor="#000"/>
              </View>

              <View style={{ marginTop : 5 }}>
                <Text style={{color : '#3e48a3' , fontSize: 20 , fontWeight: 'bold', marginLeft : 40 }} >ที่อยู่</Text>
                <TextInput style={Styles.inputBox} placeholder={this.props.data.address} placeholderTextColor="#000"/>
              </View>

              <View style={{alignItems:'center'}}>
              <LinearGradient colors={['#87daf3', '#a69beb']} start={{x: 0.0, y: 1.0}} end={{x: 1.0, y: 1.0}} style={Styles.ButtonConfirm}>
                <TouchableOpacity onPress={() => this.setState({ showMe:true })}>
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
    marginTop: 10, 
    shadowColor: '#30C1DD',
    shadowRadius: 10,
    shadowOpacity: 0.6,
    elevation: 6,
},
});


const mapStateToProps = ({ LoginUser_Reducer,LoginUser_Data_Reducer }) => {
  const { token,role } = LoginUser_Reducer;
  const { data } = LoginUser_Data_Reducer;
      return { token,role,data};
}

export default connect(mapStateToProps)(AdvisorEditProfile);