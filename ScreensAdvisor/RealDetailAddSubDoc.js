import React from 'react';
import { StyleSheet,View,Text,Image,TouchableOpacity,Alert,ScrollView } from 'react-native';
import { LinearGradient,Constants,DocumentPicker,ImagePicker,FileSystem } from 'expo';
import { connect } from 'react-redux'
import { Ionicons } from 'react-native-vector-icons'
import { Actions } from 'react-native-router-flux'



class RealDetailAddSubDoc extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
        Data: '',
        filename: '',
        pickerResult: null,
    };
  }

  componentDidMount() {
    let collection={}
    collection.id = this.props.DetailSubDoc.id
    // collection.user = this.props.DetailSubDoc.advisor_id
    // collection.image = this.state.pickerResult
    console.log('--SENT--',collection);

    var url = 'http://10.66.13.208:8000/Document/showfile/' ;

    fetch(url, {
    method: 'POST', 
    body: JSON.stringify(collection),
    headers:{
        'Content-Type': 'application/json' ,
        Authorization : `Token ${this.props.token}`,
    }
    }).then(res => res.json())
    .then((responseData) => {
            console.log('--showFile--', responseData.file)
            this.setState({ 
                showFile : responseData,
             })
             const resultshowFile = this.state.showFile.reduce((arr,item) =>{
                if( item.file){
                    arr.push(item.file);
                }
                return arr
            }, [])
            this.setState({ 
                ResultshowFile : resultshowFile,
             })
             console.log('--showFile2--', this.state.ResultshowFile)
    })
  }
