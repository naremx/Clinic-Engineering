import React , {Component} from 'react';
import { StyleSheet,View,Text,Image,TouchableOpacity,Modal,TextInput,ActivityIndicator } from 'react-native';

export default class CustomText extends React.Component{
    setFontType = (type) =>{
        switch(type){
            case 'basic':
                return 'supermarket'
            
        }
    };
  render(){
    const font = this.setFontType(this.props.type ? this.props.type:'normal');
    const style = [{ fontFamily: font} , this.props.style || {}];
    const allProps = Object.assign({}, this.props, {style: style});
    return <Text {...allProps}>{this.props.children}</Text>;
  }
}
