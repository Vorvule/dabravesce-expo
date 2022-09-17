import { useContext } from "react";
import { NavigationContext } from "@react-navigation/native";

import { TouchableOpacity } from "react-native";

import MenuItem from "../../components/MenuItem";
import Block from "../../components/Block";

export default function Chapter({ bookName, chapter, keys }) {
  const navigation = useContext(NavigationContext);

  const handlePress = () => {
    navigation.navigate("Тэкст", { ...chapter, bookName, keys });
    // window.setKeys(keys);
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <MenuItem>
        <Block styling={{ color: "teal" }}>
          {chapter.name.replace(/ \| .+/, "")}
        </Block>
      </MenuItem>
    </TouchableOpacity>
  );
}
