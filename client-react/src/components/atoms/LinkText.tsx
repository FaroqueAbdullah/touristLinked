import Typography, { TypographyProps } from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';

interface LinkTextProps {
  normalText?: string;
  linkText: string;
  linkRef: string;
}

const TextLink = styled('span')`
  display: flex
`;

const CustomTypography = styled(Typography)< TypographyProps>(({ theme }) => ({
    color: theme.palette.text.primary,
    fontSize: '12px',
}));

const CustomLinkData = styled(Typography)< TypographyProps>(({ theme }) => ({
    color: theme.palette.primary.main,
    fontSize: '12px',
    marginLeft: '2px'
}));


export default function LinkText({ normalText, linkText, linkRef }: LinkTextProps) {
    return <TextLink>
        <CustomTypography>
            {normalText && normalText}
        </CustomTypography>
        <CustomLinkData>
            <Link to={linkRef}>{linkText}</Link>
        </CustomLinkData>
    </TextLink>;
}