import { View, Image, Text, StyleSheet, FlatList } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link } from "@react-navigation/native";
const DATA = [
    {
        id: '1',
        img: 'https://www.comparaonline.cl/blog-statics/cl/uploads/2017/03/lugares-turisticos-bolivia-ppal.jpg',
        title: 'Plaza principal',
        content: 'La ciudad que nunca duerme, llena de rascacielos y luces.'
    },
];

export default function Cards() {
    return (
        <FlatList data={DATA}
            renderItem={({ item }) => {
                return (
                    <View style={stylesCards.container__card}>
                        <Link to='/detailPlace'>
                            <Image source={{ uri: item.img }}
                                style={stylesCards.container__image}
                            />
                            <View style={stylesCards.container__body}>
                                <Text style={stylesCards.container__text}>
                                    {item.title}
                                </Text>
                                <Text style={{
                                    color: '#666',
                                    marginTop: 7
                                }}>{item.content}</Text>
                                <View style={stylesCards.container__stars}>
                                    <FontAwesome name='star' size={25} color='#FF385C'></FontAwesome>
                                    <FontAwesome name='star' size={25} color='#FF385C'></FontAwesome>
                                    <FontAwesome name='star' size={25} color='#FF385C'></FontAwesome>
                                </View>
                            </View>
                        </Link>
                    </View>
                );
            }}
            keyExtractor={(item) => item.id}
        />
    );
}

const stylesCards = StyleSheet.create({
    container__card: {
        marginTop: 4,
    },
    container__image: {
        width: '100%',
        height: 200,
        objectFit: 'cover',
        borderRadius: 10,
    },
    container__body: {
        padding: 15,
    },
    container__text: {
        fontWeight: 700,
        fontSize: 20
    },
    container__stars: {
        marginTop: 10,
        flexDirection: 'row'
    }
})  