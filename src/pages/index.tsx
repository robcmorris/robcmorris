import { type NextPage } from "next";
import SEO from "../components/SEO";
import styles from "../utils/styles";

const Home: NextPage = () => {
  return (
    <>
      <SEO
        title="Home of Rob Morris"
        url="https://robcmorris.com"
        description="Home of Rob Morris"
      />
      <main className={`${styles.flexCenter}}`}>
        <h1>Hello World!</h1>
      </main>
    </>
  );
};

export default Home;
