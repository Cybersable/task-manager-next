'use client';

import { FC, ReactNode, useMemo } from 'react';
import { createTheme, ThemeProvider as MUIThemeProvider } from '@mui/material/styles';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import CssBaseline from '@mui/material/CssBaseline';
import { colorSchemes, typography, shadows, shape } from './api';
import type { ThemeOptions } from '@mui/material/styles';
import { 
  inputsCustomizations,
  dataDisplayCustomizations,
  feedbackCustomizations,
  navigationCustomizations,
  surfacesCustomizations
} from './api/customizations';

interface IThemeProviderProps {
  children: ReactNode
  themeComponents?: ThemeOptions['components']
}

const ThemeProvider: FC<IThemeProviderProps> = ({ children, themeComponents }) => {
  const theme = useMemo(() => 
    createTheme({
      cssVariables: {
        colorSchemeSelector: 'data-mui-color-scheme',
        cssVarPrefix: 'template',
      },
      colorSchemes,
      typography,
      shadows,
      shape,
      components: {
        ...inputsCustomizations,
        ...dataDisplayCustomizations,
        ...feedbackCustomizations,
        ...navigationCustomizations,
        ...surfacesCustomizations,
      },
    }),
  []);

  return (
    <AppRouterCacheProvider>
        <MUIThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </MUIThemeProvider>
    </AppRouterCacheProvider>
  );
};

export default ThemeProvider;
