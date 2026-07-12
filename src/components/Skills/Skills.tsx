import Card from "../shared/Card";
import SectionTitle from "../shared/SectionTitle";

import { skills } from "../../data/skills";

export default function Skills() {
  return (
    <section
      id="skills"
      className="mx-auto max-w-6xl px-6 py-24"
    >
      <SectionTitle
        title="Skills"
        subtitle="Tecnologias que utilizo no desenvolvimento de aplicações e soluções backend."
      />

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {skills.map((category) => (
          <Card key={category.title}>
            <h3 className="text-xl font-semibold text-white">
              {category.title}
            </h3>

            <div className="mt-6 flex flex-wrap gap-3">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-zinc-700 bg-zinc-900 px-4 py-2 text-sm text-zinc-300 transition-colors hover:border-zinc-500 hover:text-white"
                >
                  {skill}
                </span>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}