import { View,Text,StyleSheet } from "react-native";
import React from "react";

const Hello = () =>{
    return(
        <View>
            <Text style={styles.text}>Hello</Text>
        </View>
    )
}
const styles = StyleSheet.create(
    {
        text: {
            color:'#ffffff',
            backgroundColor:'pink',
            fontSize:40,
            fontWeight:'bold',
            padding:16
    
        }
    }
)

export default Hello