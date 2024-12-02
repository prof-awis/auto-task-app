import { Tabs } from "expo-router";
import { TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: true,
        headerTitleAlign: "center",
        headerStyle: {
          backgroundColor: "#4d2a7c",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
        headerShadowVisible: false, //supposed to remove the shadow but i dont know why it is not working
        tabBarStyle: {
          backgroundColor: "#fff",
          height: 60,
          alignItems: "center",
        },
        tabBarLabelStyle: {
          // fontSize: 12,
        },
        tabBarActiveTintColor: "#4d2a7c",
        tabBarInactiveTintColor: "#69bd45",
        headerLeft: () => (
          <TouchableOpacity style={{ marginRight: 10, paddingHorizontal: 10 }}>
            <Ionicons name="menu" size={24} color="white" />
          </TouchableOpacity>
        ),
        headerRight: () => (
          <TouchableOpacity
            style={{ marginLeft: 10, paddingHorizontal: 10 }}
            onPress={() => {}}
          >
            <Ionicons name="person" size={24} color="white" />
          </TouchableOpacity>
        ),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
        }}
      />
    </Tabs>
  );
}
