import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import { styles } from '../theme/appTheme';
import { TouchableIcon } from '../components/TouchableIcon';

export const Tab1Screen = () => {
    return (
      <View style={ styles.globalMargin }>
        <Text style={ styles.title }> Iconos </Text>

        <View>
          <Text>
            <TouchableIcon iconName="airplane-outline" iconColor="#900" /> 
            <TouchableIcon iconName="attach-outline" iconColor="#1122c0" /> 
            <TouchableIcon iconName="alarm-outline" iconColor="#1d011b" /> 
            <TouchableIcon iconName="eye-outline" iconColor="#eb10ff" /> 
            <TouchableIcon iconName="eye-off-outline" iconColor="#00992e" />
            <TouchableIcon iconName="finger-print-outline" iconColor="#d16105" />
            <TouchableIcon iconName="ear-outline" iconColor="#00ffff" /> 
          </Text>
        </View>
      </View>
    )
}
