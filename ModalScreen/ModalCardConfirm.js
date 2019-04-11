import React from 'react';
import { StyleSheet,View,Text,TouchableOpacity,Modal,TextInput,Alert } from 'react-native';
import { LinearGradient,BlurView } from 'expo';
import { Ionicons } from 'react-native-vector-icons'


class ModalCardConfirm extends React.Component {
    constructor(){
        super()
        this.state = {
            showMe:false 
        }
    }

    submit()
    {
        this.setState({ showMe:false })
    }

    render() {
        return(
            <View style={Styles.container}>
                <Modal visible={this.state.showMe} onRequestClose ={()=>console.warn("this is close")} transparent animationType='fade'>
                <BlurView tint="dark" intensity={50} style={StyleSheet.absoluteFill}>
                    <View style={{ alignItems:'center', marginTop: 200 }}>
                        <View style={Styles.ModalBoxConfirm}>

                            <View style={{ alignItems:'flex-end' }}>
                                <TouchableOpacity onPress={() => this.setState({ showMe:false })}>
                                    <Ionicons name="ios-close-circle" size={30} style={{ color: '#a9aae9' , paddingRight: 10 , paddingTop: 10 }} />
                                </TouchableOpacity>
                            </View>
                            
                        <Text style={{ color : '#495090' , fontSize: 23 , fontWeight: 'bold' , textAlign: 'center' }}>คุณต้องการยืนยันคิวใช่หรือไม่ ?</Text>

                        <View style={{ alignItems:'center'}}>
                            <LinearGradient colors={['#87daf3', '#a69beb']} start={{x: 0.0, y: 1.0}} end={{x: 1.0, y: 1.0}} style={Styles.Button}>
                                <TouchableOpacity onPress={() => this.submit()}>
                                <Text style={{color : '#fff' , fontSize: 20 , fontWeight: 'bold' , textAlign: 'center' , paddingTop: 10 }}>ยืนยันคิว</Text>
                                </TouchableOpacity>
                            </LinearGradient>
                        </View>
                        </View>
                    </View>
                </BlurView>
                </Modal>
                <View style={{ alignItems:'center'}}>
                <LinearGradient colors={['#90ed9c', '#04d11f']} start={{x: 0.0, y: 1.0}} end={{x: 1.0, y: 1.0}} style={Styles.Button}>
                    <TouchableOpacity onPress={() => this.setState({ showMe:true })}>
                    <Text style={{color : '#fff' , fontSize: 20 , fontWeight: 'bold' , textAlign: 'center' , paddingTop: 10 }}>ยืนยันคิว</Text>
                    </TouchableOpacity>
                </LinearGradient>
            </View>
            </View>
        );
    }
  };

export default ModalCardConfirm

const Styles = StyleSheet.create({
Container: {
    flex: 1,
    width: '100%',
    height: '100%',
},  
ModalBoxConfirm:{
    width: 370,
    height: 200,
    backgroundColor: '#ecf8ff',
    borderRadius: 25,
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

});
