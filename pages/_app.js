import Layout from "../components/Layout";
import LoginLayout from "../components/LoginLayout";
// add bootstrap css
import "bootstrap/dist/css/bootstrap.css";

import "../styles/globals.css";

import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  if (router.route == "/login") {
    return (
      <LoginLayout>
        <Component {...pageProps} />
      </LoginLayout>
    );
  }

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
