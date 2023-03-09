import { Provider } from 'react-redux';
import { Toaster } from 'react-hot-toast';

import store from '../redux/store';
import Layout from "@/components/Layout";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Toaster />
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}
