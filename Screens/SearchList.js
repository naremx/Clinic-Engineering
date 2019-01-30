import React from 'react';
import { createStackNavigator,createAppContainer } from 'react-navigation';

import AddQueue from './AddQueue.js';
import Search from './Search.js';

const AddQueueUser = createStackNavigator({
    ค้นหา: {screen: Search ,
        navigationOptions: {
            header: null
        }
     },
    แอดคิว: {screen: AddQueue ,
        navigationOptions: {
            header: null
        }
    }
},{
    initialRouteName: 'ค้นหา',
  });


const App = createAppContainer(AddQueueUser);

export default App