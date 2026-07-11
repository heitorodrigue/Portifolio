import { profile } from "../../data/profile";
import Button from "../shared/Button";

export default function Hero() {
  return (
    <section className="flex min-h-screen items-center">
      <div className="mx-auto flex max-w-6xl flex-col px-6">

        <span className="mb-4 text-lg text-blue-500">
          Olá, eu sou
        </span>

        <h1 className="text-6xl font-extrabold text-white">
          {profile.name}
        </h1>

        <h2 className="mt-4 text-3xl font-semibold text-slate-300">
          {profile.role}
        </h2>

        <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-400">
          {profile.description}
        </p>

        <div className="mt-10 flex gap-4">

            <Button href={profile.github}>
                GitHub
            </Button>

            <Button href={profile.linkedin}>
                LinkedIn
            </Button>

        </div>
      </div>
    </section>
  );
}