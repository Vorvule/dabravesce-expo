import * as React from "react";
import { View } from "react-native";

import Block from "../components/Block";
import Screen from "../components/Screen";
import SubTitle from "../components/SubTitle";
import Title from "../components/Title";

import { Constants } from "../../functions/Constants";
import { styles } from "../../styles/styles";
import { IconLink } from "./IconLink";

export function InfoScreen() {
  return (
    <Screen>
      <Title>Дабравесце</Title>

      <SubTitle>Пра праект</SubTitle>
      <Block>"Дабравесце" — гэта:</Block>
      <View style={styles.listPadding}>
        <Block styler={styles.listItemMargin}>◇ Новы Запавет</Block>
        <Block styler={styles.listItemMargin}>◇ Псалтыр</Block>
        <Block styler={styles.listItemMargin}>◇ Малітоўнік</Block>
        <Block styler={styles.listItemMargin}>◇ Спевы, —</Block>
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

      <SubTitle>Спасылкі</SubTitle>
      <IconLink iconUrl={Constants.urls.market} iconName="android">
        Дачыненне для Android
      </IconLink>
      <IconLink iconUrl={Constants.urls.github} iconName="github">
        Рэпазіторый на Github
      </IconLink>
      <IconLink iconUrl={Constants.urls.devMail} iconName="customerservice">
        Ліст распрацоўшчыкам
      </IconLink>
      <IconLink iconUrl={Constants.urls.frateryMail} iconName="mail">
        Ліст сябрам Брацтва
      </IconLink>
    </Screen>
  );
}
