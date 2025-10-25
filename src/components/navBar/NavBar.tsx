import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useTranslation } from "react-i18next";
import { Settings } from "../settings/Settings";

const NavBar = () => {
  const { t } = useTranslation();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [settingsOpen, setSettingsOpen] = useState(false);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleSettingsOpen = () => {
    setSettingsOpen(true);
    handleMenuClose();
  };

  const handleSettingsClose = () => {
    setSettingsOpen(false);
  };

  return (
    <>
      <AppBar sx={styles.appbar} elevation={2}>
        <Toolbar sx={styles.toolbar}>
          <Typography variant="h4" component="h1" sx={styles.title}>
            {t("title.text")}
          </Typography>
          <IconButton
            onClick={handleMenuOpen}
            aria-label={t("navBar.elements.profileMenu")}
            aria-controls="profile-menu"
            aria-haspopup="true"
            sx={styles.profileButton}
          >
            <AccountCircleIcon sx={styles.profileIcon} />
            <Typography variant="h6" component="span" sx={styles.user}>
              {t("navBar.elements.profile")}
            </Typography>
          </IconButton>
          <Menu
            id="profile-menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            <MenuItem onClick={handleSettingsOpen}>
              {t("navBar.menu.settings")}
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
      <Settings open={settingsOpen} onClose={handleSettingsClose} />
    </>
  );
};

const styles = {
  appbar: {
    bgcolor: "background.paper",
    color: "text.primary",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    color: "primary.main",
    p: 1,
    fontWeight: 600,
  },
  profileButton: {
    color: "text.secondary",
  },
  profileIcon: {
    fontSize: "2rem",
    mr: 1,
  },
  user: {
    color: "text.secondary",
  },
};

export { NavBar };
