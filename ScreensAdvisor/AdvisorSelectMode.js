import React from 'react';
import { StyleSheet,View,TouchableOpacity,Image } from 'react-native';
import Expo ,{ LinearGradient, Permissions, Notifications , Constants }  from 'expo';
import { Actions } from 'react-native-router-flux'
import { connect } from 'react-redux';


class AdvisorSelectMode extends React.Component{
  async setNoticeToken(token){
    let collection={}
    collection.expo_token=token
    try{
        var url = 'http://35.198.249.38:8000/notification/upload_expo_token/' ;

        await fetch(url, {
        method: 'POST', 
        body: JSON.stringify(collection),
        headers:{
            'Content-Type': 'application/json' ,
            Authorization : `Token ${this.props.token}`,
        }
        })
    }catch(err){
        Alert.alert('Try Again');
    }
}
  componentWillMount(){
    this.getToken();
  }
    async getToken() {
    let notificationStatus;
    await Permissions.askAsync(Permissions.LOCATION)
    .then(notificationResponse =>{
      notificationStatus = notificationResponse.status;
    })
    if (notificationStatus === 'granted') {
          const token = await Notifications.getExpoPushTokenAsync();
          this.setNoticeToken(token)
          console.log('Our token',token);
        } 
    }
   render(){  
    return(
        <LinearGradient colors ={['#87daf3','#a69beb']} style={{ paddingTop: Constants.statusBarHeight }}>
          <View style={Styles.Container}>
          <View style={{alignItems:'center'}}>
          <View style={Styles.ContainerContacts}>
            <View style={{alignItems:'center'}}>
            <TouchableOpacity onPress={() => Actions.AdvisorEditAllDate()}>
              <Image style={{ marginTop: 50 , width:300 , height:150 , borderRadius: 20 }} source={{ uri : "https://www.img.live/images/2019/05/02/selectaddalldate.png" }} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Actions.AdvisorEditSelectDate()}>
              <Image style={{ marginTop: 50 , width:300 , height:150 , borderRadius: 20 }} source={{ uri : "https://www.img.live/images/2019/05/02/editdate.png" }} />
            </TouchableOpacity>
            
            <Image style={{  width:370 , height:194 , borderRadius: 15  }} source={{ uri : "https://www.img.live/images/2019/05/02/shake-up-sales-meeting-og.jpg" }} />

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
});



const mapStateToProps = ({ LoginUser_Reducer}) => {
  const { token,role,data } = LoginUser_Reducer;
      return { token,role,data };
}

export default connect(mapStateToProps)(AdvisorSelectMode);