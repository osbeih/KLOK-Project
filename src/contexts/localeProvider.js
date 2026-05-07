import { useEffect, useState, useMemo, useContext } from "react";
import { useTranslation } from "react-i18next";
import { LocaleContext } from "./locale";

const LocaleProvider = ({ children }) => {
    const { i18n } = useTranslation();
    const [locale, setLocale] = useState(i18n.language || "en");

    const isRTL = useMemo(() => locale === "ar", [locale]);

    const changeLanguage = (newLocale) => {
        const targetLocale = newLocale || (locale === "en" ? "ar" : "en");
        i18n.changeLanguage(targetLocale);
    };

    useEffect(() => {
        const handleLanguageChange = (lng) => {
            setLocale(lng);
            document.documentElement.dir = lng === "ar" ? "rtl" : "ltr";
            document.documentElement.lang = lng;
        };

        i18n.on('languageChanged', handleLanguageChange);
        
        // Set initial direction
        handleLanguageChange(i18n.language);

        return () => {
            i18n.off('languageChanged', handleLanguageChange);
        };
    }, [i18n]);

    const value = useMemo(() => ({
        locale,
        isRTL,
        changeLanguage,
        t: i18n.t.bind(i18n)
    }), [locale, isRTL, i18n]);

    return (
        <LocaleContext.Provider value={value}>
            {children}
        </LocaleContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LocaleContext);
    if (!context) {
        throw new Error("useLanguage must be used within a LocaleProvider");
    }
    return context;
};

export default LocaleProvider;



