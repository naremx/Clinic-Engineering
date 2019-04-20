import React from 'react';
import { StyleSheet,View,Text,TouchableOpacity,Modal,TextInput,Alert } from 'react-native';
import { LinearGradient,BlurView } from 'expo';
import { Ionicons } from 'react-native-vector-icons'
import { Actions } from 'react-native-router-flux'
import { connect } from 'react-redux'

class ModalCardConfirm extends React.Component {
    constructor(){
        super()
        this.state = {
            showMe:false 
        }
    }

    SentDataConfirm()
    {
        this.setState({ showMe:false })
        let collection={}
        collection.decision = '1'
        collection.id = this.props.AdDateTimeDetail.id

        console.log(collection);
        Actions.AdvisorQueue();

        var url = 'http:///10.66.13.208:8000/queue/confirm/' ;

        fetch(url, {
        method: 'POST', 
        body: JSON.stringify(collection),
        headers:{
            'Content-Type': 'application/json' ,
            Authorization : `Token ${this.props.token}`,
        }
        })
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
                                <TouchableOpacity onPress={() => this.SentDataConfirm()}>
                                <Text style={{color : '#fff' , fontSize: 20 , fontWeight: 'bold' , textAlign: 'center' , paddingTop: 10 }}>ยืนยันคิว</Text>
                                </TouchableOpacity>
                            </LinearGradient>
                        </View>
                        </View>
                    </View>
                </BlurView>
                </Modal>
                <View style={{ alignItems:'center'}}>
                <LinearGradient colors={['#90ed9c', '#04d11f']} start={{x: 0.0, y: 1.0}} end={{x: 1.0, y: 1.0}} style={Styles.ButtonConfirm}>
                    <TouchableOpacity onPress={() => this.setState({ showMe:true })}>
                    <Text style={{color : '#fff' , fontSize: 20 , fontWeight: 'bold' , textAlign: 'center' , paddingTop: 10 }}>ยืนยันคิว</Text>
                    </TouchableOpacity>
                </LinearGradient>
            </View>
            </View>
        );
    }
  };


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
ButtonConfirm:{
    height: 50, 
    width: 150 , 
    borderRadius: 20 , 
    marginLeft: 20, 
    marginTop: 200 , 
    shadowColor: '#30C1DD',
    shadowRadius: 10,
    shadowOpacity: 0.6,
    elevation: 6,
},

});

const mapStateToProps = ({ Ad_Select_Time_Detail_Reducer , LoginUser_Reducer }) => {
    const { AdDateTimeDetail } = Ad_Select_Time_Detail_Reducer;
    const { token,role } = LoginUser_Reducer;
    return { AdDateTimeDetail,token,role };
  }

export default connect(mapStateToProps)(ModalCardConfirm);


