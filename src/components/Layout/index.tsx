import { FC } from 'react';
import { styled, Box } from '@mui/material';

import { Header } from '../Header';
import { Footer } from '../Footer';

import { FOOTER_HEIGHT } from '../../utils/constants';

export const Layout: FC = ({ children }) => {
  return (
    <LayoutWrapper>
      <ContentWrapper>
        <Header />
        <Box component="main">
          {children}
        </Box>
      </ContentWrapper>
      <Box component="footer">
        <Footer />
      </Box>
    </LayoutWrapper>
  );
};

const LayoutWrapper = styled('div')`
  min-height: 100vh;
`;

const ContentWrapper = styled('div')`
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - ${FOOTER_HEIGHT}px);
`;