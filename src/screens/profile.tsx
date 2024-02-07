import React from 'react';
import { Dimensions, Image, ImageStyle, StyleSheet, Text, TextInput, TextStyle, View, ViewStyle } from "react-native"
import { getScale } from '../utils/ViewUtils';
import { useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { CharactersStackParamList } from '../../App';

type Props = NativeStackScreenProps<CharactersStackParamList, 'Profile'>;
type ProfileScreenRouteProperties = Props['route'];

export const Profile = () => {

    const [text, setText] = React.useState('')
    const route = useRoute<ProfileScreenRouteProperties>();
    const navigation =  useNavigation();
    const {character} = route.params; //Recibe el objecto character mediante el hook route.
    const { width } = Dimensions.get('screen');

    React.useEffect(() => {
        if (route.params.character){
            navigation.setOptions({
                title: route.params.character.name,
            })
        }
    }, [route]);

    return (
        <View style={style.mainContainer}>
            <View style={style.imageContainer}>
                <Image style={style.image} source={{ uri: character.image }}></Image>
            </View>
            <View style={style.textInput}>
                <Text style={style.TextInputPlaceHolder}>Name*</Text>
                <TextInput style={style.textInput} underlineColorAndroid={'black'} caretHidden maxLength={10} value={text} onChangeText={setText}></TextInput>
            </View>
        </View>
    )
};

const style = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 18,
    } as ViewStyle,
    title: {
        paddingBottom: getScale(20),
        fontSize: 20,
        textTransform: 'uppercase',
        fontWeight: '900',
        letterSpacing: 8,
        color: 'black'
    } as TextStyle,
    image: {
        width: getScale(75),
        height: getScale(75),
        borderRadius: 38
    } as ImageStyle,
    textInput: {
        width: '100%',
    } as TextStyle,
    textInputContainer: {
        width: '100%',
    } as ViewStyle,
    TextInputPlaceHolder: {
        fontSize: 10,
        color: '#00cc99',
        textTransform: 'uppercase',
        fontWeight: 'bold'
    } as TextStyle,
    imageContainer: {
        backgroundColor: '#E76D83',
        width: getScale(100),
        height: getScale(100),
        alignItems: 'center', //Alinia el eje X
        justifyContent: 'center', //Alinia el eje Y
        borderRadius: 50
    } as ViewStyle
})