import Header from "@/components/Header";
import MyPost from "@/components/MyPost";
import Feather from "@expo/vector-icons/Feather";
import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import {
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function profile() {
  return (
    <SafeAreaView>
      <StatusBar backgroundColor="#132639" barStyle="light-content" />
      <Header />

      <ScrollView style={{ padding: 10 }}>
        <View>
          <View style={{ flexDirection: "row", gap: 6 }}>
            <Image
              source={require("@/assets/posts/avatar.jpg")}
              style={styles.avatar}
            />

            <View>
              <Text style={{ fontWeight: "bold", fontSize: 20 }}>Gaurav</Text>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 4,
                  marginTop: 6,
                }}
              >
                <Feather name="send" size={12} />
                <Text>Mayur Vihar, Delhi</Text>
              </View>
              <View
                style={{ flexDirection: "row", alignItems: "center", gap: 4 }}
              >
                <Ionicons name="briefcase" size={12} />
                <Text>Influencer and Dancer</Text>
              </View>
            </View>

            <Text
              style={[
                styles.button,
                {
                  position: "absolute",
                  top: 10,
                  right: 10,
                },
              ]}
            >
              Edit
            </Text>
          </View>

          <View
            style={{
              marginTop: 20,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text style={[styles.button, { width: 70 }]}>Trash</Text>

            <View style={{flexDirection:"row"}}>
              <View style={{ alignItems: "center" }}>
                <Text>4</Text>
                <Text style={{ fontSize: 12, color: "#ccc" }}>Feed</Text>
              </View>
              <View style={{borderWidth:0.5, marginHorizontal: 5, borderColor:"#ccc"}}></View>
              <View style={{ alignItems: "center" }}>
                <Text>2823</Text>
                <Text style={{ fontSize: 12, color: "#ccc" }}>Followers</Text>
              </View>
              <View style={{borderWidth:0.5, marginHorizontal: 5, borderColor:"#ccc"}}></View>
              <View style={{ alignItems: "center" }}>
                <Text>456</Text>
                <Text style={{ fontSize: 12, color: "#ccc" }}>Following</Text>
              </View>
              <View style={{borderWidth:0.5, marginHorizontal: 5, borderColor:"#ccc"}}></View>
              <View style={{ alignItems: "center" }}>
                <Text>8</Text>
                <Text style={{ fontSize: 12, color: "#ccc" }}>Blocked</Text>
              </View>
            </View>
          </View>

          <View style={{flexDirection:"row", justifyContent:"space-between", marginTop:20}}>
            <Text style={{fontWeight:"bold", fontSize: 20}}>About me</Text>
            <View style={{flexDirection:"row", gap:8}}>
              <Text style={styles.button}>Drafts</Text>
              <Text style={styles.button}>History</Text>
            </View>
            
          </View>
        </View>

        <MyPost />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  avatar: {
    width: 70,
    height: 70,
    resizeMode: "cover",
    borderRadius: 50,
    margin: 5,
  },
  button: {
    backgroundColor: "#19334d",
    color: "white",
    borderRadius: 20,
    height: 30,
    paddingVertical: 5,
    paddingHorizontal: 16,
  },
});
