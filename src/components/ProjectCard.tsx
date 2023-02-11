/* eslint-disable @next/next/no-img-element */
import Icon from "./Icon";

interface ProjectCardProps {
  techStack: string;
  name: string;
  imageURL: string;
  deployedLink: string;
  githubLink: string;
}

export const ProjectCard = ({
  techStack,
  name,
  imageURL,
  deployedLink,
  githubLink,
}: ProjectCardProps) => {
  return (
    <div className="mx-auto rounded-md p-3 pb-0 text-center">
      <h1 className="mb-2 text-4xl font-semibold lg:ml-10">{name}</h1>
      <div className="flex flex-col lg:max-w-screen-lg lg:flex-row lg:items-center">
        <div className="mb-2 lg:relative lg:w-52">
          <div className="lg:absolute lg:w-full lg:-rotate-90">
            <h2 className="h-full w-full">{techStack}</h2>
          </div>
        </div>
        <div className="w-full">
          <img
            className="h-auto w-full rounded-b-lg"
            src={imageURL}
            alt={name}
          />
        </div>
        <div className="flex flex-col items-center lg:h-60 lg:w-40 lg:justify-evenly lg:gap-2 lg:pl-2">
          <a
            href={deployedLink}
            rel="noreferrer"
            target="_blank"
            className="fancy-button inline-block overflow-hidden lg:my-2"
          >
            <span>Visit Project</span>
          </a>
          <a href={githubLink} rel="noreferrer" target="_blank">
            <Icon icon="github" />
          </a>
        </div>
      </div>
    </div>
  );
};
