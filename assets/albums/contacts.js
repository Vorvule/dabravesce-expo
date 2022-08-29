import { policy } from "./Contacts/privacy-policy";

export const contacts = {
  name: "Пра нас",
  idEn: "Cont",
  text: [
    {
      name: "Сувязь",
      idBe: "Сувязь",
      idEn: "Connection",
      text: [
        {
          name: "Стваральнікі",
          text: [
            'Стваральнікі сайта "Дабравесце" — Брацтва ў гонар Віленскіх мучанікаў у г. Мінску і прыход святой роўнаапостальнай княгіні Вольгі ў г. Мінску Беларускай Праваслаўнай Царквы.',
            "Адрас брацтва — г. Мінск, вул. Ракаўская, 4, Петра-Паўлаўскі сабор.",
            "Пошта брацтва — bpbtvm@tut.by",
            "Тэлефон брацтва — 226-98-15.",
          ],
        },
        {
          name: "Пераклад",
          text: [
            "Новы Запавет у перакладзе Біблейскай камісіі Беларускай Праваслаўнай Царквы.",
            "Тэкст Евангелля чытае Юрый Жыгамонт.",
            "Малітоўнік у перакладзе протаіерэя Сергія Гардуна.",
            "Чытае малітвы протаіерэй Сергій Гардун.",
          ],
        },
        // [
        //   "Форма для сувязі",
        //   [
        //     "Форма для сувязі з Брацтвам у гонар Віленскіх мучанікаў у г. Мінску",
        //     "<form method='post' id='MailForm'><input className='w3-input w3-section w3-border' type='text' placeholder='Імя' required name='Name'><input className='w3-input w3-section w3-border' type='text' placeholder='E-mail' required name='Email'><input className='w3-input w3-section w3-border' type='text' placeholder='Тэма' required name='Subject'><input className='w3-input w3-section w3-border' type='text' placeholder='Допіс' required name='Comment'><div className='w3-input w3-border w3-border-blue w3-text-dark-gray w3-hover-text-blue' id='sendMail' onclick='site.sendMail();' style='cursor:pointer'>Даслаць</div></form>",
        //   ],
        // ],
      ],
    },

    {
      name: "Умовы спажывання",
      idBe: "Умовы",
      idEn: "Policies",
      text: [
        { name: "Privacy Policy", text: policy },
        // [
        //   "Падзякі",
        //   [
        //     "<p>Стылі <span className='w3-text-dark-gray' style='cursor:pointer' onclick='location.href=\"https://www.w3schools.com/w3css/\"'>w3.css</span>",
        //     "Іконкі <span className='w3-text-dark-gray' style='cursor:pointer' onclick='location.href=\"https://fontawesome.com/v4.7.0/icons/\"'>Fontawesome</span></p>",
        //   ],
        // ],
      ],
    },
  ],
};
