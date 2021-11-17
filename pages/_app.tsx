import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {ThemeProvider} from "react-bootstrap";
import {StoreProvider} from "@organisms/index";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StoreProvider>
      <Component {...pageProps} />
    </StoreProvider>
      )
}

export default MyApp
