import { useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo } from "@expo/vector-icons";

import { CoreScreen } from "./Core/CoreScreen";
import { MenuScreen } from "./Menu/MenuScreen";
import { InfoScreen } from "./Info/InfoScreen";

import { DailyKeys } from "../functions/DailyKeys";
import { DeviceSpecific } from "../functions/DeviceSpecific";
import { ChainContext } from "./contexts/ChainContext";

import { styles } from "../styles/styles";

const BottomTab = createBottomTabNavigator();

export default function AppNavigation() {
  const [chain, setChain] = useState(DailyKeys.getDailyKeys());

  return (
    <ChainContext.Provider value={{chain: chain, setChain: setChain}}>
      <BottomTab.Navigator
        initialRouteName="Меню"
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
          name="Больш"
          component={InfoScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Entypo name="cog" color={color} size={size} />
            ),
          }}
        />
      </BottomTab.Navigator>
    </ChainContext.Provider>
  );
}
