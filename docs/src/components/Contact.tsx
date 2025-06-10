
import { Mail, MapPin } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-16 border-t border-gray-100">
      <h2 className="text-2xl font-medium text-gray-900 mb-8">Fale comigo</h2>

      <div className="max-w-2xl space-y-6">
        <p className="text-gray-700">
          Quer bater um papo? Me mande um e-mail e irei te responder o mais rápido possível
        </p>

        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Mail className="text-gray-400" size={18} />
            <a
              href="mailto:hello@syakir.dev"
              className="text-blue-600 hover:text-blue-800 hover:underline"
            >
              alvim.lucas2@hotmail.com
            </a>
          </div>

          <div className="flex items-center gap-3">
            <MapPin className="text-gray-400" size={18} />
            <span className="text-gray-600">Brasil</span>
          </div>
        </div>
        <div className="pt-8 border-t border-gray-100">
          <p className="text-sm text-gray-500">
            © 2025 Lucas. 
          </p>
        </div>
      </div>
    </section>
  );
};
