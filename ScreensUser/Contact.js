import React from 'react';
import { View, Text, StyleSheet,Image} from 'react-native';
import { LinearGradient } from 'expo';
import { Ionicons } from 'react-native-vector-icons'

const Contact = () => {
    return (
            <LinearGradient colors ={['#87daf3','#a69beb']} style={Styles.Container}>
            <View style={{alignItems:'center'}}>
                <View style={Styles.Box}>
                    <Image style={Styles.Image} source={require('../Image/EIDT.png')} />
                    <Text style={{ color:'#a69beb' , fontSize: 17 , textAlign: 'center', fontWeight: 'bold' , marginTop: 30 }}>ศูนย์พัฒนานวัตกรรมและบริการทางวิศวกรรม</Text>
                    <Text style={{ color:'#a69beb' , fontSize: 10 , textAlign: 'center'}}>Engineering Innovative Development and Technology Services</Text>
                    <Text style={{ color:'#777777' , textAlign: 'center' , marginTop: 20}}>ตั้งอยู่ที่ ชั้น 2 อาคาร Memorial Hall  คณะวิศวกรรมศาสตร์ สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง เลขที่ 1 ซอยฉลองกรุง 1 แขวง/เขตลาดกระบัง กรุงเทพฯ 10520</Text>
                    <Text style={{ color:'#a69beb' , fontSize: 22 , marginTop: 20 , fontWeight: 'bold', marginLeft : 10 }}>CONTACT US</Text>
                    <Text style={{ color:'#a69beb', marginLeft : 10  }}>เวลาทำการ 8.30-16.30 น.</Text>
                    <Text style={{ color:'#a69beb', marginLeft : 10  }}>02-329-8186, 02-329-8000 ext. 3520, 063-4796840</Text>
                    <Text style={{ color:'#a69beb', marginLeft : 10  }}>eidts@kmitl.ac.th, kmitl.eidts@gmail.com</Text>
                    <View style={{flexDirection: "row", alignItems:'center' , marginTop: 40 }}>
                        <LinearGradient colors={['#87daf3', '#a69beb']} start={{x: 0.0, y: 1.0}} end={{x: 1.0, y: 1.0}} style={Styles.Button}>
                            <Ionicons name="ios-call" size={50} style={{ color:'#fff', marginTop: 12 , marginLeft: 20}} />
                        </LinearGradient>
                        <LinearGradient colors={['#87daf3', '#a69beb']} start={{x: 0.0, y: 1.0}} end={{x: 1.0, y: 1.0}} style={Styles.Button}>
                            <Ionicons name="ios-pin" size={50} style={{ color:'#fff', marginTop: 12 , marginLeft: 22}} />
                        </LinearGradient>
                        <LinearGradient colors={['#87daf3', '#a69beb']} start={{x: 0.0, y: 1.0}} end={{x: 1.0, y: 1.0}} style={Styles.Button}>
                            <Ionicons name="ios-mail" size={50} style={{ color:'#fff', marginTop: 12 , marginLeft: 18}} />
                        </LinearGradient>
                    </View>
                </View>
            </View>
            </LinearGradient> 
    );
}

const Styles = StyleSheet.create({
    Container: {
        flex: 1
    },
    Image: {
        height: 186,
        width: 300,
        marginLeft: 5,
        marginTop: 30,
    },
    Box:{
        width: 370,
        height: 650,
        backgroundColor: '#fff',
        marginTop: 20,
        alignItems:'center',
        borderRadius: 25,
        shadowColor: '#30C1DD',
        shadowRadius: 10,
        shadowOpacity: 0.6,
        elevation: 6,
    },
    Button:{
        width: 75,
        height: 75,
        backgroundColor: '#000',
        marginLeft: 20,
        marginTop: 20,
        borderRadius: 20,
        shadowColor: '#30C1DD',
        shadowRadius: 10,
        shadowOpacity: 0.6,
        elevation: 6,
    },
});

export default Contact;