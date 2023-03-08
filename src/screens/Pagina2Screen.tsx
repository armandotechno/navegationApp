import { Text, View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { styles } from '../theme/appTheme';
import { useEffect } from 'react';

export const Pagina2Screen = () => {

  const navigator = useNavigation();

  useEffect(() => {
    navigator.setOptions({
      title: "Hola mundo",
      headerBackTitle: "Atrás"
    })
  },[])

  return (
      <View style={ styles.globalMargin }>
        <Text style={ styles.title }>Pagina 2</Text>

        <Button 
          title='Ir Página 3'
          onPress={ () => navigator.navigate('Pagina3Screen' as never) } // Ojo
        />
      </View>
    )
}
