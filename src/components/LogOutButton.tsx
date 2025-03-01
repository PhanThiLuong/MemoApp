import { TouchableOpacity, Text, StyleSheet, Alert} from "react-native";
import React from "react";
import { router } from "expo-router";
import { signOut } from "firebase/auth";
import { auth } from "../config";

const handlePress = () => {
    signOut(auth).then(() => {
        router.replace('/auth/log_in')
    }).catch(() => {
        Alert.alert("ログアウト失敗しました。")
    })
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