import { useContext } from "react";
import { NavigationContext } from "@react-navigation/native";
import { ChainContext } from "../AppNavigation";

import MenuItem from "../components/MenuItem";

export default function Chapter({ chapter, keys }) {
  const navigation = useContext(NavigationContext);
  const chainContext = useContext(ChainContext);

  const onPress = () => {
    chainContext.setChain(keys);

    navigation.navigate("Тэкст", { chain: keys });
  };

  return <MenuItem onPress={onPress}>{clear(chapter.name)}</MenuItem>;
}

const clear = (name) => name.replace(/ \| .+/, "");
