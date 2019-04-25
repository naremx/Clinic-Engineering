import React from 'react';
import { StyleSheet,View,Text,TextInput,TouchableOpacity,ScrollView,Image } from 'react-native';
import { LinearGradient,Constants } from 'expo';
import { Ionicons } from 'react-native-vector-icons'
import { Actions } from 'react-native-router-flux'
import { connect } from 'react-redux';
import { UserSearchAction } from '../Actions/UserSearchAction.js'
import { DataAdvisorAction } from '../Actions';
import axios from 'axios'

class Search extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      dataSource: {},
    };
  }
  componentDidMount() {
    try{
        axios.get(`http://161.246.5.11:8000/advisor/getaddata/` , {
        headers: {
            Authorization : `Token ${this.props.token}`,
        }
        })
      .then(res => {
        this.setState({ dataSource : res.data});
        console.log('--CHECK1--' , this.state.dataSource)
      })
    }
    catch(err){
      console.log(err)
    }
  }
  updateValue(text , field){
    if(field == 'search'){
        this.setState({
          search : text
        })
    }
  }
  sentDataSearch(){
    let collection={}
    collection=this.state.search

    console.log(collection);

    var url = 'http://161.246.5.11:8000/Search/search/' ;

    fetch(url, {
    method: 'POST', 
    body: JSON.stringify(collection),
    headers:{
        'Content-Type': 'application/json' ,
        Authorization : `Token ${this.props.token}`,
      }
    }).then(res => res.json())
    .then((responseData) => {
      this.props.UserSearchAction(responseData)
      Actions.ResultSearch();
    })
    .then(response => console.log('Success:', JSON.stringify(response)))
    .catch(error => console.error('Error:', error));
  }
  CollectData(val){
    this.props.DataAdvisorAction(val)
    Actions.DetailAdvisor();
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
                            <Text style={{ marginLeft : 10 , color : '#c0c0c0', width: 200 }}>{val.department}</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
        );
    }
}
   render(){  
    return(
      <LinearGradient colors ={['#87daf3','#a69beb']} style={{ paddingTop: Constants.statusBarHeight }}>
      <View style={Styles.Container}>
        <View style = {{ flexDirection: 'row' }}>
          <LinearGradient colors ={['#fafafa','#ffffff']} style={Styles.InputBoxSearch}>
            <TextInput style={Styles.Input} placeholder='ชื่ออาจารย์ / ชื่อภาควิชา / ชื่อวิทยานิพนธ์'
            onChangeText={(text) => this.updateValue(text, 'search')}
            placeholderTextColor='#b2b2b2' underlineColorAndroid='transparent' />
          </LinearGradient>
          <TouchableOpacity onPress={() => this.sentDataSearch()}>
              <Text style={Styles.ButtonSearch}>ค้นหา</Text>
          </TouchableOpacity>
        </View>
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
    Container: {
        height: '100%' ,
        alignItems:'center'
  },
    InputBoxSearch: {
      width: 310,
      height: 40,
      borderBottomLeftRadius: 10,
      borderTopLeftRadius: 10,
      justifyContent: 'center',
      paddingHorizontal: 20,
      shadowColor: '#30C1DD',
      shadowRadius: 10,
      shadowOpacity: 0.6,
      elevation: 6,
      borderWidth: 2, 
      borderColor: '#c8bfff',
  },
    ButtonSearch:{
      width: 70,
      height: 40,
      color: '#fff' ,
      fontSize: 15 , 
      textAlign: 'center' ,
      paddingTop: 10 ,
      backgroundColor: '#c8bfff',
      borderBottomRightRadius: 10,
      borderTopRightRadius: 10,
      shadowColor: '#30C1DD',
      shadowRadius: 10,
      shadowOpacity: 0.6,
      elevation: 6,
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
    drawerImage: {
      height: 90,
      width: 90,
      borderRadius: 100,
      marginLeft: 20,
      marginTop: 15,
  },
});

const mapDispatchToprops = dispatch => ({
  UserSearchAction: (data) => dispatch(UserSearchAction(data)) ,
  DataAdvisorAction: (val) => dispatch(DataAdvisorAction(val))
})

const mapStateToProps = ({ LoginUser_Reducer}) => {
  const { token } = LoginUser_Reducer;
      return { token };
}

export default connect(mapStateToProps,mapDispatchToprops)(Search);

