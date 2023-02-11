import { type NextPage } from "next";
import SEO from "../components/SEO";
import { signIn, signOut, useSession } from "next-auth/react";
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
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
          <div className="flex w-full flex-col items-center gap-4">
            <div className="flex flex-col items-start justify-between">
              <div className="relative mt-4 flex h-full flex-col text-center xl:mt-8">
                <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
                  Nottl
                  <span className="text-[hsl(280,100%,70%)]">.</span>
                  io
                </h1>
                <div className="flex flex-col items-center gap-2">
                  <p className="text-2xl text-white">
                    {hello.data ? hello.data.greeting : "Loading tRPC query..."}
                  </p>
                  <AuthShowcase />
                </div>
              </div>
            </div>
          </div>
        </div>
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
      <p className="text-center text-2xl text-white">
        {sessionData && <span>Welcome {sessionData.user?.name}</span>}
        {secretMessage && <span> - {secretMessage}</span>}
      </p>
      <button
        type="button"
        className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
        onClick={sessionData ? () => void signOut() : () => void signIn()}
      >
        {sessionData ? `Sign out` : "Sign in"}
      </button>
    </div>
  );
};
