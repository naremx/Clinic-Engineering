import React from 'react';
import { View, Text, StyleSheet,Image,TextInput} from 'react-native';
import { LinearGradient } from 'expo';
import { Ionicons } from 'react-native-vector-icons'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'

class UserEditProfile extends React.Component{

        callphone = () => {
            const args = {
              number: '023298186'
            };
        
            call(args).catch(console.error);
        }
        handleEmail = () => {
            const to = 'eidts@kmitl.ac.th'
            sentemail(to).catch(console.error);
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
              <View style={{alignItems:'center' , flexDirection: 'row' , marginTop : 20}}>
                <Text style={{color : '#3e48a3' , fontSize: 20 , fontWeight: 'bold', marginLeft : 40 }} >ชื่อ</Text>
                <Text style={{color : '#3e48a3' , fontSize: 20 , fontWeight: 'bold', marginLeft : 130 }} >นามสกุล</Text>
              </View>

              <View style={{alignItems:'center' , flexDirection: 'row' , marginTop : 10}}>
                <TextInput style={Styles.inputBoxName} placeholder="FirstName"/>
                <TextInput style={Styles.inputBoxName} placeholder="LastName"/>
              </View>

              <View style={{ marginTop : 10 }}>
                <Text style={{color : '#3e48a3' , fontSize: 20 , fontWeight: 'bold', marginLeft : 40 }} >อีเมล</Text>
                <TextInput style={Styles.inputBox} placeholder="Email"/>
              </View>

              <View style={{ marginTop : 10 }}>
                <Text style={{color : '#3e48a3' , fontSize: 20 , fontWeight: 'bold', marginLeft : 40 }} >เบอร์ติดต่อ</Text>
                <TextInput style={Styles.inputBox} placeholder="Telephone"/>
              </View>

              <View style={{ marginTop : 10 }}>
                <Text style={{color : '#3e48a3' , fontSize: 20 , fontWeight: 'bold', marginLeft : 40 }} >ที่อยู่</Text>
                <TextInput style={Styles.inputBox} placeholder="Address"/>
              </View>

              </View>
              <LinearGradient colors={['#90ed9c', '#04d11f']} start={{x: 0.0, y: 1.0}} end={{x: 1.0, y: 1.0}} style={Styles.ButtonConfirm}>
                <TouchableOpacity onPress={() => this.setState({ showMe:true })}>
                <Text style={{color : '#fff' , fontSize: 20 , fontWeight: 'bold' , textAlign: 'center' , paddingTop: 10 }}>ยืนยันคิว</Text>
                </TouchableOpacity>
              </LinearGradient>
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
    marginTop: 30
  }
});


const mapStateToProps = ({ LoginUser_Reducer,LoginUser_Data_Reducer }) => {
  const { token,role } = LoginUser_Reducer;
  const { data } = LoginUser_Data_Reducer;
      return { token,role,data};
}

export default connect(mapStateToProps)(UserEditProfile);