import React from 'react';
import { StyleSheet,View,Text,TouchableOpacity,Modal,TextInput,Alert } from 'react-native';
import { LinearGradient,BlurView,DocumentPicker,ImagePicker } from 'expo';
import { Ionicons } from 'react-native-vector-icons'


class ModalCardSelectFile extends React.Component {
    constructor(){
        super()
        this.state = {
            showMe:false,
            pickerResult: null,
        }
    }
    _pickDocument = async () => {
        let result = await DocumentPicker.getDocumentAsync({});
        alert('ทำการเพิ่มไฟล์เรียบร้อยแล้ว');

        this.setState({ showMe:false })
    }
    
    _pickImg = async () => {
      let pickerResult = await ImagePicker.launchImageLibraryAsync({
        base64: true,
        allowsEditing: false,
        aspect: [4, 3],
      });
      this.setState({
        pickerResult,
        showMe:false
      });
    };

    render() {
        let { pickerResult } = this.state;
        let imageUri = pickerResult ? `data:image/jpg;base64,${pickerResult.base64}` : null;
        imageUri && console.log({uri: imageUri.slice(0, 100)});
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
                            
                        <Text style={{ color : '#495090' , fontSize: 23 , fontWeight: 'bold' , textAlign: 'center' }}>เลือกประเภทไฟล์ที่ต้องการแนบ</Text>

                        <View style={{ flexDirection: 'row'}}>
                            <LinearGradient colors={['#87daf3', '#a69beb']} start={{x: 0.0, y: 1.0}} end={{x: 1.0, y: 1.0}} style={Styles.Button}>
                                <TouchableOpacity onPress={() => this._pickDocument()}>
                                <View style={{  flexDirection: 'row',margin : 10 }}>
                                    <Ionicons name="ios-images" size={20} style={{ color:'#fff' , marginTop: 2 }} />
                                    <Text style={{color : '#fff' , fontSize: 20 , fontWeight: 'bold' }}> เพิ่มรูปภาพ</Text>
                                </View>
                                </TouchableOpacity>
                            </LinearGradient>
                            <LinearGradient colors={['#87daf3', '#a69beb']} start={{x: 0.0, y: 1.0}} end={{x: 1.0, y: 1.0}} style={Styles.Button}>
                                <TouchableOpacity onPress={() => this._pickDocument()}>
                                <View style={{  flexDirection: 'row',margin : 10 }}>
                                    <Ionicons name="ios-document" size={20} style={{ color:'#fff' , marginTop: 2 }} />
                                    <Text style={{color : '#fff' , fontSize: 20 , fontWeight: 'bold' }}> เพิ่มเอกสาร</Text>
                                </View>
                                </TouchableOpacity>
                            </LinearGradient>
                        </View>
                        </View>
                    </View>
                </BlurView>
                </Modal>
                <View style={{ alignItems:'center'}}>
                <LinearGradient colors={['#87daf3', '#a69beb']} start={{x: 0.0, y: 1.0}} end={{x: 1.0, y: 1.0}} style={Styles.ButtonSelectFile}>
                    <TouchableOpacity onPress={() => this.setState({ showMe:true })}>
                    <Ionicons name="ios-attach" size={20} style={{ color:'#fff' , marginTop: 5 , marginLeft: 10 }} />
                    </TouchableOpacity>
                </LinearGradient>
            </View>
            </View>
        );
    }
  };

export default ModalCardSelectFile

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
ButtonSelectFile:{
    height: 30, 
    width: 30 , 
    borderRadius: 10 , 
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
    marginLeft : 25
},

});
