import React from 'react';
import Router from './Router.js';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import reducers from './reducers';
import { Font } from 'expo';

const store = createStore(reducers);
export default class App extends React.Component{
  constructor(props) {
		super(props);
		this.state = { fontsLoaded: false };
	}

	componentDidMount() {
		Font.loadAsync({
			'supermarket' : require('./assets/fonts/supermarket.ttf'),
		}).then(() => {
			this.setState({ fontsLoaded: true });
		});
	}
//   render(){
//     return(
//        <Provider store = { store } >
//         <Router />
//       </Provider>
//     );
//   }
// }


render() {
  if (!this.state.fontsLoaded) {
    return null;
  }

  return (
    <Provider store = { store } >
         <Router />
    </Provider>
  );
  }
}
