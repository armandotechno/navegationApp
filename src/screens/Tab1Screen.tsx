import Icon from 'react-native-vector-icons/Ionicons'
import { Text, View } from 'react-native';
import { styles } from '../theme/appTheme';

export const Tab1Screen = () => {
    return (
      <View style={ styles.globalMargin }>
        <Text style={ styles.title }> Iconos </Text>

        <Text>
          {/* <Icon name="airplane-outline" size={ 80 } color="#900" />
          <Icon name="attach-outline" size={ 80 } color="#1122c0" />
          <Icon name="alarm-outline" size={ 80 } color="#1d011b" />
          <Icon name="construct-outline" size={ 80 } color="#0a94480" />
          <Icon name="eye-outline" size={ 80 } color="#eb10ff" />
          <Icon name="eye-off-outline" size={ 80 } color="#00992e" />
          <Icon name="finger-print-outline" size={ 80 } color="#d16105" />
          <Icon name="ear-outline" size={ 80 } color="#00ffff" /> */}
        </Text>
      </View>
    )
}
