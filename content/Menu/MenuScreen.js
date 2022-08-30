import { ScrollView } from "react-native";

import Menu from "./Menu";

export function MenuScreen({ navigation }) {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
    >
      <Menu navigation={navigation} />
    </ScrollView>
  );
}