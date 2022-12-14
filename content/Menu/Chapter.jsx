import { useContext, useState } from "react";
import { NavigationContext } from "@react-navigation/native";
import { SetChainContext } from "../BottomTabs";

import MenuItem from "../components/MenuItem";

export default function Chapter({ chapter, keys }) {
  const navigation = useContext(NavigationContext);
  const setChain = useContext(SetChainContext);

  const [styling, setStyling] = useState({});

  const chain = getChain(keys);

  const handlePress = () => {
    navigation.navigate("Тэкст", { chain });
    setChain(chain);

    setStyling({ color: "teal" });
  };

  return (
    <MenuItem styling={styling} onPress={handlePress}>
      {cleared(chapter.name)}
    </MenuItem>
  );
}

const cleared = (name) => {
  return name.replace(/ \| .+/, "");
};

const getChain = (keys) => {
  return keys.split("-").map((key) => Number(key));
};
