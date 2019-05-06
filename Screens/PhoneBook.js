// import React from 'react';
// import { StyleSheet,Image,View,Text,ScrollView,TouchableOpacity,TextInput,Alert,Button } from 'react-native';
// import Expo ,{ LinearGradient, Permissions, Notifications }  from 'expo';
// import { Ionicons } from 'react-native-vector-icons'
// import axios from 'axios'
// import { connect } from 'react-redux';
// import { Actions } from 'react-native-router-flux'
// import { DataAdvisorAction } from '../Actions';
// import { UserSearchAction } from '../Actions/UserSearchAction.js'

// import FilePickerManager from 'react-native-file-picker';
// import { DocumentPicker, DocumentPickerUtil } from 'react-native-document-picker';


// class PhoneBook extends React.Component{
  // componentWillMount(){
  //   this.getToken();
  // }

  // async getToken() {
  //   let notificationStatus;
  //   await Permissions.askAsync(Permissions.LOCATION)
  //   .then(notificationResponse =>{
  //     notificationStatus = notificationResponse.status;
  //   })
  //   if (notificationStatus === 'granted') {
  //         const token = await Notifications.getExpoPushTokenAsync();
  //         // this.setNoticeToken(token)
  //         console.log('Our token',token);
  //       } 
  //   }
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     dataSource: ''
  //   };
  // }
  


//   componentDidMount() {
//     try{
//         axios.get(`http://10.66.13.208:8000/advisor/getaddata/` , {
//         headers: {
//             // Authorization : `Token ${this.props.token}`,
//         }
//         })
//       .then(res => {
//         this.setState({ dataSource : res.data});
//       })
//     }
//     catch(err){
//       console.log(err)
//     }
// }
// sentDataSearch(){
//   let collection={}
//   collection=this.state.search

//   console.log(collection);

//   var url = 'http://10.66.13.208:8000/Search/search/' ;

//   fetch(url, {
//   method: 'POST', 
//   body: JSON.stringify(collection),
//   headers:{
//       'Content-Type': 'application/json' ,
//       // Authorization : `Token ${this.props.token}`,
//     }
//   }).then(res => res.json())
//   .then((responseData) => {
//     console.log('RESULTSEARCH' , responseData)
//     this.props.UserSearchAction(responseData)
//     Actions.HomeResultSearch();
//   })
//   .catch(error => {
//     Alert.alert(
//       'ไม่พบผลลัพธ์การค้นหา',
//       'กรุณากรอกใหม่อีกครั้ง',
//     )
//     console.log(error)
//   });
// }
//   renderText() {
//     if (this.state.dataSource.length > 0) {
//         return this.state.dataSource.map((val, index) => 
//         <View key={index} style={Styles.ContainerContacts}>
//             <TouchableOpacity onPress={() => this.CollectData(val)}>
//                 <View style={{ flexDirection: 'row' }}>
//                     <Image style={Styles.drawerImage} source={require('../Image/Advisor.png')} />
//                     <View style={Styles.Column}>
//                         <Text style={{ 
//                             marginLeft : 10 ,
//                             color : '#3e48a3' ,
//                             fontSize: 15 ,
//                             fontWeight: 'bold' ,
//                             marginTop: 20 }} >{val.first_name} {val.last_name}</Text>
//                         <Text style={{ marginLeft : 10 , color : '#777' }}>{val.telephone}</Text>
//                         <View style={{ flexDirection: 'row' }}>
//                             <Ionicons name="ios-pin" size={15} style={{ color:'#777' , marginLeft: 22}} />
//                             <Text style={{ marginLeft : 10 , color : '#c0c0c0' , width: 200 }}>{val.department}</Text>
//                         </View>
//                     </View>
//                 </View>
//             </TouchableOpacity>
//         </View>
//         );
//     }
// }
// updateValue(text , field){
//   if(field == 'search'){
//       this.setState({
//         search : text
//       })
//   }
// }
// CollectData(val){
//   this.props.DataAdvisorAction(val)
//   console.log(val)
//   Actions.DetailAdvisorPhoneBook();
//   }


//    render(){  

