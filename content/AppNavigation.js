import { useState, createContext } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo } from "@expo/vector-icons";

import { CoreScreen } from "./Core/CoreScreen";
import { MenuScreen } from "./Menu/MenuScreen";
import { InfoScreen } from "./Info/InfoScreen";

import { DeviceSpecific } from "../functions/DeviceSpecific";
import { styles } from "../styles/styles";
import { DailyKeys } from "../functions/DailyKeys";

const BottomTab = createBottomTabNavigator();
export const ChainContext = createContext();

export default function AppNavigation() {
  const [chain, setChain] = useState(DailyKeys.getDailyKeys());

  return (
    <ChainContext.Provider value={{chain: chain, setChain: setChain}}>
      <BottomTab.Navigator
        initialRouteName="Тэкст"
        screenOptions={{
          tabBarActiveTintColor: "#008080",
          tabBarInactiveTintColor: "#666666",
          tabBarLabelStyle: styles.fontStyle,
          headerTitleStyle: [
            styles.fontStyle,
            { color: "teal" },
            DeviceSpecific.sizedFont(17, 19),
          ],
          headerTitleAlign: "center",
        }}
      >
        <BottomTab.Screen
          name="Меню"
          component={MenuScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Entypo name="menu" color={color} size={size} />
            ),
          }}
        />
        <BottomTab.Screen
          name="Тэкст"
          component={CoreScreen}
          initialParams={{ chain }}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Entypo name="book" color={color} size={size} />
            ),
          }}
        />
        <BottomTab.Screen
          name="Інфо"
          component={InfoScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Entypo name="info" color={color} size={size} />
            ),
          }}
        />
      </BottomTab.Navigator>
    </ChainContext.Provider>
  );
}
