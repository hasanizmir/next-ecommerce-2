import Head from "next/head";

import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Book Store</title>
      </Head>
      <div className="max-w-[1240px] m-auto">
        <header>
          <Navbar />
        </header>
        <main>{children}</main>
        <footer>
          <Footer />
        </footer>
      </div>
    </div>
  );
};

export default Layout;
