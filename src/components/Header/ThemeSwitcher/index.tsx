import { useContext } from 'react';
import { useTheme } from '@mui/material/styles';
import { DarkMode, Flare, LightMode, NightsStay } from '@mui/icons-material';

import { ActionItem } from '../../Actions/ActionItem';

import { ThemeModeContext } from '../../../contexts';
import { DARK_MODE_THEME, LIGHT_MODE_THEME } from '../../../utils/constants';

export const ThemeSwitcher = ({ disableTooltip = false }: { disableTooltip?: boolean }) => {
  const theme = useTheme();
  const { toggleThemeMode } = useContext(ThemeModeContext);

  const isDarkMode = theme.palette.mode === DARK_MODE_THEME;

  const icon = isDarkMode ? DarkMode : LightMode;
  const title = isDarkMode ? "Disable dark mode" : "Enable dark mode";

  return (
    <ActionItem
      title={title}
      icon={icon}
      onClick={toggleThemeMode}
      disableTooltip={disableTooltip}
    />
  );
};
