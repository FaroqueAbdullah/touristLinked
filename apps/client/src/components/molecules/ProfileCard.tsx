import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia/CardMedia';
import CardContent from '@mui/material/CardContent/CardContent';
import { Typography } from '../atoms';

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

export default function ProfileCard() {
  return (
    <Card sx={{ marginBottom: '1rem', padding: '.5rem 0' }}>
      <CardMedia
        component="img"
        image="../../../profiledami.png"
        alt="green iguana"
        sx={{
          border: '1px solid black',
          height: '200px',
          width: '200px',
          margin: '2rem auto',
          borderRadius: '50%',
        }}
      />
      <CardContent>
        <Typography gutterBottom variant="h2" component="div">
          Faroque Abdullah
        </Typography>
        <Typography gutterBottom variant="subtitle1">
          Dhaka, Bangladesh
        </Typography>
        <Typography gutterBottom variant="subtitle2">
          Visited Country: 8
        </Typography>
      </CardContent>
    </Card>
  );
}
