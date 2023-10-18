import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { Typography } from '../atoms';
import Button from '@mui/material/Button/Button';

export default function OutlinedCard() {
  return (
    <Card sx={{ marginBottom: "1rem", padding:".5rem 0" }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Safe Travel
        </Typography>
        <Typography variant="h5" component="div">
          Saint Martin Tour
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          5 days 4 night
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Learn More</Button>
    </CardActions>
    </Card>
  );
}