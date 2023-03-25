import { StyleSheet } from 'react-native';

export const colores = {
    primary: '#FF69B4'
}

export const styles = StyleSheet.create({
    globalMargin: {
        marginHorizontal: 20
    },
    title: {
        fontSize: 30,
        marginBottom: 20,
    },
    botonGrande: {
        width: 100,
        height: 100,
        backgroundColor: 'pink',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
    },
    botonGrandeTexto: {
        color: 'white',
        fontWeight: 'bold'
    },
    avatarContainer: {
        alignItems: 'center',
        marginTop: 20,
    },
    avatar: {
        width: 120,
        height: 120,
        borderRadius: 100,
    },
    menuContainer: {
        marginVertical: 30,
        marginHorizontal: 50,
    },
    menuBoton: {
        marginVertical: 20
    },
    menuTexto: {
        fontSize: 20,
    },
});

export const DefaultTheme = {
    colors: {
        primary: 'rgb(0, 104, 116)',
        onPrimary: 'rgb(255, 255, 255)',
        primaryContainer: 'rgb(151, 240, 255)',
        onPrimaryContainer: 'rgb(0, 31, 36)',
        secondary: 'rgb(74, 98, 103)',
        onSecondary: 'rgb(255, 255, 255)',
        secondaryContainer: '#FF69B4',
        onSecondaryContainer: 'rgb(5, 31, 35)',
      }
}