import React from 'react';
import { CacheProvider } from '@emotion/react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import createEmotionCache from '../components/createEmotionCache';
import lightTheme from '../public/theme/Lighttheme';
import '../styles/globals.css';
// import Navigations from '../components/Navigations';
// import SignIn from '../components/signin';

const clientSideEmotionCache = createEmotionCache();

const MyApp = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;


  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={lightTheme}>
        <CssBaseline />
        {/* <Navigations /> */}
        <Component {...pageProps}/>
      </ThemeProvider>
    </CacheProvider>
  );
};

export default MyApp;