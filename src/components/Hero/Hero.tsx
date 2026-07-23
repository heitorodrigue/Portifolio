import profileImage from "../../assets/images/profile.jpeg";
import FadeIn from "../shared/FadeIn";
import { profile } from "../../data/profile";
import Button from "../shared/Button";

export default function Hero() {
  return (
    <FadeIn>
    <section
      id="home"
      className="mx-auto flex min-h-screen max-w-6xl items-center px-6 pt-24"
    >
      <div className="flex w-full flex-col-reverse items-center gap-16 lg:flex-row">
        <div className="flex flex-1 flex-col items-center text-center lg:items-start lg:text-left">
          <span className="mb-6 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-400">
            Computer Science Student
          </span>

          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl">
            {profile.name}
          </h1>

          <h2 className="mt-5 text-2xl font-semibold text-slate-300">
            {profile.role}
          </h2>

          <p className="mt-6 max-w-2xl text-xl leading-8 text-slate-400">
            {profile.tagline}
          </p>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-500">
            {profile.description}
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4 lg:justify-start">
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

        <div className="flex flex-1 justify-center">
          <img
            src={profileImage}
            alt={profile.name}
            className="h-72 w-72 rounded-3xl border border-slate-700 object-cover shadow-2xl transition-transform duration-300 hover:scale-105 lg:h-96 lg:w-96"
          />
        </div>
      </div>
    </section>
    </FadeIn>
  );
}