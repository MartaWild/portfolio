import {useState} from "react";

const i18n = {
    ru: {
        'main.hello'            : 'Привет, я Мария!',
        'main.first'            : 'Веб-разработчик и дизайнер широкого профиля.',
        'main.second'           : 'Я разрабатываю удобные и качественные интерфейсы для вас и ваших клиентов.',

        'header.itemMain'       : 'Главная',
        'header.itemWeb'        : 'Веб-разработка',
        'header.itemArt'        : 'Арт и дизайн',
        'header.about'          : 'О себе',

        'web.header'            : 'Отлично владею CSS3, HTML5, современным стандартом JavaScript. Использую для работы React, styled-components и многие другие технологии и библиотеки.',
        'portfolio.description' : 'Сайт-портфолио, на котором вы находитесь.',
        'portfolio.tech'        : 'Технологии: JavaScript, React, Gatsby',
        'techcom.description'   : 'Разработка сайта для логистической компании: верстка, frontend, дизайн, логотип.',
        'techcom.tech'          : 'Технологии: JavaScript, React, Next.js, БЭМ',
        'tabel.description'     : 'Работа над системой учета рабочего времени для строительных компаний: frontend-разработка и верстка табеля, правка багов.',
        'tabel.tech'            : 'Технологии: TypeScript, React, Rx.js',
        'water.description'     : 'Веб-приложение для расчета суточного потребления воды, с возможностью отслеживать уже выпитое количество и браузерными напоминаниями (верстка, frontend, дизайн)',
        'water.tech'            : 'Технологии: JavaScript, React',
        'date.descrition'       : 'Сервис-пародия на Tinder со случайной генерацией профилей. Для фотографий использовались изображения с',
        'date.tech'             : 'Технологии: JavaScript, React, Chance.js',
        'todos.description'     : 'Веб-приложение для ведения задач. Разные режимы просмотра, drag&drop, хранение данных в БД',
        'todos.tech'            : 'Технологии: TypeScript, React + Redux + Thunk, react-beautiful-dnd, SQLite, NodeJS, Express.js',

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
        'about.connect'         : 'Как со мной связаться',
        'about.contactInfo'     : 'Сейчас я живу в России, работаю удалённо. Связаться можно по e-mail:',
        'about.otherMedia'      : 'Где ещё меня можно найти'            
    },
    en: {
        'main.hello'            : 'Hello, I am Maria',
        'main.first'            : 'A designer and web developer.',
        'main.second'           : 'I develop high-quality interfaces for your business and its clients.',

        'header.itemMain'       : 'Main page',
        'header.itemWeb'        : 'Web',
        'header.itemArt'        : 'Art and design',
        'header.about'          : 'About me',

        'web.header'            : 'I am fluent in CSS3, HTML5 and the modern JavaScript standard. In my work I use ReactJS, styled-components and many other technologies.',
        'portfolio.description' : 'The protfolio website you\'re currently on.',
        'portfolio.tech'        : 'Tech: JavaScript, React, Gatsby',
        'techcom.description'   : 'Website development for a logistics company: layout, frontend, design, logo',
        'techcom.tech'          : 'Tech: JavaScript, React, Next.js, BEM',
        'tabel.description'     : 'Participation in the creation of a time tracking system for construction companies: work on the frontend and layout, bug fixing',
        'tabel.tech'            : 'Tech: TypeScript, React, Rx.js',
        'water.description'     : 'A web application that calculates daily water consumption, with the ability to track the amount consumed and browser reminders (layout, frontend, design)',
        'water.tech'            : 'Tech: JavaScript, React, Notifications API',
        'date.descrition'       : 'A Tinder parody with randomly generated user profiles. For photos I used images from ',
        'date.tech'             : 'Tech: JavaScript, React, Chance.js',
        'todos.description'     : 'Web application for task management. Different view modes, drag & drop, data storage in DB',
        'todos.tech'            : 'Tech: TypeScript, React + Redux + Thunk, react-beautiful-dnd, SQLite, NodeJS, Express.js',

        'art.header'            : 'I am well versed in such tools as Adobe Photoshop, Adobe Illustrator, Paint Tool SAI 2.0',
        'art.soap'              : 'Logo for a decorative soap store',
        'art.logo'              : 'Logo for a transport company',
        'art.illustration'      : 'An illustration',
        'art.background'        : 'Background for a game',
        'art.reevs'             : 'Portrait of Keanu',
        'art.sprite'            : 'Sprites for a game',

        'about.title'           : 'About me',
        'about.whatDo'          : 'What I do',
        'about.alsoDo'          : 'I also have experience with TypeScript, RxJS, Semantic UI and other tech.',
        'about.language'        : 'My native language is Russian, and I am fluent in English.',
        'about.connect'         : 'How to contact me',
        'about.contactInfo'     : 'I live in Russia, but can work remotely. You can contact me by e-mail:',
        'about.otherMedia'      : 'Where else you can find me'   
    }
};

function getBrowserLocale() {
    if(typeof navigator !== "undefined"){
        const userLang = navigator.language || navigator.userLanguage;
        return userLang === 'ru-RU' ? 'ru' : 'en';
    } else {
        return 'en';
    }
}

export default function useLocale(){
    const savedLocale = (typeof localStorage !== 'undefined') ? localStorage.getItem("locale") : undefined;
    const [locale, setLocale] = useState(savedLocale || getBrowserLocale());
    const changeLocale = () => {
        const newLocale = locale === 'ru' ? 'en' : 'ru';
        setLocale(newLocale);
        localStorage.setItem("locale", newLocale);
    }        
    
    const translate = key => i18n[locale][key] ? i18n[locale][key] : key;

    return [translate, locale, changeLocale];
}

