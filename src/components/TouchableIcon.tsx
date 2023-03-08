import { useContext } from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import { AuthContext } from '../context/AuthContext';

interface Props {
    iconName: string;
    iconColor: string;
}

export const TouchableIcon = ( { iconName, iconColor }: Props) => {
  
    const { changeFavoriteIcon } = useContext( AuthContext )
  
    return (
    <TouchableOpacity
        onPress={ () => changeFavoriteIcon(iconName) }
    >
        <Icon 
            name={ iconName } 
            size={ 80 } 
            color={ iconColor }
        /> 
    </TouchableOpacity>
  )
}
