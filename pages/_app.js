import { createGlobalStyle, ThemeProvider } from "styled-components";
import { Provider } from 'react-redux'
import { createWrapper } from "next-redux-wrapper";
import store from "../redux/store";

const GlobalStyle = createGlobalStyle`
html{
  box-sizing: border-box;
  background: #F5F4F0;
  display:block;
  height: 100%;
  max-width: 640px;
  margin:0 auto;
  padding: 0;
}

body{
  background-color:#fafafa;
  min-height:100vh;
  padding: 1rem;
  margin-top:0;
  font-family:Verdana;
}
`;

const theme = {
  colors: {
    primary: "#fafafa",
  },
};

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </Provider>
    </>)
}
const makeStore = () => store
const wrapper = createWrapper(makeStore)
export default wrapper.withRedux(MyApp)
