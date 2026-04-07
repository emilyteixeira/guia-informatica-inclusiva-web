import { Link } from "wouter";
import { useAuth } from "@/_core/hooks/useAuth";
import { getLoginUrl } from "@/const";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navigation() {
  const { user, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Início" },
    { href: "/assistive-tech", label: "Tecnologias Assistivas" },
    { href: "/curriculum", label: "Currículo" },
    { href: "/principles", label: "Princípios Pedagógicos" },
    { href: "/lesson-plans", label: "Planos de Aula" },
    { href: "/resources", label: "Recursos" },
  ];

  return (
    <nav className="bg-card text-card-foreground border-b border-border sticky top-0 z-40" role="navigation" aria-label="Navegação principal">
      <div className="container flex items-center justify-between py-4">
        <Link href="/" className="text-2xl font-bold hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring">
          Guia Inclusivo
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring">
              {link.label}
            </Link>
          ))}
        </div>

        {/* Auth Section */}
        <div className="flex items-center gap-4">
          {user ? (
            <>
              <span className="text-sm" aria-label={`Usuário: ${user.name}`}>
                {user.name}
              </span>
              <Button
                onClick={() => logout()}
                variant="outline"
                size="sm"
                aria-label="Fazer logout"
              >
                Sair
              </Button>
            </>
          ) : (
            <a href={getLoginUrl()} className="text-sm hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring">
              Entrar
            </a>
          )}

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-muted rounded focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-card border-t border-border">
          <div className="container py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
