import {useState} from "react";

const i18n = {
    ru: {
        'main.hello'            : 'Привет, я Мария!',
        'main.first'            : 'Я дизайнер широкого профиля и веб-разработчик.',
        'main.second'           : 'Помогу наладить контакт между вашим бизнесом и клиентами.',

        'header.item1'          : 'Веб-разработка',

        'portfolio.description' : 'Этот сайт-портфолио',
        'portfolio.tech'        : 'Технологии: JavaScript, React, Gatsby',
        'techcom.description'   : 'Разработка сайта для логистической компании (верстка, frontend, дизайн, логотип)',
        'techcom.tech'          : 'Технологии: JavaScript, React, Next.js, БЭМ',
        'tabel.description'     : 'Работа над системой учета рабочего времени для строительных компаний: работа над фронтэндом и версткой, правка багов',
        'tabel.tech'            : 'Технологии: JavaScript, React, Rx.js',
        'water.description'     : 'Веб-приложение, рассчитывающее суточное потребление воды в соответствии с весом, с возможностью отслеживать уже выпитое количество и браузерными напоминаниями (верстка, frontend, дизайн)',
        'water.tech'            : 'Технологии: JavaScript, React',
        'date.descrition'       : 'Сервис-пародия на Tinder со случайной генерацией профилей. Для фотографий использовались изображения с',
        'date.tech'             : 'Технологии: JavaScript, React, Chance'
        
    },
    en: {
        'main.hello'    : 'Hello',
        'main.first'    : 'I am a designer and a web developer ',
        'main.second'   : 'I can help make a connection between your business and its customers.'
    }
};

export default function useLocale(){
    const [locale, setLocale] = useState('ru');

    const changeLocale = () => setLocale(locale === 'ru' ? 'en' : 'ru');
    const translate = key => i18n[locale][key] ? i18n[locale][key] : key;

    return [translate, locale, changeLocale];
}

