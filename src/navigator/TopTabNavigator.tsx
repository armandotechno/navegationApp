import { Text } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons'
import { AlbumsScreen } from '../screens/AlbumsScreen';
import { ChatScreen } from '../screens/ChatScreen';
import { ContactsScreen } from '../screens/ContactsScreen';
import { colores } from '../theme/appTheme';

const Tab = createMaterialTopTabNavigator();

export const TopTabNavigator = () => {

  const { top } = useSafeAreaInsets();

  return (
    <Tab.Navigator
      style={{
        paddingTop: top
      }}
      sceneContainerStyle={{
        backgroundColor: 'white'
      }}
      screenOptions={ ({ route }) => ({
        tabBarPressColor: colores.primary,
        tabBarShowIcon: true,
        tabBarIndicatorStyle: {
          backgroundColor: colores.primary
        },
        tabBarStyle: {
            shadowColor: "transparent",
            elevation: 0
        },
        tabBarIcon: (props) => {
      
            let iconName: string = '';
            switch(route.name) {
                case 'Chats' :
                  iconName = 'chatbox-outline'
                  break;
                  
                case 'Contacts' :
                  iconName = 'tv-outline'
                  break;
                    
                case 'Albums' :
                  iconName = 'shield-outline'
                  break;
            }
            return <Icon name={ iconName } size={ 20 } color={ props.color }/>
        }
      })}
      
    >
      <Tab.Screen name="Chats" component={ ChatScreen } />
      <Tab.Screen name="Contacts" component={ ContactsScreen } />
      <Tab.Screen name="Albums" component={ AlbumsScreen } />
    </Tab.Navigator>
  );
}




        