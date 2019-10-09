/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import HomeScreen from './components/first';
import Newscreen from './components/newScreen';
import TaskOne from './components/facebookTask';
import New from './components/new';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';


const MainNavigator = createStackNavigator({
  Home: {screen: New},
  Profile:{screen:Newscreen},
  front :{screen : New}
  
});

const App = createAppContainer(MainNavigator);

export default App;