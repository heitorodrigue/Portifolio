const links = [
  { name: "Sobre", href: "#about" },
  { name: "Tecnologias", href: "#skills" },
  { name: "Projetos", href: "#projects" },
  { name: "Experiência", href: "#experience" },
  { name: "Contato", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-slate-800 bg-slate-950/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#" className="text-lg font-bold text-white">
          Heitor<span className="text-blue-500">.</span>
        </a>

        <nav className="hidden gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-slate-300 transition hover:text-blue-400"
            >
              {link.name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}