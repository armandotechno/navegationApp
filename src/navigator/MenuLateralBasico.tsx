import { useWindowDimensions } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { StackNavigator } from './StackNavigator';
import { SettingsScreen } from '../screens/SettingsScreen';

const Drawer = createDrawerNavigator();

export const MenuLateralBasico = () => {

    const { width } = useWindowDimensions();

    return (
      <Drawer.Navigator
        screenOptions={{
          drawerType: width >= 732 ? 'permanent' : 'front', // le puse 732 pq no llego a 768 en el width
          headerShown: false  // Oculta la hamburguesa
       }}
      >
        <Drawer.Screen name="StackNavigator" options={{ title: 'Home' }} component={ StackNavigator } />
        <Drawer.Screen name="SettingsScreen" options={{ title: 'Settings' }} component={ SettingsScreen } />
      </Drawer.Navigator>
    );
}