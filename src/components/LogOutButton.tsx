import { TouchableOpacity, Text, StyleSheet} from "react-native";
import React from "react";
import { router } from "expo-router";

const handlePress = () => {
    router.replace('/auth/log_in')
}
const LogOutButton = () => {
    return (    
        <TouchableOpacity onPress={handlePress}>
            <Text style={styles.text}>ログアウト</Text>
        </TouchableOpacity>                    
    )
}

const styles = StyleSheet.create({
    text: {
     fontSize: 12,
     lineHeight: 24,   
     color: 'rgba(225, 225, 225, 0.7)',
    }
})

export default LogOutButton