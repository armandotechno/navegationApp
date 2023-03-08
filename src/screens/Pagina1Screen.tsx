import { useEffect } from 'react';
import { Button, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import { DrawerScreenProps } from '@react-navigation/drawer';
import { colores, styles } from '../theme/appTheme';

// interface Props extends StackScreenProps<any, any>{};
interface Props extends DrawerScreenProps<any, any>{};

export const Pagina1Screen = ( { navigation }: Props ) => {

    useEffect(() => {
      navigation.setOptions({
        headerLeft: () => (
          <TouchableOpacity
            style={{
              paddingLeft: 10,
            }}
            onPress={ () => navigation.toggleDrawer() }
          >
            <Icon 
              name='menu-outline' 
              size={ 35 } 
              color={ colores.primary }
            />
          </TouchableOpacity>
        )
      })
    }, [])

    return (
      <View style={ styles.globalMargin }>
        <Text style={ styles.title }>Pagina 1</Text>

        <Button 
          title='Ir Página 2' 
          onPress={ () => navigation.navigate('Pagina2Screen') }
        />

        <Text style={{ marginVertical: 20 }}>Navegar con argumentos</Text>

        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity
            style={{ ...styles.botonGrande, backgroundColor: '#FF69B4' }}
            onPress={ () => navigation.navigate('PersonaScreen', {
              id: 1,
              nombre: 'Armando',
            }) }
          >
            <Icon name='body-outline' size={ 46 } color='white' />
            <Text style={ styles.botonGrandeTexto }>Armando</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={ styles.botonGrande }
            onPress={ () => navigation.navigate('PersonaScreen', {
              id: 2,
              nombre: 'José',
            }) }
          >
            <Icon name='body-outline' size={ 46 } color='white' />
            <Text style={ styles.botonGrandeTexto }>José</Text>
          </TouchableOpacity>
        </View>

      </View>
    )
}
