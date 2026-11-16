import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SafeAreaProvider } from "react-native-safe-area-context";

import HomePage from "./pages/HomePage";
import MoviesPage from "./pages/MoviesPage";
import ProfilePage from "./pages/ProfilePage";
import LatestPage from "./pages/LatestPage";
import TopRatedPage from "./pages/TopRatedPage";
import PopularPage from "./pages/PopularPage";
import RecommendedPage from "./pages/RecommendedPage";

const Tab = createBottomTabNavigator();

// Hides a screen from the bottom bar while keeping it navigable by name.
const hiddenTab = { tabBarButton: () => null };

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            headerTitle: "REELHOUSE",
            headerTitleAlign: "left",
            headerTitleStyle: { fontSize: 14, fontWeight: "800", letterSpacing: 2 },
            headerStyle: { backgroundColor: "#ffffff" },
            headerTintColor: "#17212b",
            tabBarActiveTintColor: "#e56b4b",
            tabBarInactiveTintColor: "#8b939b",
            tabBarLabelStyle: { fontSize: 11, fontWeight: "600", paddingBottom: 3 },
            tabBarStyle: { backgroundColor: "#ffffff", borderTopColor: "#e8ebee", height: 62, paddingTop: 7 },
            sceneStyle: { backgroundColor: "#f4f6f7" },
          }}
        >
          <Tab.Screen name="Home" component={HomePage} />
          <Tab.Screen name="Movies" component={MoviesPage} />
          <Tab.Screen name="Profile" component={ProfilePage} />

          {/* Category pages: reachable by name, hidden from the bottom nav */}
          <Tab.Screen name="Latest" component={LatestPage} options={hiddenTab} />
          <Tab.Screen name="TopRated" component={TopRatedPage} options={hiddenTab} />
          <Tab.Screen name="Popular" component={PopularPage} options={hiddenTab} />
          <Tab.Screen name="Recommended" component={RecommendedPage} options={hiddenTab} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
