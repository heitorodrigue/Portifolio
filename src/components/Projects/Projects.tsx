import { projects } from "../../data/projects";

import Card from "../shared/Card";
import SectionTitle from "../shared/SectionTitle";

export default function Projects() {
  return (
    <section
      id="projects"
      className="mx-auto max-w-6xl px-6 py-24"
    >
      <SectionTitle
        title="Projetos"
        subtitle="Alguns projetos que demonstram minha experiência com desenvolvimento Backend e Full Stack."
      />

      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project) => (
          <Card key={project.title}>
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-white">
                {project.title}
              </h3>

              <p className="leading-7 text-slate-400">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-slate-700 px-3 py-1 text-sm text-slate-300"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}