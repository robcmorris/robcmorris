import { type NextPage } from "next";
import SEO from "../components/SEO";
import { useSession } from "next-auth/react";
import styles from "../utils/styles";

import { api } from "../utils/api";

const Home: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: "- Connected to Backend." });

  return (
    <>
      <SEO
        title="Nottl.io - Home Page"
        url="https://nottl.io"
        description="Home Page for Nottl.io"
      />
      <main className={`${styles.flexCenter}}`}>
        <h1>Hello World!</h1>
        <p>{hello.data ? hello.data.greeting : "Loading tRPC query..."}</p>
        <AuthShowcase />
      </main>
    </>
  );
};

export default Home;

const AuthShowcase: React.FC = () => {
  const { data: sessionData } = useSession();

  const { data: secretMessage } = api.example.getSecretMessage.useQuery(
    undefined, // no input
    { enabled: sessionData?.user !== undefined }
  );

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <p className="text-center text-2xl">
        {sessionData && <span>Welcome {sessionData.user?.name}</span>}
        {secretMessage && <span> - {secretMessage}</span>}
      </p>
    </div>
  );
};