//   download(item){
//       console.log(item)
//             FileSystem.downloadAsync(
//                 item ,
//             FileSystem.documentDirectory + 'download.jpg'
//         )
//         .then(({ uri }) => {
//             Alert.alert(
//             "App",
//             uri
//             );
//         this.setState({uri: uri});
//         })
//         .catch(error => {
//         Alert.alert(
//         "App",
//         error
//         );
//         console.error(error);
//     });
//     }
  renderImage() {
      console.log(this.state.ResultshowFile)
    if (this.state.ResultshowFile) {
        return this.state.ResultshowFile.map((item, index) => 
        <View key={index}>
         {/* <TouchableOpacity onPress={() => this.download(item)}>
            <Text style={{ marginLeft : 15 , color : '#777', fontSize: 13 }}>{item}</Text>
        </TouchableOpacity> */}
            <Image 
                source={{ uri: 'http://10.66.13.208:8000'+item }}
                style={{width: 350, height: 300}}
            />
        </View>
        );
    }
  }
  SentDataConfirm(){
        Actions.pop()
  }
  _pickImg = async () => {
    let pickerResult = await ImagePicker.launchImageLibraryAsync({
      base64: true,
      allowsEditing: false,
      aspect: [4, 3],
    });
    // console.log('pickerResult',pickerResult)
    this.setState({
      pickerResult,
      showMe:false
    });
    let collection={}
    collection.id = this.props.DetailSubDoc.id
    collection.user = this.props.DetailSubDoc.advisor_id
    // collection.file = this.state.pickDocument
    collection.image = this.state.pickerResult
    console.log('--SENT--',collection);
    // Actions.DetailAddDoc();

    var url = 'http://10.66.13.208:8000/Document/file/' ;

    fetch(url, {
    method: 'POST', 
    body: JSON.stringify(collection),
    headers:{
        'Content-Type': 'application/json' ,
        Authorization : `Token ${this.props.token}`,
    }
    }).then(res => res.json())
    .then((responseData) => {
            console.log('IMAGE', responseData)
            this.setState({ 
                uploadImage : responseData.file,
             })
             console.log('IMAGE2', this.state.uploadImage)
    })
  };

  _pickDocument = async () => {
    let result = await DocumentPicker.getDocumentAsync({});
    alert('ทำการเพิ่มไฟล์เรียบร้อยแล้ว');

    this.setState({ 
        showMe:false,
        pickDocument : result,
        filename: result.name,
     })
    console.log('_pickDocumentja',result);

    let uri = result.uri
    console.log("++URI++",uri)
    let uriParts = uri.split('.');
    let fileType = uri[uri.length - 1];
    console.log("++FILE TYPE++",fileType)
  
    let formData = new FormData();
    formData.append('image', {
      uri,
      name: `photo.${fileType}`,
      type: `image/${fileType}`,
    });
    console.log("==============",formData)

    this.setState({ 
        formData:formData,
     })
}
   render(){  
    let { pickerResult } = this.state;
    let imageUri = pickerResult ? `data:image/jpg;base64,${pickerResult.base64}` : null;
    imageUri && console.log({uri: imageUri.slice(0, 100)});
    // const images = this.state.uploadImage.uri
    return(
        <LinearGradient colors ={['#87daf3','#a69beb']} style={{ paddingTop: Constants.statusBarHeight }}>
            <View style={{ height: '100%' }}>
                <View style={{ alignItems:'center' }}>
                    <View style={Styles.ContainerContacts}>
                    <View style={{ flexDirection: 'row' }}>
                    <Image style={{  width:64 , height:64 , marginLeft : 15 , marginTop : 8 , alignItems:'center' }} source={{ uri : "https://www.img.live/images/2019/05/02/writing.png" }} />
                    
                    <Text style={{ 
                                marginLeft : 10 ,
                                color : '#3e48a3' ,
                                fontSize: 20 ,
                                fontWeight: 'bold' ,
                                marginTop: 20,
                                marginLeft : 30 }} >{this.props.DetailSubDoc.name}</Text>
                    </View>
                    <Text style={{ 
                    marginLeft : 10 ,
                    color : '#3e48a3' ,
                    fontSize: 20 ,
                    fontWeight: 'bold' ,
                    marginTop: 20, }} >Topic : {this.props.DetailSubDoc.topic}</Text>
                    <Text style={{ 
                    marginLeft : 10 , 
                    color : '#3e48a3' , 
                    fontSize: 15 , 
                    fontWeight: 'bold' , 
                    marginTop: 10 }} >รายละเอียด</Text>
                    <View style={{alignItems:'center'}}>
                    <View style={Styles.ContainerDoc}>
                        <Text style={{ marginLeft : 15 , color : '#777' }}>{this.props.DetailSubDoc.description}</Text>
                    </View>
                    </View>

                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ 
                        marginLeft : 10 , 
                        color : '#3e48a3' , 
                        fontSize: 15 , 
                        fontWeight: 'bold' , 
                        marginTop: 20 }} >แนบไฟล์</Text>

                    <View style={{alignItems:'center'}}>
                    <View style={{ flexDirection: 'row' }}>
                    <LinearGradient colors={['#87daf3', '#a69beb']} start={{x: 0.0, y: 1.0}} end={{x: 1.0, y: 1.0}} style={Styles.ButtonSelectFile}>
                        <TouchableOpacity onPress={() => this._pickImg()}>
                        <Ionicons name="ios-image" size={20} style={{ color:'#fff' , marginTop: 5 , marginLeft: 7 }} />
                        </TouchableOpacity>
                    </LinearGradient>
                    {/* <LinearGradient colors={['#87daf3', '#a69beb']} start={{x: 0.0, y: 1.0}} end={{x: 1.0, y: 1.0}} style={Styles.ButtonSelectFile}>
                        <TouchableOpacity onPress={() => this._pickImg()}>
                        <Ionicons name="ios-image" size={20} style={{ color:'#fff' , marginTop: 5 , marginLeft: 7 }} />
                        </TouchableOpacity>
                    </LinearGradient> */}

                    </View>
                    </View>
                    {/* <View style={{alignItems:'center'}}>
                    <LinearGradient colors={['#87daf3', '#a69beb']} start={{x: 0.0, y: 1.0}} end={{x: 1.0, y: 1.0}} style={Styles.ButtonSelectFile}>
                        <TouchableOpacity onPress={() => this._pickDocument()}>
                        <Ionicons name="ios-attach" size={20} style={{ color:'#fff' , marginTop: 5 , marginLeft: 10 }} />
                        </TouchableOpacity>
                    </LinearGradient>
                    </View> */}
                    </View>

                    <View style={{alignItems:'center'}}>
                    <View style={Styles.ContainerDocFile}>
                    <Text style={{ marginLeft : 15 , color : '#777', fontSize: 15 }}></Text>
                    {/* <Image style={{ width: 50, height: 50 }} source={{ uri: images }} /> */}
                    <ScrollView style={{ height : 90 }}>
                    { this.renderImage() }
                        <Image 
                            source={{uri: this.state.uploadImage}}
                            style={{width: 350, height: 300}}
                        />
                    </ScrollView>
                    </View>
                    <LinearGradient colors={['#90ed9c', '#04d11f']} start={{x: 0.0, y: 1.0}} end={{x: 1.0, y: 1.0}} style={Styles.ButtonChosen}>
                        <TouchableOpacity onPress={() => this.SentDataConfirm()}>
                            <Text style={{ color : '#fff' , fontSize: 20 , fontWeight: 'bold' , textAlign: 'center' }}>ตกลง</Text>
                        </TouchableOpacity>
                    </LinearGradient>
                    </View>
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
},
drawerImage: {
    marginLeft: 20,
    marginTop: 25,
},
ButtonConfirm:{
    height: 25, 
    width: 25 , 
    borderRadius: 5 , 
    marginTop: 20 ,
    backgroundColor: '#3e48a3', 
    shadowColor: '#30C1DD',
    shadowRadius: 10,
    shadowOpacity: 0.6,
    elevation: 6,
},
ButtonChosen:{
    width: 320,
    height: 40,
    paddingTop: 5 ,
    backgroundColor: '#87daf3',
    marginTop: 50,
    position: 'relative',
    borderRadius: 10,
    shadowColor: '#30C1DD',
    shadowRadius: 10,
    shadowOpacity: 0.6,
    elevation: 6,
    },
ContainerDocFile:{
    width: 350,
    height: 150,
    marginTop: 15,
    borderColor: '#dee6f7' ,
    borderWidth: 1 ,
    backgroundColor: '#fff',
    borderRadius: 5
},
ContainerDoc: {
    width: 350,
    height: 80,
    marginTop: 15,
    borderColor: '#dee6f7' ,
    borderWidth: 1 ,
    backgroundColor: '#fff',
    borderRadius: 5
},
ButtonSelectFile:{
    height: 30, 
    width: 30 , 
    borderRadius: 10 , 
    marginTop: 15 ,
    marginLeft: 10 ,
    shadowColor: '#30C1DD',
    shadowRadius: 10,
    shadowOpacity: 0.6,
    elevation: 6,
},
});

const mapStateToProps = ({ LoginUser_Reducer , User_Detail_Sub_Doc }) => {
    const { token,role } = LoginUser_Reducer;
    const { DetailSubDoc } = User_Detail_Sub_Doc;
        return { token,role,DetailSubDoc };
  }

export default connect(mapStateToProps)(RealDetailAddSubDoc);
 


