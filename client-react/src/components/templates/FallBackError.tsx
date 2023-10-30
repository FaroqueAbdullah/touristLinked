import { Container } from '@mui/material';
import Box from '@mui/material/Box/Box';
import { FallbackProps } from 'react-error-boundary';
import { Typography } from '../atoms';

const FallbackRender = ({ error }: FallbackProps) => {
  return (
    <Box sx={{ margin: 'auto' }}>
      <Container maxWidth="xl">
        <Typography>Something went wrong:</Typography>
        <Typography sx={{ color: 'red' }}>{error.message}</Typography>
      </Container>
    </Box>
  );
};

export default FallbackRender;
