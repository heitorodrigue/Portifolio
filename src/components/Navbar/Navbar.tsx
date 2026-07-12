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
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-slate-800 bg-slate-950/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a
          href="#"
          aria-label="Ir para o início da página"
          onClick={closeMenu}
          className="text-lg font-bold tracking-wide text-white transition-colors duration-200 hover:text-blue-400"
        >
          Heitor<span className="text-blue-500">.</span>
        </a>

        {/* Menu Desktop */}
        <nav
          aria-label="Navegação principal"
          className="hidden items-center gap-8 md:flex"
        >
          {navigationLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-300 transition-colors duration-200 hover:text-blue-400"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Botão Mobile */}
        <button
          type="button"
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          onClick={toggleMenu}
          className="rounded-md p-2 text-slate-300 transition-colors duration-200 hover:text-white md:hidden"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Menu Mobile */}
      {isMenuOpen && (
        <nav
          aria-label="Menu mobile"
          className="border-t border-slate-800 bg-slate-950 md:hidden"
        >
          <div className="flex flex-col px-6 py-4">
            {navigationLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={closeMenu}
                className="rounded-md px-2 py-3 text-slate-300 transition-colors duration-200 hover:bg-slate-900 hover:text-blue-400"
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