import Feather from '@expo/vector-icons/Feather';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Fontisto from '@expo/vector-icons/Fontisto';
import Ionicons from "@expo/vector-icons/Ionicons";
import { Tabs } from "expo-router";
import React from "react";
import { StyleSheet } from "react-native";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: true,
        tabBarActiveTintColor: "slate",
        tabBarInactiveTintColor: "#a6a6a6",
        tabBarHideOnKeyboard: true,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarLabel: "Discover",
          tabBarIcon: ({ color, size, focused }) => (
            <FontAwesome5 name={focused ? "compass" : "compass"} size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="local"
        options={{
          tabBarLabel: "Local",
          tabBarIcon: ({ color, size, focused }) => (
            <Feather name={focused ? "send" : "send"} size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="add"
        options={{
          tabBarLabel: "Add",
          tabBarIcon: ({ color, size, focused }) => (
            <Feather name={focused ? "plus-circle" : "plus-circle"} size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="alert"
        options={{
          tabBarLabel: "Alert",
          tabBarIcon: ({ color, size, focused }) => (
            <Fontisto name={focused ? "bell" : "bell"} size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons name={focused ? "person-outline" : "person-outline"} size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({});