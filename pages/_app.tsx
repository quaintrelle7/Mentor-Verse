import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { theme } from '../chakra/theme'
import { ChakraProvider } from '@chakra-ui/react'
// import Layout from '../components/Layout/Layout'
export default function App({ Component, pageProps }: AppProps) {
  return (

    <ChakraProvider theme={theme}>

      <Component {...pageProps} />

    </ChakraProvider>
  )
}