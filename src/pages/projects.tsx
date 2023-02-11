import type { NextPage } from "next";
import SEO from "../components/SEO";
import { ProjectCard } from "../components/ProjectCard";

const Projects: NextPage = () => {
  return (
    <>
      <SEO
        title="Rob Morris's Projects"
        url="https://robcmorris.com/projects"
        description="Projects Page"
      />
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            My<span className="text-[hsl(280,100%,70%)]">.</span>Projects
          </h1>
          <div className="flex flex-col items-center gap-2">
            <div className="container mx-auto my-10 flex max-w-screen-lg flex-col gap-10 text-white">
              <h1 className="text-center text-4xl font-extrabold">
                My Projects
              </h1>
              <ProjectCard
                techStack="Next.js / tRPC / Prisma / TypeScript"
                githubLink="https://github.com/robcmorris/nottl"
                name="Nottl"
                imageURL="https://github.com/robcmorris/nottl/raw/main/public/nottl.png"
                deployedLink="https://nottl.io"
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Projects;
