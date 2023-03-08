import { useContext } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/Ionicons'
import { AuthContext } from '../context/AuthContext';

export const SettingsScreen = () => {

  const insets = useSafeAreaInsets();

  const { authState } = useContext( AuthContext );

  return (
    <>
      <View style={{ marginTop: insets.top, backgroundColor: '#ABB2B9' }}>
        <Text style={ styles.texto }>Bienvenido Usuari@</Text>
      </View>

      <View style={{backgroundColor:'#5D6D7E', flex: 1}}>
        <Text style={ styles.textoOpciones }>Cuenta</Text>
        <Text style={ styles.textoOpciones }>Acerca del dispositivo</Text>
        <Text style={ styles.textoOpciones }>Caché</Text>
        <Text style={ styles.textoOpciones }>Pantalla</Text>
        <Text style={ styles.textoOpciones }>{ JSON.stringify( authState, null, 4 ) }</Text>
        { 
          authState.favoriteIcon && 
          <Icon 
            name={ authState.favoriteIcon }
            size={ 150 }
            color='orange'
            style={{ alignSelf: 'center' }}
          />
        }
        <Text style={{ ...styles.textoOpciones, alignSelf: "flex-end", top: 260, left: 30 }}>Final de esta pantalla</Text>
        <Image
          style={ styles.imagen } 
          source={{
            uri: "https://cdn4.vectorstock.com/i/1000x1000/68/78/success-people-cartoon-design-vector-6376878.jpg"
          }}
        />
      </View>
    </>
  )
}

const styles = StyleSheet.create({
    texto: {
      fontSize: 20,
      fontWeight: "bold",
      textAlign: "center",
      marginVertical: 20,
      color: 'white'
    },
    textoOpciones: {
      color: 'white',
      fontSize: 16,
      fontWeight: 'bold',
      marginTop: 10,
      marginHorizontal: 40,
    },
    imagen: {
      padding: 20,
      top: 200,
      width: 80,
      height: 80,
      alignSelf: "center",
      right: 20,
      borderRadius: 10,
    }
});
