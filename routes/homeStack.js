import { createStackNavigator } from 'react-navigation-stack';
import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';

const screens = {
    Home: {
        screen: Home,
    },
    Details: {
        screen: ReviewDetails,
    }
};

const HomeStack = createStackNavigator(screens);

export default HomeStack;