import { ActivityIndicator, FlatList, ScrollView, StyleSheet, Text, View, ViewStyle } from "react-native"
import { getScale } from "../utils/ViewUtils"
import React from "react";
import { getCharacters } from "../api/RickAndMortyApiAlt";
import { Character } from "../api/entities/CharactersResponse";
import { CharacterTile } from "../components/characters/CharacterTile";
import { StackActions, useNavigation } from "@react-navigation/native";


export const Characters = () => {

    const [characters, setCharacters] = React.useState<Character[]>([]);
    const navigation = useNavigation();

    //Use AXIOS
    React.useEffect(() => {
        const apiCall = async () => {
            const response = await getCharacters(); // Call method AXIOS
            setCharacters(response.data.results);
        };
        apiCall();
    }, []);


    const onItemPressed = (character: Character) => () => {
        // navigation.navigate('Profile');
        navigation.dispatch(StackActions.push('Profile', { character })); // Enviamos a Profile el objeto JSON Charactwer.
    }

    return (
        <View style={style.mainContainer}>
            {characters.length > 0 ? (
                <FlatList
                    data={characters}
                    renderItem={({ item }) =>
                        <CharacterTile characterInfo={item} onPress={onItemPressed(item)} />}
                    keyExtractor={character => `${character.id}`}
                />
            ) : (
                <View style={style.loaderCOntainer}>
                    <ActivityIndicator size={'large'} color={'blue'} />
                    <Text style={style.loaderMessage}>Getting Characters</Text>
                </View>
            )}
        </View>
    );
};

const style = StyleSheet.create({
    mainContainer: {
        flex: 1,
        paddingHorizontal: getScale(12),
        paddingVertical: getScale(12),
    } as ViewStyle,
    loaderCOntainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    } as ViewStyle,
    loaderMessage: {
        fontSize: getScale(15),
        fontWeight: '500',
    } as ViewStyle,
});