import { Github, Linkedin, Mail, MapPin } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-16 border-t border-gray-100">
      <h2 className="text-2xl font-medium text-gray-900 mb-8">Fale comigo</h2>

      <div className="max-w-2xl space-y-6">
        <p className="text-gray-700">
          Quer bater um papo? Você pode me contactar através das redes abaixo:
        </p>

        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/lucasroqe"
              target="_blank"
              className="p-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/lucasroqe/"
              target="_blank"
              className="p-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>
        <div className="pt-8 border-t border-gray-100">
          <p className="text-sm text-gray-500">© 2025 Lucas.</p>
        </div>
      </div>
    </section>
  );
};
