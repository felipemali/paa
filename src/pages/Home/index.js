import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons, FontAwesome } from "@expo/vector-icons";

import HomeScreen from "../HomeScreen";
import ProfileScreen from "../ProfileScreen";
import SettingsScreen from "../SettingsScreen";

const Tab = createBottomTabNavigator();

const Home = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarInactiveBackgroundColor: "#eee",
        tabBarActiveBackgroundColor: "#ccc",
        tabBarActiveTintColor: "#FFF",
        tabBarInactiveTintColor: "#000",
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons name="home" size={size} color={color} />
          ),
        }}
      />
      {/* <Tab.Screen
          name="Login"
          component={Login}
          options={{
            tabBarIcon: ({ size, color }) => (
              <MaterialIcons name="book" size={size} color={color} />
            ),
          }}
        /> */}
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <FontAwesome name="user" size={size} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons name="settings" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Home;
