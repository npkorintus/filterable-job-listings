import React from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import { Paper, Typography } from '@mui/material';


export default function Error({ error }) {
  return (
    <Container maxWidth="sm" sx={{ paddingTop: '100px' }}>
      <Box>
        <Paper>
          <Card>
            <CardHeader title="Uh Oh!" subheader="We've encountered an error..." />
            <CardContent>
              <Typography gutterBottom variant='body1'>{`Error: ${error}`}</Typography>
              <Typography variant='body2'>Please reload the page to try fetching data again.</Typography>
            </CardContent>
          </Card>
        </Paper>
      </Box>
    </Container>
  );
}
