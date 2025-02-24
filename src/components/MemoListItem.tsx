import {View, Text, TouchableOpacity,StyleSheet} from "react-native";
import React from "react";
import Icon from "./Icon";
import { Link } from "expo-router";

const MemoListItem = () => {
    return(
        <Link href="/memo/detail" asChild>
           <TouchableOpacity>
           <View style={styles.memoListItem}>
            <View>
                <Text style={styles.memoListItemTitle}>買い物リスト</Text>
                <Text style={styles.memoListItemDate}>2023年10月4日 10:00</Text>
            </View>
            <TouchableOpacity>
            <Icon name='delete' size={40} color='#b0b0b0'/>
            </TouchableOpacity>
        </View>
           </TouchableOpacity>
        </Link>

    )
}
const styles = StyleSheet.create({
    memoListItem:{
        backgroundColor: '#fff',
        flexDirection:'row',
        justifyContent:'space-between',
        paddingVertical:16,
        paddingHorizontal:19,
        alignItems:'center',
    },
    memoListItemTitle:{
        fontSize:16,
        lineHeight:32,
    },
    memoListItemDate:{
        fontSize:12,
        lineHeight:16,
        color:'#848484',
    },
})

export default MemoListItem