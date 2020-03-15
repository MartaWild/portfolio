import {useState} from "react";

const i18n = {
    ru: {
        'main.hello'            : 'Привет, я Мария!',
        'main.first'            : 'Я дизайнер широкого профиля и веб-разработчик.',
        'main.second'           : 'Помогу наладить контакт между вашим бизнесом и клиентами.',

        'header.itemWeb'        : 'Веб-разработка',
        'header.itemArt'        : 'Арт и дизайн',
        'header.about'          : 'О себе',

        'web.header'            : 'Отлично владею CSS3, HTML5, современным стандартом JavaScript, а также библиотеками ReactJS, styled-components и многими другими.',
        'portfolio.description' : 'Этот сайт-портфолио',
        'portfolio.tech'        : 'Технологии: JavaScript, React, Gatsby',
        'techcom.description'   : 'Разработка сайта для логистической компании (верстка, frontend, дизайн, логотип)',
        'techcom.tech'          : 'Технологии: JavaScript, React, Next.js, БЭМ',
        'tabel.description'     : 'Работа над системой учета рабочего времени для строительных компаний: работа над фронтэндом и версткой, правка багов',
        'tabel.tech'            : 'Технологии: JavaScript, React, Rx.js',
        'water.description'     : 'Веб-приложение, рассчитывающее суточное потребление воды в соответствии с весом, с возможностью отслеживать уже выпитое количество и браузерными напоминаниями (верстка, frontend, дизайн)',
        'water.tech'            : 'Технологии: JavaScript, React',
        'date.descrition'       : 'Сервис-пародия на Tinder со случайной генерацией профилей. Для фотографий использовались изображения с',
        'date.tech'             : 'Технологии: JavaScript, React, Chance',

        'art.header'            : 'Свободно владею такими графическими инструментами, как Adobe Photoshop, Adobe Illustrator, Paint Tool SAI 2.0',
        'art.soap'              : 'Логотип для магазина декоративного мыла',
        'art.logo'              : 'Лого для сайта транспортной компании',
        'art.illustration'      : 'Иллюстрация',
        'art.background'        : 'Задний фон для игры',
        'art.reevs'             : 'Портрет Киану',
        'art.sprite'            : 'Спрайты для игры',

        'about.title'           : 'Обо мне',
        'about.whatDo'          : 'Что я могу',
        'about.alsoDo'          : 'Также имею опыт работы с TypeScript, RxJS, Semantic UI и другими технологиями.',
        'about.language'        : 'Родной язык - русский. Свободно владею английским.',
        'about.connect'         : 'Как со мной лучше связаться',
        'about.contactInfo'     : 'Сейчас я живу в России, работаю удалённо. Связаться можно по e-mail:',
        'about.otherMedia'      : 'Где ещё меня можно найти'            
    },
    en: {
        'main.hello'            : 'Hello, I am Maria',
        'main.first'            : 'I am a designer and a web developer.',
        'main.second'           : 'I can help make a connection between your business and its customers.',

        'header.itemWeb'        : 'Web',
        'header.itemArt'        : 'Art and design',
        'header.about'          : 'About me',

        'web.header'            : 'I am fluent in CSS3, HTML5, the modern JavaScript standard, as well as ReactJS libraries, styled-components and many others.',
        'portfolio.description' : 'This portfolio itself',
        'portfolio.tech'        : 'Technology: JavaScript, React, Gatsby',
        'techcom.description'   : 'Website development for a logistics company (layout, frontend, design, logo)',
        'techcom.tech'          : 'Technology: JavaScript, React, Next.js, БЭМ',
        'tabel.description'     : 'Participation in the creation of a time tracking system for construction companies: work on the frontend and layout, fixing bugs',
        'tabel.tech'            : 'Technology: JavaScript, React, Rx.js',
        'water.description'     : 'A web application that calculates daily water consumption according to weight, with the ability to track the amount already drunk and browser reminders (layout, frontend, design)',
        'water.tech'            : 'Technology: JavaScript, React',
        'date.descrition'       : 'Service-parody on Tinder with random generation of profiles. For photos I used images from ',
        'date.tech'             : 'Technology: JavaScript, React, Chance',

        'art.header'            : 'I am well versed in such graphic tools as Adobe Photoshop, Adobe Illustrator, Paint Tool SAI 2.0',
        'art.soap'              : 'Logo for decorative soap store',
        'art.logo'              : 'Logo for the transport company',
        'art.illustration'      : 'Illustration',
        'art.background'        : 'Background for the game',
        'art.reevs'             : 'Portrait of Keanu',
        'art.sprite'            : 'Sprites for the game',

        'about.title'           : 'About me',
        'about.whatDo'          : 'What I do',
        'about.alsoDo'          : 'I also have experience with TypeScript, RxJS, Semantic UI and other technologies.',
        'about.language'        : 'My native language is Russian. Aldo I fluent in English.',
        'about.connect'         : 'Best way to contact with me',
        'about.contactInfo'     : 'I live in Russia, but can work remotely. You can contact by e-mail:',
        'about.otherMedia'      : 'Where else you can find me'   
    }
};

export default function useLocale(){
    const savedLocale = (typeof localStorage !== 'undefined') ? localStorage.getItem("locale") : undefined;
    const [locale, setLocale] = useState(savedLocale || 'ru');

    const changeLocale = () => {
        const newLocale = locale === 'ru' ? 'en' : 'ru';
        setLocale(newLocale);
        localStorage.setItem("locale", newLocale);
    }        
    
    const translate = key => i18n[locale][key] ? i18n[locale][key] : key;

    return [translate, locale, changeLocale];
}

