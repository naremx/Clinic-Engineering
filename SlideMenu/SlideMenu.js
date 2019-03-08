import React , {Component} from 'react';
import { Actions } from 'react-native-router-flux';
import { StyleSheet,View,Image,TouchableOpacity,Text } from 'react-native';
import { LinearGradient } from 'expo';

import ModalCardRegister from '../ModalScreen/ModalCardRegister.js';
import ModalCardLogin from '../ModalScreen/ModalCardLogin.js';

class SlideMenu extends Component {
    render() {
      return (
        <View style={{
            flex: 1,
            backgroundColor: '#fff' }}>
            <LinearGradient colors ={['#87daf3','#a69beb']} style={Styles.Profile}>
                <View style={{flexDirection: "row" , marginLeft: 20 , marginTop: 80}}>
                    <Image
                        style={Styles.drawerImage}
                        source={require('../Image/user.png')} />
                    <View style={{flexDirection: "column" , marginLeft: 20 , marginTop: 30}}>
                        <ModalCardLogin/>
                        <ModalCardRegister/>
                    </View>
                </View>
            </LinearGradient>
            <TouchableOpacity onPress={()=> Actions.ContactRoot()}>
                <Text style={{ color : '#a69beb' , fontSize: 20 , marginTop: 10 , marginLeft: 20  }}>ติดต่อเรา</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> Actions.QuestionsRoot()} >
                <Text style={{ color : '#a69beb' , fontSize: 20 , marginTop: 10 , marginLeft: 20  }}>คำถามที่พบบ่อย</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> Actions.ConditionsRoot()}>
                <Text style={{ color : '#a69beb' , fontSize: 20 , marginTop: 10 , marginLeft: 20  }}>เงื่อนไขและข้อตกลง</Text>
            </TouchableOpacity>
        </View>
      );
    }
  }

  const Styles = StyleSheet.create({
    Profile:{
        height: 200,
        width: 300,
    },
    Title:{
        color:'#87daf3',
        flex: 1,
        textAlign: 'center',
    },
    drawerImage: {
        height: 100,
        width: 100,
        borderRadius: 100,
    }
    });

  export default SlideMenu;