//     return(
//       <LinearGradient colors ={['#87daf3','#a69beb']} style={Styles.container}>
//         <View style={{ alignItems:'center' , marginTop: 10 }}>
//         <View style = {{ flexDirection: 'row' }}>
//           <LinearGradient colors ={['#fafafa','#ffffff']} style={Styles.InputBoxSearch}>
//             <TextInput style={Styles.Input} placeholder='ชื่ออาจารย์ / ชื่อภาควิชา / ชื่อวิทยานิพนธ์'
//             onChangeText={(text) => this.updateValue(text, 'search')}
//             placeholderTextColor='#b2b2b2' underlineColorAndroid='transparent' />
//           </LinearGradient>
//           <TouchableOpacity onPress={() => this.sentDataSearch()}>
//               <Text style={Styles.ButtonSearch}>ค้นหา</Text>
//           </TouchableOpacity>
//         </View>
//         <ScrollView>
//         <View style={{alignItems:'center'}}>
//             {/* { this.renderText() } */}
//         </View>
//         </ScrollView>   
//         </View>
//     </LinearGradient>
//     );
//   }
// }


// Filepick = () => {
//   DocumentPicker.show({
//       filetype: [DocumentPickerUtil.images()],
//   }, (error, res) => {
//       if (error == null) {
//           console.log(
//               res.uri,
//               res.type, // mime type
//               res.fileName,
//               res.fileSize
//           );
//           this.setState({
//               img_uri: res.uri,
//               img_type: res.type,
//               img_name: res.fileName

//           })
//       } else {
//           Alert.alert('Message', 'File uploaded failed');
//       }
//   });
// };

// const Styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   line:{
//       backgroundColor: '#fff',
//       height: 10,
//       shadowColor: '#777777',
//       shadowRadius: 10,
//       shadowOpacity: 0.6,
//       elevation: 4,
//   },
//   ContainerContacts: {
//       width: 370,
//       height: 120,
//       marginTop: 15,
//       backgroundColor: 'white',
//       borderRadius: 18,
//       shadowColor: '#30C1DD',
//       shadowRadius: 10,
//       shadowOpacity: 0.6,
//       elevation: 6,
//   },
//   ContainerSearch:{
//       width: 450,
//       height: 100,
//       backgroundColor: '#fff',
//       shadowColor: '#e5e5e5',
//       shadowRadius: 10,
//       shadowOpacity: 0.6,
//       elevation: 6,
//   },
//   drawerImage: {
//       height: 90,
//       width: 90,
//       borderRadius: 100,
//       marginLeft: 20,
//       marginTop: 15,
//   },
//   InputBoxSearch: {
//     width: 310,
//     height: 40,
//     borderBottomLeftRadius: 10,
//     borderTopLeftRadius: 10,
//     justifyContent: 'center',
//     paddingHorizontal: 20,
//     shadowColor: '#30C1DD',
//     shadowRadius: 10,
//     shadowOpacity: 0.6,
//     elevation: 6,
//     borderWidth: 2, 
//     borderColor: '#c8bfff',
//   },
//   ButtonSearch:{
//     width: 70,
//     height: 40,
//     color: '#fff' ,
//     fontSize: 15 , 
//     textAlign: 'center' ,
//     paddingTop: 10 ,
//     backgroundColor: '#c8bfff',
//     borderBottomRightRadius: 10,
//     borderTopRightRadius: 10,
//     shadowColor: '#30C1DD',
//     shadowRadius: 10,
//     shadowOpacity: 0.6,
//     elevation: 6,
//   },
// });


// const mapDispatchToprops = dispatch => ({
//   UserSearchAction: (data) => dispatch(UserSearchAction(data)) ,
//   DataAdvisorAction: (val) => dispatch(DataAdvisorAction(val))
// })

// const mapStateToProps = ({ LoginUser_Reducer}) => {
//   const { token,role,data } = LoginUser_Reducer;
//       return { token,role,data };
// }

// export default connect(mapStateToProps,mapDispatchToprops)(PhoneBook);


import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { Constants, FileSystem } from 'expo';




  
export default class App extends Component {
  
      constructor(){
        super();
        this.state = {
          url: '',
        }
      }
      
      download(){
        FileSystem.downloadAsync(
        'http://techslides.com/demos/sample-videos/small.mp4',
        FileSystem.documentDirectory + 'small.mp4'
      )
      .then(({ uri }) => {
        Alert.alert(
          "App",
          uri
        );
      this.setState({uri: uri});
  })
  .catch(error => {
    Alert.alert(
      "App",
      error
    );
    console.error(error);
  });
}
      

  
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => this.download()}><Text>GO</Text></TouchableOpacity> 
        <Text style={styles.paragraph}>
          Path: 
          {this.state.uri}
        </Text>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
});
