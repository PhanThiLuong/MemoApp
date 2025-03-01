import {View,TextInput, StyleSheet, Alert} from "react-native";    
import React from "react";
import CircleButton from "../../components/CircleButton";
import Icon from "../../components/Icon";
import { router, useLocalSearchParams } from "expo-router";
import {useState, useEffect} from "react";
import {doc,getDoc,setDoc,Timestamp} from "firebase/firestore";
import { auth,db } from "../../config";
import KeyboardAvoidingView from "../../components/KeyboardAvoidingView";

const handlePress = (id:string,bodyText:string) => {
    if (auth.currentUser===null){return}
    const ref = doc(db,`users/${auth.currentUser.uid}/memos`,id)
    setDoc(ref,{bodyText,updateAt:Timestamp.fromDate(new Date())})
    .then(() => {
        router.back()
    })    
    .catch((error) => {
        console.log(error)
        Alert.alert("更新失敗しました。")
    })
}
const Edit =() => {
    const id= String(useLocalSearchParams().id);
    const [bodyText, setBodyText] = useState('');
    useEffect(() => {
        if(auth.currentUser===null){return}
        const ref = doc(db,`users/${auth.currentUser.uid}/memos`, id)
        getDoc(ref)
        .then((docRef) => {
            const RemoteBodyText= docRef?.data()?.bodyText
            setBodyText(RemoteBodyText)
        })
        .catch((error) => {
            console.log(error)
        })
    },[])
    return (
        <KeyboardAvoidingView style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput 
                value={bodyText}
                style={styles.input} 
                multiline
                onChange={(text) => {setBodyText(text.nativeEvent.text)}}
                autoFocus
                />
            </View>
            <CircleButton onPress={()=>{handlePress(id,bodyText)}}>
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
export default Edit