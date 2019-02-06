import React, {Component} from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default class TabIcon extends Component {
    render() {
        var color = this.props.selected ? '#87daf3':'#a69beb';
        return(
            <View>
                <Icon style={{color: color}} name={this.props.iconName||"circle"} size={35}/>
            </View>
        )
    }
}