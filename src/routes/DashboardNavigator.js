// *** Created By Isuru B. Ranapana *** //
// ***     Eyepax IT Consulting     *** //
// ***   on 12/14/2022 => 11:03 AM  *** //

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home} from '../screens';

const Stack = createNativeStackNavigator();

export default function DashboardNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="HOME"
                component={Home}
                options={{headerShown: false}}
            />
        </Stack.Navigator>
    );
}
