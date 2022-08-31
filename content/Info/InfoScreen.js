import * as React from "react";
import { ScrollView, StyleSheet, View } from "react-native";

import Block from "../../components/Block";
import Title from "../../components/Title";

export function InfoScreen() {
  return (
    <View style={styles.view}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <Title styling={{ fontSize: 18 }}>Дабравесце</Title>

        <Title styling={{ fontSize: 17 }}>Пра праект</Title>
        <View style={styles.paragraph}>
          <Block>"Дабравесце" — гэта:</Block>
          <View style={[styles.indent]}>
            <Block>Новы Запавет</Block>
            <Block>Псалтыр</Block>
            <Block>Малітоўнік</Block>
            <Block>Царкоўныя спевы, —</Block>
          </View>
          <Block>і іншыя духоўныя крыніцы на беларускай мове.</Block>
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
          Малітоўнік — у перакладзе протаіерэя Сергія Гардуна. Чытае малітвы
          аўтар перакладу.
        </Block>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    width: "100%",
    maxWidth: 800,
    alignSelf: "center",
    padding: 16,
  },
  paragraph: {
    marginBottom: 15,
  },
  indent: {
    paddingLeft: 36,
  },
});
