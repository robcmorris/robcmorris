import { useState } from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";

interface NavLink {
  to: string;
  children: React.ReactNode;
}

function NavLink({ to, children }: NavLink) {
  return (
    <Link href={to} className={`mx-4 font-medium`}>
      {children}
    </Link>
  );
}

interface MobileNav {
  open: boolean;
  setOpen: (open: boolean) => void;
}

function MobileNav({ open, setOpen }: MobileNav) {
  return (
    <div
      className={`absolute top-0 left-0 h-screen w-screen transform bg-white ${
        open ? "-translate-x-0" : "-translate-x-full"
      } border border-red-600 drop-shadow-md filter transition-transform duration-300 ease-in-out`}
    >
      <div className="flex h-20 items-center justify-center bg-white drop-shadow-md filter">
        {" "}
        {/*logo container*/}
        <Link className="text-xl font-semibold" href="/">
          Nottl.io
        </Link>
      </div>
      <div className="ml-4 flex flex-col">
        <Link
          className="my-4 text-xl font-medium"
          href="/about"
          onClick={() =>
            setTimeout(() => {
              console.log(open);
              setOpen(!open);
            }, 100)
          }
        >
          About
        </Link>
        <Link
          className="my-4 text-xl font-medium"
          href="/services"
          onClick={() =>
            setTimeout(() => {
              console.log(open);
              setOpen(!open);
            }, 100)
          }
        >
          Services
        </Link>
        <Link
          className="my-4 text-xl font-medium"
          href="/projects"
          onClick={() =>
            setTimeout(() => {
              console.log(open);
              setOpen(!open);
            }, 100)
          }
        >
          Projects
        </Link>
        <Link
          className="my-4 text-xl font-medium"
          href="/contact"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          Contact
        </Link>
      </div>
    </div>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="flex h-20 justify-between border border-red-600 bg-white px-4 py-4 drop-shadow-md filter">
      <MobileNav open={open} setOpen={setOpen} />
      <div className="flex items-center border border-red-600">
        <Link className="text-2xl font-semibold" href="/">
          Nottl.io
        </Link>
      </div>
      <div className="flex flex-1 items-center justify-center border border-red-600">
        <div className="hidden md:flex md:flex-grow ">
          <NavLink to="/about">About</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>
        <AuthShowcase />
        <div
          className="relative z-50 flex h-8 w-8 flex-col items-center justify-between md:hidden"
          onClick={() => {
            setOpen(!open);
          }}
        >
          {/* hamburger button */}
          <span
            className={`h-1 w-full transform rounded-lg bg-black transition duration-300 ease-in-out ${
              open ? "translate-y-3.5 rotate-45" : ""
            }`}
          />
          <span
            className={`h-1 w-full rounded-lg bg-black transition-all duration-300 ease-in-out ${
              open ? "w-0" : "w-full"
            }`}
          />
          <span
            className={`h-1 w-full transform rounded-lg bg-black transition duration-300 ease-in-out ${
              open ? "-translate-y-3.5 -rotate-45" : ""
            }`}
          />
        </div>
      </div>
    </nav>
  );
}

const AuthShowcase: React.FC = () => {
  const { data: sessionData } = useSession();

  return (
    <div className="flex gap-4 border border-red-600">
      <button
        type="button"
        className="rounded-full bg-slate-500 px-10 py-3 font-semibold text-white no-underline transition hover:bg-slate-500/20 hover:text-black"
        onClick={sessionData ? () => void signOut() : () => void signIn()}
      >
        {sessionData ? `Sign out` : "Sign in"}
      </button>
    </div>
  );
};
