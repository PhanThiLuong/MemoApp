import { View,Text,StyleSheet,TextInput,TouchableOpacity, Alert } from "react-native";
import React, { useState } from "react";
import Button from "../../components/Button";
import { Link, router } from "expo-router";
import { auth } from "../../config";
import { createUserWithEmailAndPassword } from "firebase/auth";

const handlePress = (email:string, password:string) :void => {
    // 会員登録
    console.log(email,password)
    createUserWithEmailAndPassword(auth,email,password).then((userCredential) => {
        console.log(userCredential.user.uid)
        router.replace('/memo/list')
    }).catch((error) => {
        const {code,message}=error
        console.log(code,message)
        Alert.alert(message)
    })
    router.replace('/memo/list')
}
const SignUp = () => {
    const [email,setEmail]= useState('')
    const [password,setPassword]= useState('')
    return(
        <View style={styles.container}>
            <View style={styles.inner}>
                <Text style={styles.title}>Sign Up</Text>
                <TextInput 
                style={styles.input} 
                value={email}
                onChangeText={(text) => setEmail(text)}
                autoCapitalize="none"
                placeholder="Email Address"
                textContentType="emailAddress"
                keyboardType="email-address"
                />
                <TextInput 
                style={styles.input} 
                value={password}
                onChangeText={(text) => setPassword(text)}
                autoCapitalize="none"
                secureTextEntry
                placeholder="Password"
                textContentType="password"
                />
            <Button label="Submit" onPress={()=>{handlePress(email,password)}}/>
            <View style={styles.footer}>
                <Text style={styles.footerText}>Already registered?</Text>
                <Link href="/auth/log_in" asChild>
                <TouchableOpacity>
                <Text style={styles.footerLink}>Log in</Text>
                </TouchableOpacity>
                </Link>
            </View>
            </View>
         </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    inner:{
        paddingVertical:32,
        paddingHorizontal:27
    },
    title:{
        fontSize:24,
        lineHeight:32,
        fontWeight:'bold',
        marginBottom:24,
    },
    input:{
        borderWidth:1,
        borderColor:'#ddd',
        backgroundColor:'#fff',
        height:48,
        padding:8,
        fontSize:16,
        borderRadius:4,
        paddingVertical:16,
        paddingHorizontal:16,
        marginBottom:16
    },
    footer:{
        flexDirection:'row',
        paddingVertical:16
    },
    footerText:{
        fontSize:16,
        lineHeight:32,
        marginRight:8,
        color:'#000'
    },
    footerLink:{
        fontSize:16,
        lineHeight:32,
        color:'#2B92E6'
    }
})
export default SignUp