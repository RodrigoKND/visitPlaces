import { Link } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import { View, Text } from "react-native-web";

export default function Useroptions({ isSeen }) {
    return (
        isSeen
            ?
            (
                <View style={styleOptions.contain__options}>
                    <Link to='/Profile' style={styleOptions.contain__option}>
                        <Text>Perfil</Text>
                    </Link>
                    <Link to='/MyPlacesFavorites' style={styleOptions.contain__option}>
                        <Text>Mis lugares</Text>
                    </Link>
                    <Link to='/Home' style={styleOptions.contain__option}>
                        <Text>Cerrar sesión</Text>
                    </Link>
                </View>
            )
            : null
    );
}

const styleOptions = StyleSheet.create({
    contain__options: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        marginRight: 5,
    },
    contain__option: {
        padding: 10,
        borderBottomColor: 'purple',
        borderBottomWidth: 1,
        textAlign: 'center'
    }
})