import React from 'react';
import { StyleSheet,View,Button,Image,Text } from 'react-native';
import { LinearGradient,Constants } from 'expo';
import { Ionicons } from 'react-native-vector-icons'
import { connect } from 'react-redux';

class UserContact extends React.Component{
  constructor(props) {
    super(props);
    this.state = {

    };
  }
   render(){  
    return(
        <LinearGradient colors ={['#87daf3','#a69beb']} style={{ paddingTop: Constants.statusBarHeight }}>
          <View style={Styles.Container}>
          <View style={{alignItems:'center'}}>
          <View style={Styles.ContainerContacts}>
            <View style={{alignItems:'center'}}>
              <Image style={Styles.drawerImage}
                          source={require('../Image/user.png')} />
              <Text style={{color : '#3e48a3' , fontSize: 25 , fontWeight: 'bold' , marginTop : 20 }} >{this.props.data.first_name} {this.props.data.last_name}</Text>
            </View>

            <View style={{  flexDirection: 'row' , marginTop: 20 }}>
            <Ionicons name="ios-person" size={30} style={{ color:'#3e48a3', marginLeft : 20 , marginTop: 10 }}  />
            <Text style={{color : '#3e48a3' , fontSize: 20 , fontWeight: 'bold' , marginTop : 10 , marginLeft : 10 }} >ชื่อผู้ใชงานในระบบ</Text>
            </View>
            <Text style={{color : '#a69beb' , fontSize: 20 , fontWeight: 'bold' , marginLeft : 60 }} >{this.props.data.username}</Text>
            
            <View style={{  flexDirection: 'row' }}>
            <Ionicons name="ios-phone-portrait" size={30} style={{ color:'#3e48a3', marginLeft : 20 , marginTop: 10 }}  />
            <Text style={{color : '#3e48a3' , fontSize: 20 , fontWeight: 'bold' , marginTop : 10 , marginLeft : 10 }} >เบอร์ติดต่อ</Text>
            </View>
            <Text style={{color : '#a69beb' , fontSize: 20 , fontWeight: 'bold' , marginLeft : 60 }} >0863639150</Text>

            <View style={{  flexDirection: 'row' }}>
            <Ionicons name="ios-mail" size={30} style={{ color:'#3e48a3', marginLeft : 20 , marginTop: 10 }}  />
            <Text style={{color : '#3e48a3' , fontSize: 20 , fontWeight: 'bold' , marginTop : 10 , marginLeft : 10 }} >อีเมล</Text>
            </View>
            <Text style={{color : '#a69beb' , fontSize: 20 , fontWeight: 'bold' , marginLeft : 60 }} >{this.props.data.email}</Text>

            <View style={{  flexDirection: 'row' }}>
            <Ionicons name="ios-pin" size={30} style={{ color:'#3e48a3', marginLeft : 20 , marginTop: 10 }}  />
            <Text style={{color : '#3e48a3' , fontSize: 20 , fontWeight: 'bold' , marginTop : 10 , marginLeft : 10 }} >ที่อยู่</Text>
            </View>
            <Text style={{color : '#a69beb' , fontSize: 20 , fontWeight: 'bold' , marginLeft : 60 }} >king mongkut's institute of technology ladkrabang</Text>


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
    drawerImage: {
      height: 100,
      width: 100,
      borderRadius: 100,
      marginTop: 20,
    },
});

const mapStateToProps = ({ LoginUser_Data_Reducer}) => {
    const { data } = LoginUser_Data_Reducer;
        return { data };
  }
 
export default connect(mapStateToProps)(UserContact);