import { useMemo, useState } from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Layout } from './components/Layout';

import { ThemeModeContext } from './contexts';
import { getAppTheme } from './styles/theme';
import { DARK_MODE_THEME, LIGHT_MODE_THEME } from './utils/constants';
import { Main } from './pages/Main';

function App() {
  const [mode, setMode] = useState<typeof LIGHT_MODE_THEME | typeof DARK_MODE_THEME>(DARK_MODE_THEME);
  const themeMode = useMemo(
    () => ({
      toggleThemeMode: () => {
        setMode((prevMode) => (prevMode === LIGHT_MODE_THEME ? DARK_MODE_THEME : LIGHT_MODE_THEME));
      },
    }),
    []
  );

  const theme = useMemo(() => getAppTheme(mode), [mode]);

  const routeOffset = "/schild-frontend";

  return (
    <ThemeModeContext.Provider value={themeMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <Switch>
            <Layout>
              <Route key="main" path={routeOffset + "/"} exact>
                <Main />
              </Route>
            </Layout>
          </Switch>
        </Router>
      </ThemeProvider>
    </ThemeModeContext.Provider>
  );
}

export default App;
