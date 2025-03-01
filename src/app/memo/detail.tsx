import { View,Text,StyleSheet, ScrollView } from "react-native";
import React, { useState,useEffect } from "react";
import CircleButton from "../../components/CircleButton";
import Icon from "../../components/Icon";
import { router, useLocalSearchParams } from "expo-router";
import { type Memo } from "../../../types/memo";
import { auth, db } from "../../config";
import { doc, onSnapshot } from "firebase/firestore";

const handlePress = (id:string):void => {
    router.push({pathname:'/memo/edit',params:{id}})
}
const Detail = () => {
    const id = String(useLocalSearchParams().id);
    const [memo,setMemo]= useState<Memo|null>(null)
    useEffect(() => {
        if(auth.currentUser===null){return}
        const ref = doc(db,`users/${auth.currentUser.uid}/memos`, id)
        const unsubscribe = onSnapshot(ref,(memoDoc)=>{
            const {bodyText,updateAt}=memoDoc.data() as Memo
            setMemo({
                id:memoDoc.id,
                bodyText,
                updateAt
            })
        })
        return unsubscribe
    },[])
    return(
        <View style={styles.container}>
            <View style={styles.memoHeader}>
                <Text style={styles.memoTitle} numberOfLines={1}>{memo?.bodyText}</Text>
                <Text style={styles.memoDate}>{memo?.updateAt?.toDate().toLocaleDateString('ja-JP')}</Text>
            </View>
            <ScrollView style={styles.memoBody}>
            <Text style={styles.memoBodyText}>
                {memo?.bodyText}
            </Text>
            </ScrollView>
            <CircleButton onPress={()=>handlePress(id)} style={{top:160, bottom:'auto'}}>
             <Icon name='pencil' size={40} color='#fff'/>
            </CircleButton>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#fff',
    },
    memoHeader:{
        backgroundColor: '#2B92E6',
        height:96,
        justifyContent:'center',
        paddingVertical:24,
        paddingHorizontal:19,
    },
    memoTitle:{
        color: '#fff',
        fontSize:20,
        lineHeight:32,
        fontWeight:'bold',
    },
    memoDate:{
        color: '#fff',
        fontSize:12,
        lineHeight:16,
    },
    memoBody:{  
        paddingVertical:32,
        paddingHorizontal:27,
    },
    memoBodyText:{
        fontSize:16,
        lineHeight:24,
        color: '#000',
        marginBottom:32,
        
    }
})
export default Detail