import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';


// import { StackNavigator } from './src/navigator/StackNavigator';
// import { MenuLateralBasico } from './src/navigator/MenuLateralBasico';
import { MenuLateral } from './src/navigator/MenuLateral';
import { AuthProvider } from './src/context/AuthContext';
import { DefaultTheme } from './src/theme/appTheme';
import { Provider as PaperProvider } from 'react-native-paper';

const theme = {
  ...DefaultTheme
}

const App = () => {
    return (
      <PaperProvider theme={ theme }>
        <NavigationContainer>
          <AppState>
            <MenuLateral />
            {/* <StackNavigator /> */}
            {/* <MenuLateralBasico /> */}
          </AppState>
        </NavigationContainer>
      </PaperProvider>
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
