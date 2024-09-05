import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Login from "./src/pages/Login";
import Home from "./src/pages/Home";
import { useAuth } from "./src/provider/Auth";

const Tab = createBottomTabNavigator();

function AppNavigator() {
  const { isAuthenticated } = useAuth();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          display: "none",
        },
      }}
    >
      {isAuthenticated ? (
        <Tab.Screen name="Home" component={Home} />
      ) : (
        <Tab.Screen name="Login" component={Login} />
      )}
    </Tab.Navigator>
  );
}

export default AppNavigator;
