import * as React from "react";

import { NavigationContainer } from "@react-navigation/native";

import { BottomTabs } from "./tabs/BottomTabs";

export default function App() {
  return (
    <NavigationContainer>
      <BottomTabs />
    </NavigationContainer>
  );
}
