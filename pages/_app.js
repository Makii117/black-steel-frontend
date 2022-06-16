import { Provider } from "react-redux";
import store from "../app/store";

import {
  ChakraProvider,
  ColorModeProvider,
  useColorMode,
} from "@chakra-ui/react";
import customTheme from "../styles/theme";

import Layout from "../components/Layout";

const MyApp = ({ Component, pageProps }) => {
  return (
    <ChakraProvider resetCSS theme={customTheme}>
      <ColorModeProvider
        options={{
          initialColorMode: "light",
          useSystemColorMode: true,
        }}
      >
        <Layout>
          <Provider store={store}>
            <Component {...pageProps} />
          </Provider>
        </Layout>
      </ColorModeProvider>
    </ChakraProvider>
  );
};

export default MyApp;
