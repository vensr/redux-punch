import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import {Grid} from '@mui/material';

function Copyright () {
  return (
    <Typography variant="body2" color="text.secondary">
      {'Copyright © '}
      <Link color="inherit" href="">
        Redux Punch
      </Link>{' '}
      {new Date ().getFullYear ()}
      {'.'}
    </Typography>
  );
}

export default function Footer () {
  return (
    <Box>
      <Container
        maxWidth="md"
        component="footer"
        sx={{
          borderTop: theme => `1px solid ${theme.palette.divider}`,
          mt: 8,
          py: [3, 6],
        }}
      >
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={4}
        >
          <Typography variant="body2" color="text.secondary">
            Maintained by Redux Punch Team
          </Typography>
          <Copyright  />
        </Grid>

      </Container>
    </Box>
  );
}
