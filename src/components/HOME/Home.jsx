import { View } from "react-native-web";
import Header from "./Header/Header";
import Search from "./Search/Search";
import Menu from "../Menu/Menu";
import Cards from "../Cards/Cards";

export default function Home(){
    return(
        <View>
            <Header/>
            <Search/>
            <Menu/>
            <Cards/>
        </View>
    );
}