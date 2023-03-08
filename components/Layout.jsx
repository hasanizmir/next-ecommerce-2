import Head from "next/head";

import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Book Store</title>
      </Head>
      <header className="shadow-sm mb-10">
        <Navbar />
      </header>
      <main className="max-w-[1240px] m-auto">{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
