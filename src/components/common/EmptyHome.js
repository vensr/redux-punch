import React from "react";
import { Box, Grid, Typography } from "@mui/material";

const EmptyHome = () => {
  return (
    <Grid container direction="column" justify="center" alignItems="center">
      <Box mt={4} ml={2} mr={2}>
      <img src="welcome.svg" alt="team" width="500" />
      </Box>
      <Box mt={2}>
        <Typography variant="h6" color="primary">
          Welcome to Redux Punch Application
        </Typography>
      </Box>
    </Grid>
  );
};

export default EmptyHome;
