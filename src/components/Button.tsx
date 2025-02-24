import { Text,StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

interface Props{
    label: string,
    onPress?: () => void
}
const Button = (props: Props) => {
    const{label, onPress} =props
    return(
        <TouchableOpacity onPress={onPress} style={styles.button}>
            <Text style={styles.buttonLabel}>{label}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button:{
        backgroundColor:'#2B92E6',
        borderRadius:4,
        alignSelf:'flex-start',
    },
    buttonLabel:{  
        fontSize:16,
        lineHeight:32,
        fontWeight:'bold',
        color:'#fff',
        paddingVertical:8,
        paddingHorizontal:32,
    },
})

export default Button