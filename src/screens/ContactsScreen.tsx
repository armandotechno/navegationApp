import { View, Text, Button } from 'react-native';
import { styles } from '../theme/appTheme';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

export const ContactsScreen = () => {

  const { signIn, authState } = useContext( AuthContext );
  

  return (
    <View style={ styles.globalMargin }>
        <Text style={ styles.title }>Contacts Screen</Text>

        { 
          !authState.isLoggedIn && <Button title='Sing In' onPress={ signIn } />
        }
        
    </View>
  )
}
