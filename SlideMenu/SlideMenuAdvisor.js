import React , {Component} from 'react';
import { Actions } from 'react-native-router-flux';
import { StyleSheet,View,Image,TouchableOpacity,Text } from 'react-native';
import { LinearGradient } from 'expo';
import { Ionicons } from 'react-native-vector-icons'
import { connect } from 'react-redux';

class SlideMenuAdvisor extends Component{
    async Logout(token) {
        console.log(token)
        const response = await fetch(`http://10.66.13.208:8000/Account/logout` , {
            headers: {
                Authorization : `Token ${this.props.token}`,
            }   
                
        });
            this.props.dispatch({
                type: 'Logout'
            })
            console.log(response)

    }
    render(){
        return(
            <View style={{ 
                flex: 1,
                backgroundColor: '#fff' }}>
                <LinearGradient colors ={['#87daf3','#a69beb']} style={Styles.Profile}>
                    <View style={{flexDirection: "row" , marginLeft: 20 , marginTop: 80}}>
                        <Image
                            style={Styles.drawerImage}
                            source={require('../Image/user.png')} />
                        <View style={{flexDirection: "column" , marginLeft: 15 , marginTop: 35}}>
                            <Text style={{ color: '#fff' , fontSize: 18 , fontWeight: 'bold' }}>{this.props.data.first_name}</Text>
                        </View>
                    </View>
                </LinearGradient>
                <TouchableOpacity onPress={()=> Actions.ContactRoot()}>
                    <View style={{ flexDirection: 'row'  }}>
                        <Ionicons name="ios-contact" size={30} style={{ color:'#3e48a3' , marginTop: 10 , marginLeft: 20 }} />
                        <Text style={{ color : '#a69beb' , fontSize: 20 , marginTop: 10 , textAlign: 'center' , marginLeft: 10 }}>ข้อมูลส่วนตัว</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> Actions.ContactRoot()}>
                    <View style={{ flexDirection: 'row'  }}>
                        <Ionicons name="ios-list-box" size={30} style={{ color:'#3e48a3' , marginTop: 10 , marginLeft: 20 }} />
                        <Text style={{ color : '#a69beb' , fontSize: 20 , marginTop: 10 , textAlign: 'center' , marginLeft: 10 }}>รายการย้อนหลัง</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> Actions.ContactRoot()}>
                    <View style={{ flexDirection: 'row'  }}>
                        <Ionicons name="ios-book" size={30} style={{ color:'#3e48a3' , marginTop: 10 , marginLeft: 20 }} />
                        <Text style={{ color : '#a69beb' , fontSize: 20 , marginTop: 10 , textAlign: 'center' , marginLeft: 10 }}>วิทยานิพนธ์</Text>
                    </View>
                </TouchableOpacity>
                <Text style={{ color : '#c0c0c0' , fontSize: 15 , marginTop: 5 , textAlign: 'center' }}>_____________________________________</Text>
                <TouchableOpacity onPress={()=> Actions.ContactRoot()}>
                    <Text style={{ color : '#a69beb' , fontSize: 18 , marginTop: 10 , marginLeft: 20  }}>ติดต่อเรา</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> Actions.QuestionsRoot()}>
                    <Text style={{ color : '#a69beb' , fontSize: 18 , marginTop: 10 , marginLeft: 20  }}>คำถามที่พบบ่อย</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> Actions.ConditionsRoot()}>
                    <Text style={{ color : '#a69beb' , fontSize: 18 , marginTop: 10 , marginLeft: 20  }}>เงื่อนไขและข้อตกลง</Text>
                </TouchableOpacity>
                <View style={{ alignItems : 'flex-end' , marginTop: 300 }}>
                    <TouchableOpacity onPress={() => this.Logout(this.props.token)}>
                        <Text style={{ color : '#a69beb' }}> ออกจากระบบ </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
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

    const mapStateToProps = ({ LoginUser_Reducer,LoginUser_Data_Reducer }) => {
        const { token,role } = LoginUser_Reducer;
        const { data } = LoginUser_Data_Reducer;
            return { token,role,data };
      }
    
    export default connect(mapStateToProps)(SlideMenuAdvisor);