import React from "react";
import {
  Box,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import { useTheme } from "../../contexts/ThemeContext";
import { useTranslation } from "react-i18next";

const SettingsContent: React.FC = () => {
  const { mode, setTheme } = useTheme();
  const { t } = useTranslation();

  const handleThemeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTheme(event.target.value as "light" | "dark");
  };

  return (
    <Box sx={styles.container}>
      <FormControl component="fieldset">
        <FormLabel component="legend" sx={styles.label}>
          {t("settings.theme.label")}
        </FormLabel>
        <RadioGroup
          aria-label={t("settings.theme.ariaLabel")}
          name="theme-mode"
          value={mode}
          onChange={handleThemeChange}
        >
          <FormControlLabel
            value="light"
            control={<Radio />}
            label={t("settings.theme.light")}
          />
          <FormControlLabel
            value="dark"
            control={<Radio />}
            label={t("settings.theme.dark")}
          />
        </RadioGroup>
      </FormControl>
    </Box>
  );
};

const styles = {
  container: {
    py: 2,
  },
  label: {
    mb: 2,
    fontWeight: 600,
    color: "text.primary",
  },
};

export { SettingsContent };
