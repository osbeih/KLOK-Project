import { useState } from "react";
import { LocaleContext } from "./locale";
import i18n from "../i18n";


const LocaleProvider = ({ children }) => {
    const [locale, setLocale] = useState("en");

    const changeLanguage = () => {
        const newLocale = locale === "en" ? "ar" : "en";

        setLocale(newLocale);
        i18n.changeLanguage(newLocale);

        document.documentElement.setAttribute("dir", newLocale === "ar" ? "rtl" : "ltr");
    };

    return (
        <LocaleContext.Provider value={{ locale, changeLanguage }}>
            {children}
        </LocaleContext.Provider>
    );
}

export default LocaleProvider;


