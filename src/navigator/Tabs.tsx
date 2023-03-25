import { Platform } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons'

import { Tab1Screen } from '../screens/Tab1Screen';
import { colores } from '../theme/appTheme';
import { StackNavigator } from './StackNavigator';
import { TopTabNavigator } from './TopTabNavigator';


export const Tabs = () => {


  return Platform.OS === 'ios'
      ? <TabsIOS />
      : <TabsAndroid />
} 



const BottomTabAndoid = createMaterialBottomTabNavigator();

const TabsAndroid = () => {
  return (
    <BottomTabAndoid.Navigator
      sceneAnimationEnabled={ true }
      barStyle={{
        backgroundColor: colores.primary
      }}
      screenOptions={ ({ route }) => ({
        tabBarIcon: (props) => {

            let iconName: string = '';
            switch(route.name) {
                case 'Tab1Screen' :
                    iconName = 'albums-outline'
                break;

                case 'Tab2Screen' :
                    iconName = 'document-text-outline'
                break;

                case 'StackNavigator' :
                    iconName = 'warning-outline'
                break;
            }
          return <Icon name={ iconName } size={ 20 } color={ props.color } />  
        }
    })}
    >
       <BottomTabAndoid.Screen name="Tab1Screen" options={{ title: 'Tab1' }} component={ Tab1Screen } />
      <BottomTabAndoid.Screen name="Tab2Screen" options={{ title: 'Tab2' }} component={ TopTabNavigator } />
      <BottomTabAndoid.Screen name="StackNavigator" options={{ title: 'Stack' }} component={ StackNavigator } />
    </BottomTabAndoid.Navigator>
  );
}


const BottomTabIOS = createBottomTabNavigator();

const TabsIOS = () => {
  return (
    <BottomTabIOS.Navigator 
      sceneContainerStyle={{
        backgroundColor: 'white'
      }}
      screenOptions={ ({ route }) => ({
        tabBarActiveTintColor: colores.primary,
        tabBarStyle: {
            shadowColor: "transparent",
            elevation: 0
        },
        tabBarLabelStyle: {
            fontSize: 15
        },
        tabBarIcon: (props) => {

          let iconName: string = '';
          switch(route.name) {
              case 'Tab1Screen' :
                  iconName = 'albums-outline'
              break;

              case 'Tab2Screen' :
                  iconName = 'document-text-outline'
              break;

              case 'StackNavigator' :
                  iconName = 'chatbox-outline'
              break;
          }
          return <Icon name={ iconName } size={ 20 } color={ props.color } />  
        }
    })}
    >
      {/* <Tab.Screen name="Tab1Screen" options={{ title: 'Tab1', tabBarIcon: (props) => <Text style={{ color: props.color }}>T1</Text> }} component={ Tab1Screen } /> */}
      <BottomTabIOS.Screen name="Tab1Screen" options={{ title: 'Tab1' }} component={ Tab1Screen } />
      <BottomTabIOS.Screen name="Tab2Screen" options={{ title: 'Tab2' }} component={ TopTabNavigator } />
      <BottomTabIOS.Screen name="StackNavigator" options={{ title: 'Stack' }} component={ StackNavigator } />
    </BottomTabIOS.Navigator>
  );
}