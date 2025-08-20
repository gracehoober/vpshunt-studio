import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router";

const Home = () => {
  const navigate = useNavigate();
  const toDashboard = () => {
    navigate("/dashboard");
  };
  return (
    <Box sx={styles.box}>
      <Typography sx={styles.title} variant="h1" align="center">
        Welcome
      </Typography>
      <Button sx={styles.dashButton} onClick={toDashboard} variant="contained">
        My Dashboard
      </Button>
    </Box>
  );
};

const styles = {
  box: {
    width: "100vw",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "background.paper",
    pt: "64px",
  },
  title: {
    position: "relative",
  },
  dashButton: {
    alignSelf: "flex-end",
    p: 1,
    m: 4,
  },
};
export { Home };
