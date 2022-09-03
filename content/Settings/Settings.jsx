import * as React from "react";
import { StyleSheet, View } from "react-native";

import Block from "../../components/Block";
import { Screen } from "../../components/Screen";
import Title from "../../components/Title";

export function Settings() {
  return (
    <Screen>
      <Title styling={{ fontSize: 18 }}>Дабравесце</Title>

      <Title styling={{ fontSize: 17 }}>Пра праект</Title>

      <View style={styles.paragraph}>
        <Block>"Дабравесце" — гэта:</Block>
        <View style={[styles.indent]}>
          <Block>Новы Запавет</Block>
          <Block>Псалтыр</Block>
          <Block>Малітоўнік</Block>
          <Block>Спевы, —</Block>
        </View>
        <Block>і іншыя духоўныя крыніцы на роднай беларусу мове.</Block>
      </View>

      <Title styling={{ fontSize: 17 }}>Брацтва</Title>
      <Block styling={styles.paragraph}>
        "Дабравесце" ствараецца і развіваецца Брацтвам ў гонар Віленскіх
        мучанікаў пры Свята-Петра-Паўлаўскім саборы г. Мінска Беларускай
        Праваслаўнай Царквы, што месціцца на вуліцы Ракаўская, 4.
      </Block>

      <Title styling={{ fontSize: 17 }}>Пераклад</Title>
      <Block styling={styles.paragraph}>
        Пераклад Новага Запавету выкананы Біблейскай камісіяй Беларускай
        Праваслаўнай Царквы. Тэкст чытае Юрый Жыгамонт.
      </Block>
      <Block styling={styles.paragraph}>
        Малітоўнік — у перакладзе протаіерэя Сергія Гардуна. Чытае малітвы аўтар
        перакладу.
      </Block>
    </Screen>
  );
}

const styles = StyleSheet.create({
  paragraph: {
    marginBottom: 14,
  },
  indent: {
    paddingLeft: 36,
  },
});
