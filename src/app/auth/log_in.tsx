import { View,Text,StyleSheet,TextInput,TouchableOpacity } from "react-native";
import React from "react";
import Button from "../../components/Button";
import {Link, router} from "expo-router";
import { useState } from "react";
const handlePress = () :void => {
    // login
    router.replace('/memo/list')
}

const Login = () => {
    const [email,setEmail]= useState('')
    const [password,setPassword]= useState('')

    return(
        <View style={styles.container}>
            <View style={styles.inner}>
                <Text style={styles.title}>Log In</Text>
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
            <Button label="Submit" onPress={handlePress}/>
            <View style={styles.footer}>
                <Text style={styles.footerText}>Not registered?</Text>
                <Link href="/auth/sign_up" asChild>
                <TouchableOpacity>
                <Text style={styles.footerLink}>Sign up here!</Text>
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
export default Login