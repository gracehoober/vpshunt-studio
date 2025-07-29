import { Box } from "@mui/material";

const Home = () => {
  return (
    <Box sx={styles.box}>
      <p>This is the home page</p>
    </Box>
  );
};
const styles = {
  box: {
    p: 5,
  },
};
export { Home };
