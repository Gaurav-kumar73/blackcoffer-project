import data from "@/data/data";
import Feather from '@expo/vector-icons/Feather';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

// Map image filenames to their require calls
const images: { [key: string]: any } = {
  "technology.jpeg": require("@/assets/posts/technology.jpeg"),
  "fashion.jpg": require("@/assets/posts/fashion.jpg"),
  "car.jpg": require("@/assets/posts/car.jpg"),
  "dance.jpeg": require("@/assets/posts/dance.jpeg"),
  // Add more mappings as needed
};

export default function MyPost() {
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      {data.map((item: any, idx: number) => (
        <View key={item.id ?? idx} style={styles.postcontainer}>
            
          <Image
            source={images[item.imageUrl]}
            style={styles.image}
          />

          <View style={{paddingHorizontal:10}}>
            <View style={{flexDirection:"row", justifyContent:"space-between",marginTop:5}}>
                <Text>{item.date}</Text>
                <Text>{item.category} | {item.views} views</Text>
            </View>
            <Text>{item.description}</Text>

            <View style={{flexDirection:"row", gap:15, alignItems:"center", paddingVertical:5}}>
                <Ionicons name="heart-outline" size={24}/>
                <Ionicons name="share-social-outline" size={24}/>
                <FontAwesome name="comment-o" size={24}/>
            </View>

            <View style={{flexDirection:"row", gap:5, alignItems:"center", marginBottom:10}}>
                <Feather name="send" size={24}/>
                <Text>Adarsh Nagar, Najibabad, Moradabad Division, Uttar Pradesh, 246763, India</Text>
            </View>
            
          </View>


        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginTop: 25,
  },
  postcontainer: {
    borderRadius: 10,
    backgroundColor: "white",
    marginBottom: 12,
  },
  avatar: {
    width: 50,
    height: 50,
    resizeMode: "cover",
    borderRadius: 50,
    margin: 5,
  },
  image: {
    width: "100%",
    height: 300,
    resizeMode: "cover",
  },
});
