import { FiMoon, FiSun } from "react-icons/fi";
import { Locale, usePreferences } from "@/contexts/PreferencesContext";

const PreferenceControls = () => {
  const { locale, setLocale, theme, toggleTheme, t } = usePreferences();

  return (
    <div className="preference-controls">
      <button type="button" onClick={toggleTheme} aria-label={theme === "dark" ? t("prefs.themeLight") : t("prefs.themeDark")}>
        {theme === "dark" ? <FiSun aria-hidden="true" /> : <FiMoon aria-hidden="true" />}
      </button>
      <label>
        <span className="sr-only">{t("prefs.language")}</span>
        <select value={locale} onChange={(event) => setLocale(event.target.value as Locale)} aria-label={t("prefs.language")}>
          <option value="pt">PT</option><option value="en">EN</option><option value="es">ES</option>
        </select>
      </label>
    </div>
  );
};

export default PreferenceControls;
