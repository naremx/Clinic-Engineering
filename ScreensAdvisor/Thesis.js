import React from 'react';
import { StyleSheet,View,Text,ScrollView,Image } from 'react-native';
import { LinearGradient,Constants } from 'expo';
import { connect } from 'react-redux';

class Thesis extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
        ResultData : []
    };
}
  componentDidMount() {
    let collection={}
    collection.user_type=this.props.data.user_type,
    console.log(collection);

    var url = 'http://35.247.141.196:8000/Showdetail/Adshowdetail/' ;
  
    fetch(url, {
    method: 'POST', 
    body: JSON.stringify(collection),
    headers:{
        'Content-Type': 'application/json' ,
        Authorization : `Token ${this.props.token}`,
    }
    }).then(res => res.json())
    .then((responseData) => {
        this.setState({
          DataSource: responseData.exp
        }); 
        const resultData = this.state.DataSource.reduce((arr,item) =>{
          if( item.expertise){
              arr.push(item.expertise);
          }
          return arr
            }, [])
      this.setState({
          ResultData : resultData
      }); 
    })
    .then(response => console.log('Success:', JSON.stringify(response)))
    .catch(error => console.error('Error:', error));
  }
  renderText() {
    if (this.state.ResultData.length > 0) {
        return this.state.ResultData.map((val, index) => 
        <View key={index}>
            <View style={{ flexDirection: 'row' , marginTop: 10  }}>
              <Image style={{  width:32 , height:32 , marginLeft: 5 }} source={{ uri : "https://www.img.live/images/2019/04/25/plan.png" }} />
              <Text style={{ color : '#777', marginTop: 5 , width: 340 }}> {val}</Text>
            </View>
            <Text style={{ color : '#efefef' }}> __________________________________________________</Text>
        </View>
        );
    }
  }
  render(){
    return(
      <LinearGradient colors ={['#87daf3','#a69beb']} style={{ paddingTop: Constants.statusBarHeight }}>
      <View style={Styles.Container}>
      <View style={Styles.ContainerContacts}>
      <Text style={{color : '#3e48a3' , fontSize: 20 , fontWeight: 'bold', margin : 5 , marginTop: 10 }} >รายชื่อวิทยานิพนธ์</Text>
          <ScrollView>
              { this.renderText() }
          </ScrollView> 
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
      alignItems:'center',
      backgroundColor: 'white',
      borderRadius: 18,
      shadowColor: '#30C1DD',
      shadowRadius: 10,
      shadowOpacity: 0.6,
      elevation: 6,
  },
});


const mapStateToProps = ({ LoginUser_Reducer,LoginUser_Data_Reducer }) => {
  const { token } = LoginUser_Reducer;
  const { data } = LoginUser_Data_Reducer;
      return { token,data };
}

export default connect(mapStateToProps)(Thesis);