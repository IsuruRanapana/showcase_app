// *** Created By Isuru B. Ranapana *** //
// ***     Eyepax IT Consulting     *** //
// ***   on 12/13/2022 => 7:27 PM  *** //


import {Text, View} from 'react-native';
import styles from './Home.styles';

export default function Home({navigation}){
    return (
        <View style={styles.container}>
            <Text style={styles.titleText}>{'Home'}</Text>
        </View>
    );
}
