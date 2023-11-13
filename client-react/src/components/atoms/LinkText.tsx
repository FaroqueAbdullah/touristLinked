import Typography, { TypographyProps } from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';

interface LinkTextProps {
  normalText?: string;
  linkText: string;
  linkRef?: string;
  onLinkClick?: () => void;
}

const TextLink = styled('span')`
  display: flex
`;

const CustomTypography = styled(Typography)< TypographyProps>(({ theme }) => ({
    color: theme.palette.text.primary,
    fontSize: '1rem',
}));

const CustomLinkData = styled(Typography)< TypographyProps>(({ theme }) => ({
    color: theme.palette.primary.main,
    fontSize: '1rem',
    marginLeft: '2px'
}));


export default function LinkText({ normalText, linkText, linkRef, onLinkClick }: LinkTextProps) {
    return <TextLink>
        <CustomTypography>
            {normalText && normalText}
        </CustomTypography>
        <CustomLinkData>
            {linkRef ? <Link to={linkRef}>{linkText}</Link> : <Typography onClick={onLinkClick}>{linkText}</Typography>}
        </CustomLinkData>
    </TextLink>;
}