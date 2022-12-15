import { useContext } from "react";
import { NavigationContext } from "@react-navigation/native";
import { ChainContext } from "../BottomTabs";

import MenuItem from "../components/MenuItem";

export default function Chapter({ chapter, chain }) {
  const navigation = useContext(NavigationContext);
  const chainContext = useContext(ChainContext);

  const onPress = () => {
    chainContext.setChain(chain);

    navigation.navigate("Тэкст", { chain });
  };

  return <MenuItem onPress={onPress}>{cleared(chapter.name)}</MenuItem>;
}

const cleared = (name) => name.replace(/ \| .+/, "");
