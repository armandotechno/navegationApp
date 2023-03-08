import { View, Text } from "react-native"
import { StackScreenProps } from '@react-navigation/stack';
import { useEffect, useContext } from 'react';

import { RootStackParams } from '../navigator/StackNavigator';
import { styles } from '../theme/appTheme';
import { AuthContext } from '../context/AuthContext';

interface Props extends StackScreenProps<RootStackParams, 'PersonaScreen'>{};

export const PersonaScreen = ( { navigation, route }: Props ) => {

    const params = route.params;

    const { changeUsername } = useContext( AuthContext )

    useEffect(() => {
        navigation.setOptions({
            title: params.nombre
        })
    }, [])

    useEffect(() => {
        changeUsername( params.nombre )
    },[])

    return (
      <View style={ styles.globalMargin }>
        <Text style={ styles.title }>
            {
                JSON.stringify( params, null, 3 )
            }
        </Text>
      </View>
    )
}
