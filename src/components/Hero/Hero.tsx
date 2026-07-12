import { profile } from "../../data/profile";
import Button from "../shared/Button";

export default function Hero() {
  return (
    <section className="flex min-h-screen items-center pt-16">
      <div className="mx-auto flex max-w-6xl flex-col px-6">
        <span className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-blue-500">
          Olá, eu sou
        </span>

        <h1 className="text-5xl font-extrabold tracking-tight text-white md:text-7xl">
          {profile.name}
        </h1>

        <h2 className="mt-4 text-xl font-medium text-slate-300 md:text-3xl">
          {profile.role}
        </h2>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
          {profile.description}
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <Button href={profile.github}>
            GitHub
          </Button>

          <Button
            href={profile.linkedin}
            variant="secondary"
          >
            LinkedIn
          </Button>
        </div>
      </div>
    </section>
  );
}