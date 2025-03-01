import {View,TextInput, StyleSheet} from "react-native";    
import KeyboardAvoidingView from "../../components/KeyboardAvoidingView";
import React from "react";
import CircleButton from "../../components/CircleButton";
import Icon from "../../components/Icon";
import { router } from "expo-router";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { auth, db } from "../../config";
import { useState } from "react";

const handlePress = (bodyText:string):void  => {
    if (auth.currentUser===null){
        return
    } 
    const ref = collection(db,`users/${auth.currentUser.uid}/memos`);
    addDoc(ref,{
        bodyText,
        updateAt: Timestamp.fromDate(new Date()),
    }).then((docRef) => {
        console.log("success",docRef.id)
        router.back()
    }).catch((error) => {
        console.log(error)
    })
}
const Create =() => {
    const [bodyText, setBodyText] = useState("");
    return (
        <KeyboardAvoidingView style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput 
                value={bodyText}  
                style={styles.input} 
                multiline
                onChangeText={(text)=>{setBodyText(text)}}
                autoFocus
                />
            </View>
            <CircleButton onPress={()=>handlePress(bodyText)}>
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