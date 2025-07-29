import { AppBar, Toolbar, Typography } from "@mui/material";

const NavBar = () => {
  return (
    <AppBar sx={styles.appbar} elevation={2}>
      <Toolbar sx={styles.toolbar}>
        <Typography variant="h4" component="h1" sx={styles.title}>
          VP Shunt Studio
        </Typography>
        <Typography variant="h5" component="h5" sx={styles.user}>
          Profile
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
