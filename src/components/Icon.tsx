import { createIconSetFromIcoMoon } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import fontData from "../../assets/fonts/icomoon.ttf";  
import fontSelection from "../../assets/fonts/selection.json";
import React from "react";

const CustomIcon = createIconSetFromIcoMoon(
    fontSelection,
    'IconMoon',
    'icomoon.ttf'
)

interface Props{
    name: string
    size: number
    color: string
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Icon = (props: Props): JSX.Element | null => {
    const {name, size, color} = props
    const [fontLoaded] = useFonts({
        IconMoon: fontData
    })
    if (!fontLoaded) {
        return null
    }

    return(
        <CustomIcon name={name} size={size} color={color} />

    )
}
export default Icon