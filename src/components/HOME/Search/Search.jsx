import { Button, TextInput, View, StyleSheet } from "react-native";

export default function Search() {
    return (
        <View style={styles.search}>
            <TextInput
                placeholder='Buscar lugares o categorias'
                style={styles.search__input}
                autoComplete='off' />
            <Button title='Buscar' color="#841584" />
        </View>
    );
}

const styles = StyleSheet.create({
    search: {
        padding: 20,
        backgroundColor: '#f2f2f2'
    },
    search__input: {
        marginVertical: 10,
        padding: 10,
        borderColor: '#451093',
        borderRadius: 7,
        borderWidth: 1
    }
})