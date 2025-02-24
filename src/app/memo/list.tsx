import { View} from "react-native";
import React from "react";
import { StyleSheet } from 'react-native';
import MemoListItem from "../../components/MemoListItem";
import CircleButton from "../../components/CircleButton";
import  Icon from "../../components/Icon";
import { router, useNavigation } from "expo-router";
import { useEffect } from "react";
import LogOutButton from "../../components/LogOutButton";

const handlePress = () =>{
        router.push('/memo/create')
}
const Index = () =>{
    const navigation = useNavigation()
    useEffect(()=>{
        navigation.setOptions({
            headerRight:() => {
                return <LogOutButton/>
            }
        })
    },[])

    return(
        <View style={styles.container}>
            <MemoListItem/>
            <MemoListItem/>
            <MemoListItem/>
                <CircleButton onPress={handlePress}>
                    <Icon name='plus' size={40} color='#fff'/>
                </CircleButton>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#fff',
    },

})

export default Index