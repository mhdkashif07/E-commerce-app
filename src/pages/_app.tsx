import "../styles/locomotive-scroll.css";
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import '../styles/index.css'
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider, EmotionCache } from '@emotion/react';
import theme from '../config/theme';
import createEmotionCache from '../config/createEmotionCache';
import "react-toastify/dist/ReactToastify.css"
import { ToastContainer } from "react-toastify"
import Head from 'next/head';
import { Footer } from '../components/index';
import Navbar from '../components/navbar/Navbar';
import { Provider } from "react-redux";
import store from "../app/store"
import 'aos/dist/aos.css';
import { useRef, useEffect, ReactElement, ReactNode } from "react";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import AOS from "aos"
import { NextPage } from "next";
import { AuthProvider } from "../context/auth-context";


// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

// interface MyAppProps extends AppProps {
//   emotionCache?: EmotionCache;
// }

type NextPageWithLayout = NextPage  & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
  emotionCache?: EmotionCache;
}

function MyApp(props: AppPropsWithLayout) {
  const containerRef = useRef(null);
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const getLayout = Component.getLayout?? ((page) => page)
  useEffect(() => {
    AOS.init({
        // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 150, // offset (in px) from the original trigger point
  delay: 1, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
    });
    AOS.refresh();
  }, []);
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@200&display=swap"
          rel="stylesheet" />

        <title>{"E-Commerse Website"}</title>
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        {/* <CssBaseline /> */}

        <Provider store={store}>
          {/* <LocomotiveScrollProvider
            options={{
              smooth: true,
              tablet: {
                smooth: true,
                breakpoint: 768,
              },
            }}
            watch={[]}
            containerRef={containerRef}>
            <main data-scroll-container ref={containerRef}> */}
            <AuthProvider>
            < Navbar />
              {getLayout(<Component {...pageProps} />)}
              <Footer />
            </AuthProvider>
            {/* </main>
          </LocomotiveScrollProvider> */}
        </Provider>
      </ThemeProvider>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </CacheProvider>
  )
}

export default MyApp
