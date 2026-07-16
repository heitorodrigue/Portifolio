import Card from "../shared/Card";
import SectionTitle from "../shared/SectionTitle";

import { experiences } from "../../data/experience";

export default function Experience() {
  return (
    <section
      id="experience"
      className="mx-auto max-w-6xl px-6 py-24"
    >
      <SectionTitle
        title="Experiência"
        subtitle="Minha trajetória acadêmica e profissional até o momento."
      />

      <div className="mt-12 space-y-6">
        {experiences.map((experience) => (
          <Card key={`${experience.company}-${experience.role}`}>
            <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="text-xl font-semibold text-white">
                  {experience.role}
                </h3>

                <p className="text-zinc-400">
                  {experience.company}
                </p>
              </div>

              <span className="text-sm text-zinc-500">
                {experience.period}
              </span>
            </div>

            <p className="mt-4 leading-7 text-zinc-300">
              {experience.description}
            </p>
          </Card>
        ))}
      </div>
    </section>
  );
}