import { ChakraProvider } from "@chakra-ui/react";
import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";
import NextProgress from "next-progress";
export default function App({ Component, pageProps }) {
  return    <SessionProvider session={pageProps.session}><ChakraProvider><NextProgress delay={300} options={{ showSpinner: false }} /><Component {...pageProps} /></ChakraProvider></SessionProvider>
}
