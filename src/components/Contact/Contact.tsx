import SectionTitle from "../shared/SectionTitle";
import { socialLinks } from "../../data/social";

export default function Contact() {
  return (
    <section
      id="contact"
      className="mx-auto flex max-w-4xl flex-col items-center px-6 py-24 text-center"
    >
      <SectionTitle
        title="Contato"
        subtitle="Estou sempre aberto a novas oportunidades, projetos e conexões na área de tecnologia."
      />

      <div className="mt-10 flex flex-wrap justify-center gap-4">
        {socialLinks.map((social) => {
          const Icon = social.icon;

          return (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg border border-zinc-700 bg-zinc-900 px-6 py-3 font-medium text-zinc-100 transition-colors hover:border-zinc-500 hover:bg-zinc-800"
            >
              <Icon size={18} />
              {social.name}
            </a>
          );
        })}
      </div>
    </section>
  );
}