import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons, FontAwesome } from '@expo/vector-icons';

// importação das telas
import HomeScreen from './src/pages/HomeScreen';
import ProfileScreen from './src/pages/ProfileScreen';
import SettingsScreen from './src/pages/SettingsScreen';

const Tab = createBottomTabNavigator();

// /* Color Theme Swatches in Hex */
// .Touch-Of-Violet-1-hex { color: #BB80D4; }
// .Touch-Of-Violet-2-hex { color: #9E68CA; }
// .Touch-Of-Violet-3-hex { color: #E4CEF2; }
// .Touch-Of-Violet-4-hex { color: #7942B9; }
// .Touch-Of-Violet-5-hex { color: #A16BCB; }

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName='Home'
        screenOptions={{
          headerShown: false,
          tabBarInactiveBackgroundColor: '#E4CEF2',
          tabBarActiveBackgroundColor: '#9E68CA',
          tabBarActiveTintColor: '#FFF',
          tabBarInactiveTintColor: '#7942B9',
          tabBarShowLabel: false,
        }}
      >
        <Tab.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{
            tabBarIcon: ({ size, color }) => (
              <MaterialIcons name='home' size={size} color={color} />
            )
          }}
        />
        <Tab.Screen 
          name="Profile" 
          component={ProfileScreen}
          options={{
            tabBarIcon: ({ size, color }) => (
              <FontAwesome name='user' size={size} color={color} />
            )
          }}
        />
        <Tab.Screen 
          name="Settings" 
          component={SettingsScreen}  
          options={{
            tabBarIcon: ({ size, color }) => (
              <MaterialIcons name='settings' size={size} color={color} />
            )
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
