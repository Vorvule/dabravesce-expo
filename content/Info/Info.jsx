import * as React from "react";
import { Platform, StyleSheet, View } from "react-native";

import { Screen } from "../../components/Screen";

import Block from "../../components/Block";
import Title from "../../components/Title";

export function Info() {
  return (
    <Screen>
      <Title styling={styles.title}>Дабравесце</Title>

      <Title styling={styles.subtitle}>Пра праект</Title>
      <Block>"Дабравесце" — гэта:</Block>
      <View style={styles.indent}>
        <Block styling={styles.margin}>◇ Новы Запавет</Block>
        <Block styling={styles.margin}>◇ Псалтыр</Block>
        <Block styling={styles.margin}>◇ Малітоўнік</Block>
        <Block styling={styles.margin}>◇ Спевы, —</Block>
      </View>
      <Block>і іншыя духоўныя крыніцы на беларускай мове.</Block>

      <Title styling={styles.subtitle}>Стваральнікі</Title>
      <Block>
        "Дабравесце" ствараецца і развіваецца Брацтвам ў гонар Віленскіх
        мучанікаў пры Свята-Петра-Паўлаўскім саборы г. Мінска Беларускай
        Праваслаўнай Царквы, што месціцца ў сталіцы на вуліцы Ракаўская, 4.
      </Block>

      <Title styling={styles.subtitle}>Пераклады</Title>
      <Block>
        Пераклад Новага Запавету выкананы Біблейскай камісіяй Беларускай
        Праваслаўнай Царквы. Тэкст чытае Юрый Жыгамонт.
      </Block>
      <Block>
        Малітоўнік — у перакладзе протаіерэя Сергія Гардуна. Чытае малітвы аўтар
        перакладу.
      </Block>
    </Screen>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    ...Platform.select({
      native: { fontSize: 16 },
    }),
  },

  subtitle: {
    fontSize: 17,
    ...Platform.select({
      native: { fontSize: 15 },
    }),
  },

  margin: {
    paddingVertical: 2,
  },

  indent: { paddingLeft: 36 },
});
