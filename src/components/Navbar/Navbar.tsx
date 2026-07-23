import { useState } from "react";
import { Menu, X } from "lucide-react";

import { navigationLinks } from "../../data/navigation";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen((prev) => !prev);
  }

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a
          href="#home"
          aria-label="Ir para o início da página"
          onClick={closeMenu}
          className="text-lg font-bold tracking-tight text-white transition-colors duration-200 hover:text-blue-400"
        >
          Heitor Rodrigues Araujo<span className="text-blue-500">.</span>
        </a>

        <nav
          aria-label="Navegação principal"
          className="hidden items-center gap-2 md:flex"
        >
          {navigationLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="rounded-lg px-4 py-2 text-sm font-medium text-slate-400 transition-all duration-200 hover:bg-slate-900 hover:text-white"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <button
          type="button"
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          onClick={toggleMenu}
          className="rounded-lg p-2 text-slate-300 transition-all duration-200 hover:bg-slate-900 hover:text-white md:hidden"
        >
          {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {isMenuOpen && (
        <nav
          aria-label="Menu mobile"
          className="border-t border-white/10 bg-slate-950 md:hidden"
        >
          <div className="flex flex-col gap-1 px-6 py-4">
            {navigationLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={closeMenu}
                className="rounded-lg px-4 py-3 text-slate-400 transition-all duration-200 hover:bg-slate-900 hover:text-white"
              >
                {link.name}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}