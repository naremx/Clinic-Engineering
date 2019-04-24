import React from 'react';
import { StyleSheet,Image,View,Text,ScrollView,TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo';
import { Ionicons } from 'react-native-vector-icons'
import axios from 'axios'
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux'
import { DataAdvisorAction } from '../Actions';

class PhoneBook extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      dataSource: ''
    };
  }

  componentDidMount() {
    try{
        axios.get(`http://161.246.5.11:8000/advisor/getaddata/` , {
        headers: {
            // Authorization : `Token ${this.props.token}`,
        }
        })
      .then(res => {
        this.setState({ dataSource : res.data});
      })
    }
    catch(err){
      console.log(err)
    }
}

  renderText() {
    if (this.state.dataSource.length > 0) {
        return this.state.dataSource.map((val, index) => 
        <View key={index} style={Styles.ContainerContacts}>
            <TouchableOpacity onPress={() => this.CollectData(val)}>
                <View style={{ flexDirection: 'row' }}>
                    <Image style={Styles.drawerImage} source={require('../Image/user.png')} />
                    <View style={Styles.Column}>
                        <Text style={{ 
                            marginLeft : 10 ,
                            color : '#3e48a3' ,
                            fontSize: 15 ,
                            fontWeight: 'bold' ,
                            marginTop: 20 }} >{val.first_name} {val.last_name}</Text>
                        <Text style={{ marginLeft : 10 , color : '#777' }}>{val.telephone}</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Ionicons name="ios-pin" size={15} style={{ color:'#777' , marginLeft: 22}} />
                            <Text style={{ marginLeft : 10 , color : '#c0c0c0' , width: 200 }}>{val.department}</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
        );
    }
}

CollectData(val){
  this.props.DataAdvisorAction(val)
  console.log(val)
  Actions.DetailAdvisorPhoneBook();
  }

   render(){  
    return(
      <LinearGradient colors ={['#87daf3','#a69beb']} style={Styles.container}>
        <View style={{ alignItems:'center' , marginTop: 10 }}>
        <ScrollView>
        <View style={{alignItems:'center'}}>
            { this.renderText() }
        </View>
        </ScrollView>   
        </View>
    </LinearGradient>
    );
  }
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  line:{
      backgroundColor: '#fff',
      height: 10,
      shadowColor: '#777777',
      shadowRadius: 10,
      shadowOpacity: 0.6,
      elevation: 4,
  },
  ContainerContacts: {
      width: 370,
      height: 120,
      marginTop: 15,
      backgroundColor: 'white',
      borderRadius: 18,
      shadowColor: '#30C1DD',
      shadowRadius: 10,
      shadowOpacity: 0.6,
      elevation: 6,
  },
  ContainerSearch:{
      width: 450,
      height: 100,
      backgroundColor: '#fff',
      shadowColor: '#e5e5e5',
      shadowRadius: 10,
      shadowOpacity: 0.6,
      elevation: 6,
  },
  drawerImage: {
      height: 90,
      width: 90,
      borderRadius: 100,
      marginLeft: 20,
      marginTop: 15,
  },

});


const mapDispatchToprops = dispatch => ({
  DataAdvisorAction: (val) => dispatch(DataAdvisorAction(val))
})

const mapStateToProps = ({ LoginUser_Reducer}) => {
  const { token,role,data } = LoginUser_Reducer;
      return { token,role,data };
}

export default connect(mapStateToProps,mapDispatchToprops)(PhoneBook);

