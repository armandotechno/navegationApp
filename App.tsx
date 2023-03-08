import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';


// import { StackNavigator } from './src/navigator/StackNavigator';
// import { MenuLateralBasico } from './src/navigator/MenuLateralBasico';
import { MenuLateral } from './src/navigator/MenuLateral';
import { AuthProvider } from './src/context/AuthContext';

const App = () => {
    return (
      <NavigationContainer>
        <AppState>
          <MenuLateral />
          {/* <StackNavigator /> */}
          {/* <MenuLateralBasico /> */}
        </AppState>
      </NavigationContainer>
    )
}

const AppState = ({ children }: any ) => {
  return (
    <AuthProvider>
      { children }
    </AuthProvider>
  )
}

export default App;
