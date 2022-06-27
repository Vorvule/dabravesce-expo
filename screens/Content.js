import { View } from "react-native";

import Menu from "../components/Menu/Content";

export function Content() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Menu />
    </View>
  );
}
