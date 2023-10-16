import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import CardActionArea from '@mui/material/CardActionArea/CardActionArea';
import CardMedia from '@mui/material/CardMedia/CardMedia';
import CardContent from '@mui/material/CardContent/CardContent';
import { Typography } from '../atoms';
import Stack from '@mui/material/Stack/Stack';



interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

// const ExpandMore = styled((props: ExpandMoreProps) => {
//   const { expand, ...other } = props;
//   return <IconButton {...other} />;
// })(({ theme, expand }) => ({
//   transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
//   marginLeft: 'auto',
//   transition: theme.transitions.create('transform', {
//     duration: theme.transitions.duration.shortest,
//   }),
// }));

export default function EventCard() {


  return (
    <Card sx={{ marginBottom: "1rem", padding:".5rem 0" }}>
      <Stack spacing={2}>
        <Typography>
          New Events
        </Typography>
        <Typography>
          New Events
        </Typography>
        <Typography>
          New Events
        </Typography>
      </Stack>
    </Card>
  );
}