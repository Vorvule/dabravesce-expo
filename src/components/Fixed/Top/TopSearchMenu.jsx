import React from "react";

export const TopSearchMenu = () => {
  return (
    <div id="searchMenu" className="w3-bar-block w3-dark-gray w3-large w3-hide">
      <input
        className="w3-bar-item w3-input"
        id="FooterSearch"
        placeholder="Пошук ..."
      ></input>
      <span className="w3-bar-item w3-button w3-padding w3-center w3-border-bottom">
        Шукаць
      </span>
      <span className="w3-bar-item">
        <input
          className="w3-check w3-margin-right"
          type="checkbox"
          name="testament"
          id="TestamentCheckbox"
          defaultChecked
        ></input>
        <label htmlFor="TestamentCheckbox">Новы Запавет</label>
      </span>
      <span className="w3-bar-item">
        <input
          className="w3-check w3-margin-right"
          type="checkbox"
          name="prayerbook"
          id="PrayerbookCheckbox"
          defaultChecked
        ></input>
        <label htmlFor="PrayerbookCheckbox">Малітоўнік</label>
      </span>
      <span className="w3-bar-item">
        <input
          className="w3-check w3-margin-right"
          type="checkbox"
          name="songbook"
          id="SongbookCheckbox"
          defaultChecked
        ></input>
        <label htmlFor="SongbookCheckbox">Спевы</label>
      </span>
      <span className="w3-bar-item w3-border-top">
        <input
          className="w3-check w3-margin-right"
          type="checkbox"
          name="lettercase"
          id="LetterCase"
        ></input>
        <label htmlFor="LetterCase">Улічваць рэгіст літар</label>
      </span>
    </div>
  );
};
