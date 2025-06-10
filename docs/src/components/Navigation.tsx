
import { useState } from "react";
import { Menu, X } from "lucide-react";
// import { ModeToggle } from "./mode-toggle";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Sobre mim", href: "#about" },
    { name: "Projetos Acadêmicos", href: "#projects" },
    { name: "Projetos Pessoais", href: "#personalProjects" },
    { name: "Contato", href: "#contact" },
  ];

  return (
    <nav className="sticky top-0 bg-white/80 backdrop-blur-md border-b border-gray-100 z-50">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex justify-between items-center py-4">
          <div className="text-xl font-medium text-gray-900">
            Lucas
          </div>
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {/* <ModeToggle/> */}
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
              >
                {item.name}
              </a>
            ))}
          </div>
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <div className="space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block py-2 text-gray-600 hover:text-gray-900 transition-colors text-sm"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
