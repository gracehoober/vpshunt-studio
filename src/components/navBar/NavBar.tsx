import { AppBar, Toolbar, Typography } from "@mui/material";

const NavBar = () => {
  return (
    <AppBar sx={styles.appBar} elevation={2}>
      <Toolbar>
        <Typography variant="h4" component="h1" sx={styles.title}>
          VP Shunt Studio
        </Typography>
        <Typography variant="h4" component="h1" sx={styles.user}>
          Profile
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
const styles = {
  appBar: {
    bgcolor: "",
    display: "flex",
    justifyContent: "spaceBetween",
    alignItems: "center",
  },
  title: {
    color: "primary.default",
    p: 1,
  },
  user: {
    color: "blue",
    p: 1,
  },
};

export { NavBar };
