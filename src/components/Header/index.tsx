import React, { useState } from 'react';
import { AppBar, Box, Toolbar } from '@mui/material';

import { AppTitle } from './AppTitle';
import { ThemeSwitcher } from './ThemeSwitcher';
import { More } from '../Actions';
import { MobileMenu } from './Menu';
import { AppIcon } from './AppIcon';

export const Header = () => {
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState<null | HTMLElement>(null);

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => setMobileMoreAnchorEl(event.currentTarget);

  const handleMobileMenuClose = () => setMobileMoreAnchorEl(null);

  return (
    <>
      <AppBar position="relative">
        <Toolbar disableGutters variant="dense">
          <Box sx={{ display: { xs: 'none', md: 'block' } }}>
            <AppTitle />
          </Box>
          <Box sx={{flexGrow: 1}} />
          <Box sx={{ alignSelf: "center" }}>
            <AppIcon />
          </Box>
          <Box sx={{flexGrow: 1}} />
          <Box sx={{ display: { xs: 'none', md: 'flex', alignItems: 'center' } }}>
            <ThemeSwitcher />
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' }, alignSelf: "right" }}>
            <More onClick={handleMobileMenuOpen} />
          </Box>
        </Toolbar>
      </AppBar>
      <MobileMenu
        isMenuOpen={Boolean(mobileMoreAnchorEl)}
        handleMenuOpen={handleMobileMenuOpen}
        handleMenuClose={handleMobileMenuClose}
        anchorEl={mobileMoreAnchorEl}
      />
    </>
  );
};
