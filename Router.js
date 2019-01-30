import React from 'react';
import { Router,Scene } from 'react-native-router-flux';

import Home from './Screens/Home.js';
import Search from './Screens/Search.js';
import Notification from './Screens/Notification.js';
import Queue from './Screens/Queue.js';
import Assignment from './Screens/Assignment.js';

const Routes = () => {
    return(
        <Router>
            <Scene key='root'>
                <Scene key='Home' component={Home} title='หน้าหลัก' initial></Scene>
                <Scene key='Search' component={Search} title='ค้นหา' initial></Scene>
            </Scene>
        </Router>
    )
}

export default Routes