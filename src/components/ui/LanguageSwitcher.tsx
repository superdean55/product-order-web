import Button from "../ui/Button";
import "flag-icons/css/flag-icons.min.css";
import { useLanguage } from "../../context/useLanguage";
import { useTranslation } from "react-i18next";

export default function LanguageSelector() {
  const { t } = useTranslation();
  const { language, setLanguage } = useLanguage();

  const languages = [
    { code: "en", name: t("languages.english"), flag: "us" },
    { code: "hr", name: t("languages.croatian"), flag: "hr" },
  ];

  return (
    <div className="flex flex-col justify-center items-center gap-2">
      {languages.map((lang) => (
        <Button
          key={lang.code}
          onClick={() => setLanguage(lang.code)}
          className={`flex items-center justify-center gap-2 w-full ${
            language === lang.code
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-white"
          }`}
        >
          <span className={`fi fi-${lang.flag} text-lg`}></span>
          <span className="pl-2">{lang.name}</span>
        </Button>
      ))}
    </div>
  );
}
