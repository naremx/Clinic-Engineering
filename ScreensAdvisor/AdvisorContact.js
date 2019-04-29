import React from 'react';
import { StyleSheet,View,Image,Text } from 'react-native';
import { LinearGradient,Constants } from 'expo';
import { Ionicons } from 'react-native-vector-icons'
import { connect } from 'react-redux';

class AdvisorContact extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
              first_name: '',
              last_name: '',
              email: '',
              telephone: '',
              address: '',
              department: '',
              tax_number: '',
              DataSource:'' ,
    };
  }
  componentDidMount() {
    let collection={}
    collection.user_type=this.props.data.user_type,
    console.log(collection);
    var url = 'http://10.66.13.208:8000/Showdetail/Adshowdetail/' ;
  
  
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
          DataSource: responseData.avs
        }); 
        console.log('OK' ,this.state.DataSource )
        var output = this.state.DataSource.reduce(function (acc, item) {
          acc = item
          return acc
        }, {})
        this.setState({
          first_name: output.first_name,
          last_name: output.last_name,
          email: output.email,
          telephone: output.telephone,
          address: output.address,
          department: output.department,
          tax_number: output.tax_number,
        }); 
      })
      
  
    .then(response => console.log('Success:', JSON.stringify(response)))
    .catch(error => console.error('Error:', error));
  }
   render(){  
    return(
        <LinearGradient colors ={['#87daf3','#a69beb']} style={{ paddingTop: Constants.statusBarHeight }}>
          <View style={Styles.Container}>
          <View style={{alignItems:'center'}}>
          <View style={Styles.ContainerContacts}>
            <View style={{alignItems:'center'}}>
              <Image style={Styles.drawerImage}
                          source={require('../Image/Advisor.png')} />
              <Text style={{color : '#3e48a3' , fontSize: 25 , fontWeight: 'bold' , marginTop : 20 }} >{this.state.first_name} {this.state.last_name}</Text>
            </View>

            <View style={{  flexDirection: 'row' }}>
            <Ionicons name="ios-business" size={30} style={{ color:'#3e48a3', marginLeft : 20 , marginTop: 10 }}  />
            <Text style={{color : '#3e48a3' , fontSize: 20 , fontWeight: 'bold' , marginTop : 10 , marginLeft : 10 }} >คณะ</Text>
            </View>
            <Text style={{color : '#a69beb' , fontSize: 20 , fontWeight: 'bold' , marginLeft : 60 }} >{this.state.department}</Text>
            
            <View style={{  flexDirection: 'row' }}>
            <Ionicons name="ios-phone-portrait" size={30} style={{ color:'#3e48a3', marginLeft : 20 , marginTop: 10 }}  />
            <Text style={{color : '#3e48a3' , fontSize: 20 , fontWeight: 'bold' , marginTop : 10 , marginLeft : 10 }} >เบอร์ติดต่อ</Text>
            </View>
            <Text style={{color : '#a69beb' , fontSize: 20 , fontWeight: 'bold' , marginLeft : 60 }} >{this.state.telephone}</Text>

            <View style={{  flexDirection: 'row' }}>
            <Ionicons name="ios-mail" size={30} style={{ color:'#3e48a3', marginLeft : 20 , marginTop: 10 }}  />
            <Text style={{color : '#3e48a3' , fontSize: 20 , fontWeight: 'bold' , marginTop : 10 , marginLeft : 10 }} >อีเมล</Text>
            </View>
            <Text style={{color : '#a69beb' , fontSize: 20 , fontWeight: 'bold' , marginLeft : 60 }} >{this.state.email}</Text>

            <View style={{  flexDirection: 'row' }}>
            <Ionicons name="ios-person" size={30} style={{ color:'#3e48a3', marginLeft : 20 , marginTop: 10 }}  />
            <Text style={{color : '#3e48a3' , fontSize: 20 , fontWeight: 'bold' , marginTop : 10 , marginLeft : 10 }} >เลขประจำตัวผู้เสียภาษีอากร</Text>
            </View>
            <Text style={{color : '#a69beb' , fontSize: 20 , fontWeight: 'bold' , marginLeft : 60 }} >{this.state.tax_number} </Text>

            <View style={{  flexDirection: 'row' }}>
            <Ionicons name="ios-pin" size={30} style={{ color:'#3e48a3', marginLeft : 20 , marginTop: 10 }}  />
            <Text style={{color : '#3e48a3' , fontSize: 20 , fontWeight: 'bold' , marginTop : 10 , marginLeft : 10 }} >ที่อยู่</Text>
            </View>
            <Text style={{color : '#a69beb' , fontSize: 20 , fontWeight: 'bold' , marginLeft : 60 }} >{this.state.address} </Text>

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
      height: 630,
      backgroundColor: 'white',
      borderRadius: 18,
      shadowColor: '#30C1DD',
      shadowRadius: 10,
      shadowOpacity: 0.6,
      elevation: 6,
    },
    drawerImage: {
      height: 100,
      width: 100,
      borderRadius: 100,
      marginTop: 20,
    },
});

const mapStateToProps = ({ LoginUser_Reducer,LoginUser_Data_Reducer }) => {
  const { token } = LoginUser_Reducer;
  const { data } = LoginUser_Data_Reducer;
      return { token,data };
}

export default connect(mapStateToProps)(AdvisorContact);
