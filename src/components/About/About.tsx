import { about } from "../../data/about";
import FadeIn from "../shared/FadeIn";
import SectionTitle from "../shared/SectionTitle";

export default function About() {
  return (
    <FadeIn>
    <section
      id="about"
      className="mx-auto max-w-6xl px-6 py-24"
    >
      <SectionTitle title={about.title} />

      <div className="max-w-3xl space-y-6">
        {about.paragraphs.map((paragraph: string) => (
          <p
            key={paragraph}
            className="text-lg leading-8 text-slate-400"
          >
            {paragraph}
          </p>
        ))}
      </div>
    </section>
    </FadeIn>
  );
}