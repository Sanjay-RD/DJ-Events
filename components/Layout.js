import { useRouter } from "next/router";
import Head from "next/head";
import style from "@/styles/Layout.module.css";
import Footer from "./Footer";
import Header from "./Header";
import Showcase from "./Showcase";

const Layout = ({ title, keyword, description, children }) => {
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keyword" content={keyword} />
      </Head>
      <Header />
      {router.pathname === "/" && <Showcase />}
      <div className={style.container}>{children}</div>
      <Footer />
    </div>
  );
};

Layout.defaultProps = {
  title: "DJ Events | find the hottest parties",
  description: "Find the latest dj and other musical events",
  keyword: "dj,music,events",
};
export default Layout;
