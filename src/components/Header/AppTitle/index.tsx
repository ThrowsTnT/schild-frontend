import { Box, styled, Typography } from '@mui/material';
import SecurityIcon from '@mui/icons-material/Security';

import { APP_TITLE } from '../../../utils/constants';

export const AppTitle = () => (
  <Box sx={{ paddingLeft: "10px" }}>
    <StyledAppTitle variant="h6" noWrap>
      {APP_TITLE}
    </StyledAppTitle>
  </Box>
);

const StyledAppTitle = styled(Typography)`
  display: {
    xs: none;
    sm: block;
  },
  cursor: default;
`;
