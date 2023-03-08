import { Text, View, StyleSheet, Image } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context'

export const SettingsScreen = () => {

  const insets = useSafeAreaInsets();

  return (
    <>
      <View style={{ marginTop: insets.top, backgroundColor: '#ABB2B9' }}>
        <Text style={ styles.texto }>Bienvenido Usuari@</Text>
      </View>

      <View style={{backgroundColor:'#5D6D7E', flex: 1}}>
        <Text style={ styles.textoOpciones }>Cuenta</Text>
        <Text style={ styles.textoOpciones }>Acerca del dispositivo</Text>
        <Text style={ styles.textoOpciones }>No sé que más poner</Text>
        <Text style={ styles.textoOpciones }>Batería</Text>
        <Text style={ styles.textoOpciones }>Caché</Text>
        <Text style={ styles.textoOpciones }>Pantalla</Text>
        <Text style={{ ...styles.textoOpciones, alignSelf: "flex-end", top: 160, left: 30 }}>Final de esta pantalla</Text>
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
      marginVertical: 20,
      marginHorizontal: 40,
    },
    imagen: {
      padding: 20,
      top: 100,
      width: 80,
      height: 80,
      alignSelf: "center",
      right: 20,
      borderRadius: 10,
    }
});
