import { View,StyleSheet,FlatList} from "react-native";
import React from "react";
import MemoListItem from "../../components/MemoListItem";
import CircleButton from "../../components/CircleButton";
import  Icon from "../../components/Icon";
import { router, useNavigation } from "expo-router";
import { useEffect, useState } from "react";
import LogOutButton from "../../components/LogOutButton";
import { collection, onSnapshot, query, orderBy} from "firebase/firestore";
import { db, auth } from "../../config";
import {type Memo} from "../../../types/memo";

const handlePress = () =>{
        router.push('/memo/create')
}
const List = () =>{
    const [memos, setMemos] = useState<Memo[]>([])
    const navigation = useNavigation()
    useEffect(()=>{
        navigation.setOptions({
            headerRight:() => {
                return <LogOutButton/>
            }
        })
    },[])

    useEffect(() => {
        if(auth.currentUser===null){
            return
        }
        const ref = collection(db, `users/${auth.currentUser.uid}/memos`);
        const q = query(ref, orderBy('updateAt', 'desc'));
        const unsubscribe = onSnapshot(q, (snapshot) => {
            const remoteMemos : Memo[]=[]
            snapshot.forEach((doc) => {
                const {bodyText, updateAt} = doc.data()
                remoteMemos.push({
                    id: doc.id, 
                    bodyText,
                    updateAt
                })
            })
            setMemos(remoteMemos)
        })
        return unsubscribe
      }, []);

    return(
        <View style={styles.container}>
            <FlatList 
            data={memos}
            renderItem={({item}) => <MemoListItem memo={item}/>}
            />
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

export default List