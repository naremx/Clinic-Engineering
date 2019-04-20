import React from 'react';
import { StyleSheet, Image, View, Dimensions , Text , ScrollView, TouchableOpacity, TextInput } from 'react-native';
import Carousel from 'react-native-banner-carousel';
import { LinearGradient } from 'expo';
import { Ionicons } from 'react-native-vector-icons'
import { Actions } from 'react-native-router-flux'
import { connect } from 'react-redux';
import axios from 'axios'
import { DataAdvisorAction } from '../Actions';




const BannerWidth = Dimensions.get('window').width;
const BannerHeight = 200;

const images = [
    "https://www.img.in.th/images/a691f37ca749a831e4362e41a336ec6f.png"
];


class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isLoading: false,
            dataSource: {},
    }    
}
CollectData(val){
    this.props.DataAdvisorAction(val)
    console.log(val)
    Actions.DetailAdvisor();
    }

renderPage(image, index) {
    return (
        <View key={index}>
            <Image style={{ width: BannerWidth, height: BannerHeight }} source={{ uri: image }} />
        </View>
    );
}

componentDidMount() {
    try{
        axios.get(`http://10.66.13.208:8000/advisor/getaddata/` , {
        headers: {
            Authorization : `Token ${this.props.token}`,
        }
        })
      .then(res => {
        this.setState({ dataSource : res.data});
        console.log(res.data)
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
                                marginTop: 20 }} >{val.first_name}</Text>
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
                <LinearGradient colors ={['#87daf3','#a69beb']} style={Styles.container}>
                    <View >
                    <Carousel
                        autoplay
                        autoplayTimeout={5000} 
                        loop
                        index={0}
                        pageSize={BannerWidth}
                    >
                        {images.map((image, index) => this.renderPage(image, index))}
                    </Carousel>
                        <View style={Styles.ContainerSearch}>
                            <View style={{alignItems:'center'}}>
                            <LinearGradient colors ={['#fafafa','#ffffff']} 
                                            start={{x: 0.0, y: 1.0}} 
                                            end={{x: 1.0, y: 1.0}}
                                            style={Styles.InputBoxSearch}>
                                <Ionicons name="ios-search" size={30} color="#a69beb" style={Styles.InputIconSearch} />
                                    <TextInput 
                                        placeholder='ชื่ออาจารย์ / ชื่อภาควิชา / ชื่อวิทยานิพนธ์' 
                                        placeholderTextColor='#b6b6b6' 
                                        underlineColorAndroid='transparent' 
                                    />
                            </LinearGradient>
                            </View>
                            <View style={{flexDirection: 'row' , marginTop : 10  }}>
                                    <Ionicons name="ios-happy" size={40} color="#a69beb" style={{ marginLeft : 50 }} />
                                    <Ionicons name="ios-flask" size={40} color="#a69beb" style={{ marginLeft : 100 }} />
                                    <Ionicons name="ios-book"  size={40} color="#a69beb" style={{ marginLeft : 100 }} />
                                </View>
                                <View style={{flexDirection: 'row' , marginTop : 10 }}>
                                    <Text style={{ color : '#a69beb' , marginLeft : 40 }}>ชื่ออาจารย์</Text>
                                    <Text style={{ color : '#a69beb' , marginLeft : 60 }}>ชื่อภาควิชา</Text>
                                    <Text style={{ color : '#a69beb' , marginLeft : 60 }}>ชื่อวิทยานิพนธ์</Text>
                                </View>
                        </View>
                    </View>
                <ScrollView>
                    <View style={{ alignItems : 'flex-end' }}>
                    </View>
                        <Text>{this.props.data}</Text>
                        <View style={{alignItems:'center'}}>
                            { this.renderText() }
                        </View>   
                </ScrollView>
                </LinearGradient>
                )

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
        height: 140,
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
    InputIconSearch:{
        position: 'absolute' ,
        left: 315,
    },
    InputBoxSearch: {
        width: 360,
        height: 40,
        left: -20 ,
        borderRadius: 25,
        justifyContent: 'center',
        paddingHorizontal: 20,
        marginTop: 15,
        shadowColor: '#e5e5e5',
        shadowRadius: 10,
        shadowOpacity: 0.6,
        elevation: 6,
        borderWidth: 2, 
        borderColor: '#a69beb',
    },
});

const mapDispatchToprops = dispatch => ({
    DataAdvisorAction: (val) => dispatch(DataAdvisorAction(val))
})

const mapStateToProps = ({ LoginUser_Reducer}) => {
    const { token,role,data } = LoginUser_Reducer;
        return { token,role,data };
  }
 
export default connect(mapStateToProps,mapDispatchToprops)(App);
