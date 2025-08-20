import { AppBar, Toolbar, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

const NavBar = () => {
  const { t } = useTranslation();

  return (
    <AppBar sx={styles.appbar} elevation={2}>
      <Toolbar sx={styles.toolbar}>
        <Typography variant="h4" component="h1" sx={styles.title}>
          {t("title.text")}
        </Typography>
        <Typography variant="h5" component="h5" sx={styles.user}>
          {t("navBar.elements.profile")}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

const styles = {
  appbar: {},
  toolbar: {
    bgcolor: "",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    color: "secondary.main",
    p: 1,
  },
  user: {
    color: "text.secondary",
    p: 1,
  },
};

export { NavBar };
