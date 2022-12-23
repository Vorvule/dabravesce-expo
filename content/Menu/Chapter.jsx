import { useContext } from "react";
import { NavigationContext } from "@react-navigation/native";

import { ChainContext } from "../contexts/ChainContext";
import { MenuPage } from "../../functions/MenuPage";

import MenuItem from "../components/MenuItem";

export default function Chapter({ chapter, keys }) {
  const navigation = useContext(NavigationContext);
  const chainContext = useContext(ChainContext);

  const onPress = () => {
    chainContext.setChain(keys);

    navigation.navigate("Тэкст", { chain: keys });
  };

  return (
    <MenuItem onPress={onPress} styler={MenuPage.styler(keys)}>
      {MenuPage.clear(chapter.name)}
    </MenuItem>
  );
}
