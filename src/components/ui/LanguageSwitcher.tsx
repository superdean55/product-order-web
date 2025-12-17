import Button from "../ui/Button";
import "flag-icons/css/flag-icons.min.css";
import { useLanguage } from "../../context/useLanguage";
import { useTranslation } from "react-i18next";
import { ButtonColor } from "../../constants/buttonColors";
import { FontSize, FontSizeClassMap } from "../../styles/dimensions";

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
          buttonColor={language === lang.code ? ButtonColor.selected : ButtonColor.regular}
          isSelected={language === lang.code ? true : false}
          onClick={() => setLanguage(lang.code)}
          className={`flex items-center justify-center gap-2 w-full`}
        >
          <span className={`fi fi-${lang.flag} ${FontSizeClassMap[FontSize.LG]}`}></span>
          <span className="pl-2">{lang.name}</span>
        </Button>
      ))}
    </div>
  );
}
