import React from 'react';
import { StyleSheet,View,Button,Image,Text } from 'react-native';
import { LinearGradient,Constants } from 'expo';
import { Ionicons } from 'react-native-vector-icons'

// import ModalCardSelectFile from '../ModalScreen/ModalCardSelectFile.js';

class AdvisorEditSelectDate extends React.Component{
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
              <Text style={{color : '#3e48a3' , fontSize: 20 , fontWeight: 'bold' , marginTop : 20 }} >ธีวัฒน์ นามสกุล</Text>
            </View>

            <View style={{  flexDirection: 'row' }}>
            <Ionicons name="ios-business" size={30} style={{ color:'#3e48a3', marginLeft : 20 , marginTop: 10 }}  />
            <Text style={{color : '#3e48a3' , fontSize: 20 , fontWeight: 'bold' , marginTop : 10 , marginLeft : 10 }} >คณะ</Text>
            </View>
            <Text style={{color : '#a69beb' , fontSize: 20 , fontWeight: 'bold' , marginLeft : 60 }} >วิศวกรรมศาสตร์</Text>
            
            <View style={{  flexDirection: 'row' }}>
            <Ionicons name="ios-phone-portrait" size={30} style={{ color:'#3e48a3', marginLeft : 20 , marginTop: 10 }}  />
            <Text style={{color : '#3e48a3' , fontSize: 20 , fontWeight: 'bold' , marginTop : 10 , marginLeft : 10 }} >เบอร์ติดต่อ</Text>
            </View>
            <Text style={{color : '#a69beb' , fontSize: 20 , fontWeight: 'bold' , marginLeft : 60 }} >0863639150</Text>

            <View style={{  flexDirection: 'row' }}>
            <Ionicons name="ios-mail" size={30} style={{ color:'#3e48a3', marginLeft : 20 , marginTop: 10 }}  />
            <Text style={{color : '#3e48a3' , fontSize: 20 , fontWeight: 'bold' , marginTop : 10 , marginLeft : 10 }} >อีเมล</Text>
            </View>
            <Text style={{color : '#a69beb' , fontSize: 20 , fontWeight: 'bold' , marginLeft : 60 }} >pacaon.us@gmail.com</Text>

            <View style={{  flexDirection: 'row' }}>
            <Ionicons name="ios-person" size={30} style={{ color:'#3e48a3', marginLeft : 20 , marginTop: 10 }}  />
            <Text style={{color : '#3e48a3' , fontSize: 20 , fontWeight: 'bold' , marginTop : 10 , marginLeft : 10 }} >เลขประจำตัวผู้เสียภาษีอากร</Text>
            </View>
            <Text style={{color : '#a69beb' , fontSize: 20 , fontWeight: 'bold' , marginLeft : 60 }} >1100600354234</Text>

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


export default AdvisorEditSelectDate