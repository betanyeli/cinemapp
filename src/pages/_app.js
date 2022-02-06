import { ThemeProvider } from "styled-components";
import { wrapper } from '@/redux/store'
import Global from '@/styles/global'



const theme = {
  colors: {
    primary: "#fafafa",
  },
};

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Global />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>)
}

export default wrapper.withRedux(MyApp)
