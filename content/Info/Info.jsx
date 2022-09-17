import * as React from "react";
import { View } from "react-native";

import Block from "../../components/Block";
import { Screen } from "../../components/Screen";
import Title from "../../components/Title";

export function Info() {
  const margin = { marginVertical: 2 };
  const indent = { paddingLeft: 36 };
  const font = { fontSize: 17 };

  return (
    <Screen>
      <Title styling={{ fontSize: 18 }}>Дабравесце</Title>

      <Title styling={font}>Пра праект</Title>
      <Block>"Дабравесце" — гэта:</Block>
      <View style={indent}>
        <Block styling={margin}>◇ Новы Запавет</Block>
        <Block styling={margin}>◇ Псалтыр</Block>
        <Block styling={margin}>◇ Малітоўнік</Block>
        <Block styling={margin}>◇ Спевы, —</Block>
      </View>
      <Block>і іншыя духоўныя крыніцы на беларускай мове.</Block>

      <Title styling={font}>Стваральнікі</Title>
      <Block>
        "Дабравесце" ствараецца і развіваецца Брацтвам ў гонар Віленскіх
        мучанікаў пры Свята-Петра-Паўлаўскім саборы г. Мінска Беларускай
        Праваслаўнай Царквы, што месціцца ў сталіцы на вуліцы Ракаўская, 4.
      </Block>

      <Title styling={font}>Пераклады</Title>
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
