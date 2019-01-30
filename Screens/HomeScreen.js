import React from 'react';
import { Ionicons } from 'react-native-vector-icons'
import { createMaterialTopTabNavigator } from 'react-navigation';

import Home from './Home.js';
import Search from './Search.js';
import Notification from './Notification.js';
import Queue from './Queue.js';
import Assignment from './Assignment.js';



const HomeScreenTabNavigator = new createMaterialTopTabNavigator({
  Tab1: {
      screen: Home,
      navigationOptions: {
          tabBarLabel: 'หน้าหลัก',
          tabBarIcon: ({tintColor}) => (
            <Ionicons name='ios-home' size={30} color={tintColor}/>
          )
      }
  },
  Tab2: {
      screen: Search,
      navigationOptions: {
          tabBarLabel: 'ค้นหา',
          tabBarIcon: ({tintColor}) => (
            <Ionicons name='ios-search' size={30} color={tintColor}/>
          )
      }
  },
  Tab3: {
    screen: Notification,
    navigationOptions: {
        tabBarLabel: 'แจ้งเตือน',
        tabBarIcon: ({tintColor}) => (
          <Ionicons name='ios-notifications' size={30} color={tintColor}/>
        )
      }
  },
  Tab4: {
    screen: Queue,
    navigationOptions: {
        tabBarLabel: 'คิว',
        tabBarIcon: ({tintColor}) => (
          <Ionicons name='ios-people' size={30} color={tintColor}/>
        )
      }
  },
  Tab5: {
    screen: Assignment,
    navigationOptions: {
        tabBarLabel: 'งาน',
        tabBarIcon: ({tintColor}) => (
          <Ionicons name='ios-document' size={30} color={tintColor}/>
        )
      }
    }
  },{
            initialRouteName: 'Tab1',
            tabBarPosition: 'bottom',
            tabBarOptions: ({
              activeTintColor: '#8cd2f2',
              inactiveTintColor: '#9694e3',
              showIcon: true ,
              style: { backgroundColor: 'white' },
              labelStyle: { fontWeight: 'bold' ,  fontSize: 12 },
              indicatorStyle: {
                height : 0
              }
            })
        });

export default HomeScreenTabNavigator;

