import React from 'react';
import { StyleSheet, Image, View, Dimensions , Text , ActivityIndicator, ScrollView, TouchableOpacity } from 'react-native';
import Carousel from 'react-native-banner-carousel';
import { LinearGradient } from 'expo';
import { Ionicons } from 'react-native-vector-icons'
import { Actions } from 'react-native-router-flux'
import { connect } from 'react-redux';
import { CollectDataAction } from '../Actions';

const BannerWidth = Dimensions.get('window').width;
const BannerHeight = 200;

const images = [
    "https://img.live/images/2019/02/05/1.md.png",
    "https://img.live/images/2019/02/05/799739.md.jpg",
    "https://img.live/images/2019/02/05/631371.md.jpg"
];

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isLoading: true,
            dataSource: null,
    }
}

async CollectData(val){
    console.log(val)
    await this.props.CollectDataAction(val)
    Actions.Calendar();
    }
    
async Logout(token) {
        console.log(token)
        const response = await fetch(`http://192.168.43.212:8000/Account/logout` , {
            headers: {
                Authorization : `Token ${token}`,
            }   
                
        });
            this.props.dispatch({
                type: 'Logout'
            })
            console.log(response)

    }

componentDidMount () {
    fetch('http://www.json-generator.com/api/json/get/ccLAsEcOSq?indent=1')
        .then((response) => response.json())
        .then((responseJson) => {
            this.setState({
                isLoading: false,
                dataSource: responseJson.book_array,
            })
        })
    .catch((error) => {
        console.log('error')
    });
}
    renderPage(image, index) {
        return (
            <View key={index}>
                <Image style={{ width: BannerWidth, height: BannerHeight }} source={{ uri: image }} />
            </View>
        );
    }
    render() {
        if (this.state.isLoading) {
            return(
                <View>
                    <ActivityIndicator/>
                </View>
            )
        } else {
            let List = this.state.dataSource.map((val,key) => {
                return ( 
                        <View key={key} style={{ alignItems:'center', marginTop: 10 }}>
                            <TouchableOpacity onPress={() => this.CollectData(val)}>
                                <View style={Styles.ContainerContacts}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Image style={Styles.drawerImage} source={{ uri: val.image }} />
                                        <View style={Styles.Column}>
                                            <Text style={{ 
                                                marginLeft : 10 ,
                                                color : '#3e48a3' ,
                                                fontSize: 15 ,
                                                fontWeight: 'bold' ,
                                                marginTop: 20 }} >{val.book_title}</Text>
                                            <Text style={{ marginLeft : 10 , color : '#777' }}>Computer Engineering</Text>
                                            <View style={{ flexDirection: 'row' }}>
                                                <Ionicons name="ios-pin" size={15} style={{ color:'#777' , marginLeft: 22}} />
                                                <Text style={{ marginLeft : 10 , color : '#c0c0c0' }}>{val.author}</Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </View>   
                )
            });
        return (
            <LinearGradient colors ={['#87daf3','#a69beb']} style={Styles.container}>
            <ScrollView>
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
                </View>
                <View style={{ alignItems : 'flex-end' }}>
                </View>
                    <View style={{flexDirection: 'column' , alignItems:'center'}}>
                        {List}
                    </View>   
            </ScrollView>
            </LinearGradient>
        );
    }
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

export default connect(null, { CollectDataAction })(App);

// const mapStateToProps = ({ LoginUser_Reducer,Add_Queue_Reducer }) => {
//     const { token,role } = LoginUser_Reducer;
//     const { val } = Add_Queue_Reducer;
//         return { token,role,val };
//   }

// export default connect(mapStateToProps)(App);
