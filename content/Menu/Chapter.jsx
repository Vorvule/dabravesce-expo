import { useContext } from "react";
import { NavigationContext } from "@react-navigation/native";

import MenuItem from "../../components/MenuItem";

export default function Chapter({ chapter, keys }) {
  const navigation = useContext(NavigationContext);

  const handlePress = () => {
    navigation.navigate("Тэкст", { keys });
    // window.setKeys(keys);
  };

  return <MenuItem onPress={handlePress}>{cleared(chapter.name)}</MenuItem>;
}

const cleared = (name) => {
  return name.replace(/ \| .+/, "");
};
