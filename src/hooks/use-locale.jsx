import {useState} from "react";

const i18n = {
    ru: {
        'hello': 'Привет',
    },
    en: {
        'hello': 'Hello',
    }
};

export default function useLocale(){
    const [locale, setLocale] = useState('ru');

    const changeLocale = () => setLocale(locale === 'ru' ? 'en' : 'ru');
    const translate = key => i18n[locale][key];

    return [translate, locale, changeLocale];
}

