import Ionicons from '@expo/vector-icons/Ionicons'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Header() {
  return (
    <View style={styles.container}>
      <Ionicons name='menu' size={30} style={{color:"white"}}/>
      <Text style={{color:"white", fontWeight:"bold", fontSize:30}}>BWstory</Text>
      <Ionicons name='search' size={28} style={{color:"white"}}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    paddingHorizontal:10,
    height:60,
    backgroundColor:"#19334d"
  }
})