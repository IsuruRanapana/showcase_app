import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'react-native';
import DashboardNavigator from './src/routes/DashboardNavigator';

export default function App() {
    return (
        <NavigationContainer>
            <StatusBar hidden={true}/>
            <DashboardNavigator/>
        </NavigationContainer>
    );
}
