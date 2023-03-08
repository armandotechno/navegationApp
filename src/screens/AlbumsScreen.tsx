import { useContext } from 'react';
import { View, Text, Button } from 'react-native';
import { styles } from '../theme/appTheme';
import { AuthContext } from '../context/AuthContext';

export const AlbumsScreen = () => {

  const { logout, authState } = useContext( AuthContext )

  return (
    <View style={ styles.globalMargin }>
        <Text style={ styles.title }>Albums Screens</Text>

        { 
          authState.isLoggedIn && <Button title='Cerrar Sesión' onPress={ logout } />
        }
        
        </View>
  )
}
