import Box, { BoxProps } from '@mui/material/Box/Box';
import LinearProgress, { LinearProgressProps } from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';

const CustomBox = styled(Box)<BoxProps>(() => ({
  width: '100%',
  height: '.8rem',
}));

const CustomLinearProgress = styled(LinearProgress)<LinearProgressProps>(({ theme }) => ({
  '& .MuiLinearProgress-bar': {
    backgroundColor: theme.palette.primary.main
  }
}));

export default function MUILinearProgress() {
  return (
    <CustomBox>
      <CustomLinearProgress />
    </CustomBox>
    
  );
}