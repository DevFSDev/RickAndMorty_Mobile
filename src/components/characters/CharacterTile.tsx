import { Image, ImageStyle, StyleSheet, Text, TextStyle, TouchableOpacity, View, ViewStyle } from "react-native";
import { Character, Status } from "../../api/entities/CharactersResponse";
import { getScale } from "../../utils/ViewUtils";

export interface CharacterTileProperties {
    characterInfo: Character;
    onPress: () => void;
}

export const StatusIndicator = (props: { status: string }) => {
    const { status } = props;
    return (
        <View style={{ width: getScale(10), height: getScale(10), borderRadius: getScale(5), backgroundColor: status === 'Alive' ? 'green' : status === 'Dead' ? 'red' : 'gray' }} />

    )
}

export const DataTile = (props: { title: string; content: string }) => {
    const { title, content } = props;

    return (
        <View>
            <Text style={style.descriptionTitleText}>{title}</Text>
            <Text style={style.descriptionContentText}>{content}</Text>
        </View>
    )
}

export const CharacterTile = (props: CharacterTileProperties) => {
    const { characterInfo, onPress } = props;
    return (
        <TouchableOpacity style={style.mainContainer} key={characterInfo.id} onPress={onPress}>
            <Image source={{ uri: characterInfo.image }} style={style.image} />
            <View>
                <Text style={style.nameText}>{characterInfo.name}</Text>
                <View style={style.statusContainer}>
                    <StatusIndicator status={characterInfo.status} />
                    <Text style={style.statusText}>{`${characterInfo.status} - ${characterInfo.species} `}</Text>
                </View>
                <DataTile title={"Last known location: "} content={characterInfo.location.name} />
                <DataTile title={"First seen in: "} content={characterInfo.origin.name} />
            </View>
        </TouchableOpacity>
    )
};

const style = StyleSheet.create({
    mainContainer: {
        paddingVertical: getScale(8),
        width: '100%',
        maxHeight: getScale(100),
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: getScale(4),
    } as ViewStyle,
    image: {
        width: getScale(80),
        height: getScale(80),
        borderRadius: getScale(40),
        marginRight: getScale(40),
    } as ImageStyle,
    statusContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    } as ViewStyle,
    statusText: {
        marginLeft: getScale(4),
        fontSize: getScale(12),
    } as TextStyle,
    descriptionTitleText: {
        fontSize: getScale(10),
        fontWeight: '500',
    } as TextStyle,
    descriptionContentText: {
        fontSize: getScale(12),
        fontWeight: '500',
    } as TextStyle,
    nameText: {
        fontSize: getScale(16),
        fontWeight: 'bold',
    } as TextStyle,
});