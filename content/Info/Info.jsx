import * as React from "react";
import { StyleSheet, View } from "react-native";

import { Screen } from "../../components/Screen";

import Block from "../../components/Block";
import SubTitle from "../../components/SubTitle";
import Title from "../../components/Title";

export function Info() {
  return (
    <Screen>
      <Title>Дабравесце</Title>

      <SubTitle>Пра праект</SubTitle>
      <Block>"Дабравесце" — гэта:</Block>
      <View style={styles.indent}>
        <Block styling={styles.margin}>◇ Новы Запавет</Block>
        <Block styling={styles.margin}>◇ Псалтыр</Block>
        <Block styling={styles.margin}>◇ Малітоўнік</Block>
        <Block styling={styles.margin}>◇ Спевы, —</Block>
      </View>
      <Block>і іншыя духоўныя крыніцы на беларускай мове.</Block>

      <SubTitle>Стваральнікі</SubTitle>
      <Block>
        "Дабравесце" ствараецца і развіваецца Брацтвам ў гонар Віленскіх
        мучанікаў пры Свята-Петра-Паўлаўскім саборы г. Мінска Беларускай
        Праваслаўнай Царквы, што месціцца ў сталіцы на вуліцы Ракаўская, 4.
      </Block>

      <SubTitle>Пераклады</SubTitle>
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
  margin: {
    paddingVertical: 2,
  },

  indent: { paddingLeft: 36 },
});
