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

  const handleThemeChange = (theme: "light" | "dark") => {
    setTheme(theme);
  };

  return (
    <Box sx={styles.container}>
      <FormControl component="fieldset">
        <FormLabel component="legend" sx={styles.label}>
          {t("settings.theme.label")}
        </FormLabel>
        <RadioGroup
          aria-labelledby="demo-theme-toggle"
          name="theme-toggle"
          row
          value={mode}
          onChange={(event) =>
            handleThemeChange(event.target.value as "light" | "dark")
          }
        >
          <FormControlLabel value="light" control={<Radio />} label="Light" />
          <FormControlLabel value="dark" control={<Radio />} label="Dark" />
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
