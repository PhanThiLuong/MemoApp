import {Stack} from "expo-router";
import React from "react";

const Layout = () => {
    return <Stack screenOptions={{
        headerStyle:{
            backgroundColor: '#2B92E6',
            
        },
        headerTintColor: '#fff',
        headerTitle: 'Memo App',
        headerBackTitle: 'Back',
        headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 22,
        },
        headerTitleAlign: "center"
        

    }}/>
};
export default Layout