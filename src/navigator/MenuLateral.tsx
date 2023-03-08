import { Image, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native';
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons'

import { SettingsScreen } from '../screens/SettingsScreen';
import { styles } from '../theme/appTheme';
import { Tabs } from './Tabs';

const Drawer = createDrawerNavigator();

export const MenuLateral = () => {

    const { width } = useWindowDimensions();

    return (
      <Drawer.Navigator
        screenOptions={{
          drawerType: width >= 732 ? 'permanent' : 'front', // le puse 732 pq no llego a 768 en el width
          headerShown: false  // Oculta la hamburguesa
       }}
       drawerContent={ (props) => <MenuInterno { ...props } /> }
      >
        <Drawer.Screen name="Tabs" component={ Tabs } />
        <Drawer.Screen name="SettingsScreen" component={ SettingsScreen } />
      </Drawer.Navigator>
    );
}

const MenuInterno = ( { navigation }: DrawerContentComponentProps) => {

  return (
    <DrawerContentScrollView>

      {/* Parte del avatar */}
      <View style={ styles.avatarContainer }>
        <Image 
          style={ styles.avatar }
          source={{
            uri: "https://www.darylroththeatre.com/wp-content/uploads/2018/10/avatar-placeholder.png"
          }}
        />
      </View>

      {/* Opciones del menú */}
      <View style={ styles.menuContainer }>

        <TouchableOpacity 
          style={{ 
            ...styles.menuBoton,
            flexDirection: "row",
          }}
          onPress={ () => navigation.navigate('Tabs') }
        >
          <Icon name="compass-outline" size={ 26 } color="black" />
          <Text style={ styles.menuTexto }> Navegación</Text>
        </TouchableOpacity>
          
        <TouchableOpacity 
          style={{ 
            ...styles.menuBoton,
            flexDirection: "row",
          }}
          onPress={ () => navigation.navigate('SettingsScreen') }
        >
          
          <Icon name="cog-outline" size={ 26 } color="black" />
          <Text style={ styles.menuTexto }>Ajustes</Text>
        </TouchableOpacity>

      </View>

    </DrawerContentScrollView>
  )
}