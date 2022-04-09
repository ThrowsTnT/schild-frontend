import { styled, Typography } from '@mui/material';
import SecurityIcon from '@mui/icons-material/Security';

export const AppIcon = () => (
  <StyledAppTitle variant="h6" noWrap>
      <SecurityIcon />
  </StyledAppTitle>
);

const StyledAppTitle = styled(Typography)`
  display: {
    xs: none;
    sm: block;
  }
  cursor: default;
`;
