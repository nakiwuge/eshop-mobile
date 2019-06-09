import { createStackNavigator,
  createAppContainer, createDrawerNavigator} from 'react-navigation';
import Home from './components/home';
import Signup from './components/signup';
import Login from './components/login';

export const nav = createDrawerNavigator({
  Home: { screen: Home },
  Signup: {screen: Signup},
  Login: {screen: Login}
})

const Navigator = createAppContainer(nav)

export default Navigator ;