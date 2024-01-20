import { StyleSheet, Text, ScrollView, Pressable } from "react-native";

export default function Menu() {
    return (
        <ScrollView style={styleMenu.container__menu}
            horizontal={true} showsHorizontalScrollIndicator={false} >
            <Pressable>
                <Text style={styleMenu.container__textButton}>
                    Todo
                </Text>
            </Pressable>
            <Pressable>
                <Text style={styleMenu.container__textButton}>
                    Naturaleza y Geografia
                </Text>
            </Pressable>
            <Pressable>
                <Text style={styleMenu.container__textButton}>
                    Urbano y Arquitectura
                </Text>
            </Pressable>
            <Pressable>
                <Text style={styleMenu.container__textButton}>
                    Ocio y entretenimiento
                </Text>
            </Pressable>
            <Pressable>
                <Text style={styleMenu.container__textButton}>
                    Comida y Bebida
                </Text>
            </Pressable>
            <Pressable>
                <Text style={styleMenu.container__textButton}>
                    Deporte y Actividad
                </Text>
            </Pressable>
            <Pressable>
                <Text style={styleMenu.container__textButton}>
                    Cultura
                </Text>
            </Pressable>
            <Pressable>
                <Text style={styleMenu.container__textButton}>
                    Otros
                </Text>
            </Pressable>
        </ScrollView>
    );
}

const styleMenu = StyleSheet.create({
    container__menu: {
        flexDirection: 'row',
    },
    container__textButton: {
        padding: 15,
        color: '#9147FF',
        marginVertical: 5,
        marginHorizontal: 5,
        fontWeight: 500
    }
})