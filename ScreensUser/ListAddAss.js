import React from 'react';
import { StyleSheet,View,Text,TouchableOpacity,Image } from 'react-native';
import { LinearGradient, Constants } from 'expo';
import { Ionicons } from 'react-native-vector-icons'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'
import { AdSelectTimeQueueAction } from '../Actions/AdSelectTimeQueueAction.js'


class Assignment extends React.Component{
  constructor(props){
    super(props);
    this.state = {
          DataSource: '',
          ResultData: []
        }
    }    
    componentDidMount() {
      var url = 'http://35.198.249.38:8000/history/Usshowhistory/' ;
  
      fetch(url, {
      method: 'POST', 
      body: JSON.stringify(this.props.token),
      headers:{
          'Content-Type': 'application/json' ,
          Authorization : `Token ${this.props.token}`,
      }
      }).then(res => res.json())
      .then((responseData) => {
          this.setState({
              DataSource: responseData
          }); 
          var output = this.state.DataSource.reduce(function (acc, item) {
            if( item.status == 'accepted' ){
              acc.push(item);
            }
            return acc
          }, [])
          console.log(output)
          this.setState({
            ResultData: output
        }); 
        })
        
  
      .then(response => console.log('Success:', JSON.stringify(response)))
      .catch(error => console.error('Error:', error));
  }
  CollectData(val){
    let AdDateTimeDetail={}
    AdDateTimeDetail = val

    this.props.AdSelectTimeQueueAction(AdDateTimeDetail)
    Actions.UsAddAssignment()
}
renderText() {
    if (this.state.ResultData.length > 0) {
        return this.state.ResultData.map((val, index) => 
        <View key={index}>
            <View style={{ flexDirection: 'row' , marginTop: 10, marginLeft : 20  }}>
              <Image style={{  width:64 , height:64 , marginLeft: 5 }} source={{ uri : "https://www.img.in.th/images/7415e5774dc66fd431a4e8d2682953ea.png" }} />
                <View style={{ flexDirection: 'column' , marginTop: 10 , marginLeft : 20  }}>
                    <TouchableOpacity onPress={() => this.CollectData(val)}>
                        <Text style={{ color : '#3e48a3', marginTop: 5 , fontWeight: 'bold' }}> {val.name}</Text>
                    </TouchableOpacity>
                    <Text style={{ color : '#777', marginTop: 5 }}>Topic : {val.topic}</Text>
                </View>
            </View>
            <Text style={{ color : '#efefef' , marginLeft : 10 }}> ____________________________________________</Text>
        </View>
        );
    }
  }
    render(){
        return(
            <LinearGradient colors ={['#87daf3','#a69beb']} >
            <View style={Styles.Container}>
            <View style={Styles.ContainerContacts}>
              <View style={{alignItems:'center'}}>
                  { this.renderText() }
              </View>
            </View> 
            </View>
            </LinearGradient>
        )
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
      marginTop: 20
   },
    drawerImage: {
      height: 90,
      width: 90,
      borderRadius: 100,
      marginLeft: 20,
      marginTop: 15,
  },
  Button: {
    width: 350,
    height: 50,
    backgroundColor: '#000',
    marginTop: 10,
    borderRadius: 10,
  },
});


const mapDispatchToprops = dispatch => ({
  AdSelectTimeQueueAction: (AdDateTimeDetail) => dispatch(AdSelectTimeQueueAction(AdDateTimeDetail))
})

const mapStateToProps = ({ LoginUser_Reducer }) => {
    const { token } = LoginUser_Reducer;
        return { token };
  }

export default connect(mapStateToProps,mapDispatchToprops)(Assignment);
