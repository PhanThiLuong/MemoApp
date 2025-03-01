import { Redirect, router} from "expo-router";
import React from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../config";
import { useEffect } from "react";
import * as SplashScreen  from 'expo-splash-screen';


const Index = () => {
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user !== null) {
                router.replace('/memo/list')
            } 
          });

            // Simulate some loading process, then hide splash screen
        setTimeout(async () => {
            await SplashScreen.hideAsync();
        }, 3000);  // Hiển thị splash screen trong 3 giây
    },[])
    return <Redirect href='auth/log_in'/>
}


export default Index