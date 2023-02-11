import type { NextPage } from "next";
import SEO from "../components/SEO";

const Services: NextPage = () => {
  return (
    <>
      <SEO
        title="Services"
        url="https://robcmorris.com/services"
        description="Services Page"
      />
      <main className="container mx-auto flex min-h-screen">
        <h1>Services</h1>
      </main>
    </>
  );
};

export default Services;
