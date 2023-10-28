import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { IconButtonProps } from '@mui/material/IconButton';
import { useState } from 'react';
import { IconButton } from '../atoms';
import CardMedia from '@mui/material/CardMedia/CardMedia';


export default function NotificationCard() {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ marginBottom: ".5rem", padding:".5rem 0" }}>
      <CardContent
        sx={{
          display: 'flex',
        }}
      >
        <CardMedia
          component="img"
          image="../../../profiledami.png"
          alt="green iguana"
          sx={{
            border: "1px solid black",
            height: "25px",
            width: "25px",
            borderRadius: "50%",
            marginRight: "10px"
          }}
        />
        This is a demo notification. This is a demo notification. This is a demo notification.
        This is a demo notification. This is a demo notification. This is a demo notification.
        This is a demo notification. This is a demo notification. This is a demo notification.
      </CardContent>
    </Card>
  );
}


