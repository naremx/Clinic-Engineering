import React from 'react';
import { StyleSheet,View,Text,TouchableOpacity,ScrollView,Image } from 'react-native';
import { LinearGradient,Constants } from 'expo';
import { Ionicons } from 'react-native-vector-icons'
import { Actions } from 'react-native-router-flux'
import { connect } from 'react-redux';
import { DataAdvisorAction } from '../Actions';


class ResultSearch extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  CollectData(val){
    this.props.DataAdvisorAction(val)
    Actions.DetailAdvisorPhoneBook();
    }
  renderText() {
    if (this.props.data.length > 0) {
        return this.props.data.map((val, index) => 
        <View key={index} style={Styles.ContainerContacts}>
            <TouchableOpacity onPress={() => this.CollectData(val)}>
                <View style={{ flexDirection: 'row' }}>
                    <Image style={Styles.drawerImage} source={require('../Image/Advisor.png')} />
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
                            <Text style={{ marginLeft : 10 , color : '#c0c0c0' }}>{val.department}</Text>
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
  DataAdvisorAction: (val) => dispatch(DataAdvisorAction(val))
})

const mapStateToProps = ({ LoginUser_Reducer, User_Search_Reducer }) => {
  const { token } = LoginUser_Reducer;
  const { data } = User_Search_Reducer;
      return { token,data };
}

export default connect(mapStateToProps,mapDispatchToprops)(ResultSearch);

