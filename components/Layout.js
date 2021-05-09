import Head from "next/head";
import style from "../styles/Layout.module.css";

const Layout = ({ title, keyword, description, children }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keyword" content={keyword} />
      </Head>
      <div className={style.container}>{children}</div>
    </div>
  );
};

Layout.defaultProps = {
  title: "DJ Events | find the hottest parties",
  description: "Find the latest dj and other musical events",
  keyword: "dj,music,events",
};
export default Layout;
