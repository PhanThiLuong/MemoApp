import { Text, StyleSheet, type ViewStyle, TouchableOpacity} from "react-native";
import React, { ReactElement } from "react";

interface Props{
    children: ReactElement,
    style?: ViewStyle,
    onPress?: () => void
}
const CircleButton = (props: Props) => {
    const {children, style, onPress} =props
    return(
            <TouchableOpacity  onPress={onPress} style={[styles.circleButton, style]}>
                <Text style={styles.circleButtonLabel}>{children}</Text>
            </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    circleButton:{
        width:64,        
        height:64,
        borderRadius:32,
        backgroundColor: '#2B92E6',
        justifyContent:'center',
        alignItems:'center',    
        position:'absolute',
        right:40,
        bottom:40,
        shadowColor:'#000',
        shadowOpacity:0.25,
        shadowRadius:8,
        shadowOffset:{
            width:0,
            height:4    
        },
        elevation:4,
    },
    circleButtonLabel:{
        color: '#fff',
        fontSize:40,    
        lineHeight:48,
    }
})

export default CircleButton