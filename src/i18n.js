import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: 'en',
        supportedLngs: ['en', 'ar'],
        debug: false, // Set to true only in development if needed
        
        interpolation: {
            escapeValue: false,
        },

        backend: {
            loadPath: '/locales/{{lng}}/{{ns}}.json',
        },

        detection: {
            order: ['localStorage', 'cookie', 'htmlTag', 'path', 'subdomain'],
            caches: ['localStorage'],
        },
    });

export default i18n;