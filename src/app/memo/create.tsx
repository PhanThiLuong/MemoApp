import {View,TextInput, StyleSheet, KeyboardAvoidingView} from "react-native";    
import React from "react";
import CircleButton from "../../components/CircleButton";
import Icon from "../../components/Icon";
import { router } from "expo-router";

const handlePress = () => {
    router.back()
}
const Create =() => {
    return (
        <KeyboardAvoidingView behavior='height' style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput value=""  style={styles.memoEditTitleInput} multiline/>
            </View>
            <CircleButton onPress={handlePress}>
                <Icon name='check' size={40} color='#fff'/>
            </CircleButton>
        </KeyboardAvoidingView>
    )
    
}
const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#fff', 
    },
    inputContainer: {
        flex:1,
        backgroundColor: '#fff',
    },
    input:{
        flex:1,
        textAlignVertical:'top',
        paddingVertical:32,
        paddingHorizontal:27,
        fontSize:16,
        lineHeight:32,  
    },
    memoEditTitleInput: {
        fontSize:16,
        lineHeight:32,
        paddingVertical:32,
        paddingHorizontal:27,
    }
})
export default Create