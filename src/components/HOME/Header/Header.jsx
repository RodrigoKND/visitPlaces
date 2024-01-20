import react from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import Useroptions from '../Useroptions/Useroptions';

export default function Header() {
    const [isHidden, setIsHidden] = react.useState(false);
    const [countPress, setCountPress] = react.useState(0);
    const showUserOptions = () => {
        setIsHidden(true);
        setCountPress(countPress + 1);
        if (countPress >= 1) {
            setCountPress(0);
            setIsHidden(false);
        }
    }
    return (
        <View style={styleHeader.header}>
            <Text style={styleHeader.header__logo}>PlaceLink</Text>
            <Useroptions isSeen={isHidden} />
            <Pressable onPress={showUserOptions}>
                <Image source={{
                    uri: 'https://media.istockphoto.com/id/1317774330/es/foto/foto-de-una-mujer-con-el-pelo-rizado-posando-sobre-un-fondo-naranja.jpg?s=612x612&w=0&k=20&c=0PoFQnOaGg83zG1FOYyTM1PYKc9QduY35qC5Bc2TWns='
                }} style={styleHeader.header__profile}
                />
            </Pressable>
        </View>
    );
}

const styleHeader = StyleSheet.create({
    header: {
        backgroundColor: 'purple',
        padding: 15,
        flexDirection: 'row',
    },
    header__logo: {
        flex: 1,
        color: 'lightblue',
        fontSize: 25,
        marginVertical: 7,
        fontWeight: 500,
    },

    header__profile: {
        width: 50,
        height: 50,
        borderRadius: 30,
        objectFit: 'cover',
    }
})