import { Dimensions } from "react-native";

const {width} = Dimensions.get('window');

const rem = width / 380;

export const getScale = (dp: number) => dp * rem;