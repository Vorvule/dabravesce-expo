import * as React from "react";
import { StyleSheet, View } from "react-native";

import Title from "../components/Title";
import Txt from "../components/Txt";
import UlItem from "../components/UlItem";
import UlText from "../components/UlText";

export function Links() {
  return (
    <View style={styles.container}>
      <Title content="Пра нас" />

      <View style={styles.article}>
        <View style={styles.block}>
          <UlText content='"Дабравесце" — гэта:' />
          <UlItem content="Новы Запавет"></UlItem>
          <UlItem content="Псалтыр"></UlItem>
          <UlItem content="Малітоўнік"></UlItem>
          <UlItem
            content="Спевы, — і іншыя духоўныя крыніцы
          на беларускай мове."
          ></UlItem>
        </View>
        <Txt
          content='"Дабравесце" ствараецца і развіваецца Брацтвам ў гонар Віленскіх
          мучанікаў пры Свята-Петра-Паўлаўскім саборы г. Мінска Беларускай
          Праваслаўнай Царквы, што месціцца на вуліцы Ракаўская, 4.'
        ></Txt>
        <Txt
          content="Пераклад Новага Запавету выкананы Біблейскай камісіяй Беларускай
          Праваслаўнай Царквы. Тэкст чытае Юрый Жыгамонт."
        ></Txt>
        <Txt
          content="Малітоўнік — у перакладзе протаіерэя Сергія Гардуна. Чытае малітвы
          аўтар перакладу."
        ></Txt>
      </View>

      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  article: {
    marginHorizontal: 16,
    textAlign: "top",
    maxWidth: 800,
  },
  block: {
    marginBottom: 15,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
