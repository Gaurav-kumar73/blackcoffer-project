import Post from "@/components/AllPost";
import Header from "@/components/Header";
import { useState } from "react";
import { Pressable, ScrollView, StatusBar, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const categories = [
  { id: 1, name: "All" },
  { id: 2, name: "Entertaiment" },
  { id: 3, name: "Lifestyle" },
  { id: 4, name: "Sports" },
  { id: 5, name: "Technology" },
  { id: 6, name: "Government" },
  { id: 7, name: "Business" },
];

export default function Index() {
  const [activeCategory, setCategory] = useState(1); // Default to first category

  return (
    <SafeAreaView style={{ backgroundColor: "#e6e6e6" }}>
      <StatusBar backgroundColor="#132639" barStyle="light-content" />

      <Header />

      {/* Categories */}
      <View
        style={{
          paddingHorizontal: 20,
          backgroundColor: "#ccc",
          borderBottomWidth: 1,
          borderColor: "#ccc",
        }}
      >
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ marginVertical: 10 }}
        >
          {categories.map((category) => (
            <Pressable
              key={category.id}
              onPress={() => setCategory(category.id)}
              style={[
                {
                  paddingHorizontal: 20,
                  paddingVertical: 8,
                  marginRight: 8,
                  backgroundColor: "#fff",
                  borderWidth: 1,
                  borderRadius: 20,
                },
                category.id === activeCategory && {
                  backgroundColor: "#19334d",
                },
              ]}
            >
              <Text
                style={{
                  color: category.id === activeCategory ? "#fff" : "#19334d",
                }}
              >
                {category.name}
              </Text>
            </Pressable>
          ))}
        </ScrollView>
      </View>

      {/* Posts */}
      <View style={{ padding: 10, alignItems: "center" }}>
        <Post />
      </View>
    </SafeAreaView>
  );
}
