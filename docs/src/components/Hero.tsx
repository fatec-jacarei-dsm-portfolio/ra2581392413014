
import { Github, Linkedin, Mail } from "lucide-react";

export const Hero = () => {
  return (
    <section id="home" className="py-16">
      <div className="flex flex-col lg:flex-row items-start">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-6">
            <span className="text-2xl">👋</span>
            <h1 className="text-3xl font-medium text-gray-900">
              Olá, me chamo Lucas!
            </h1>
          </div>

          <div className="prose prose-gray max-w-none mt-16">
            <p className="text-xl text-gray-700 leading-relaxed">
              Estudante em Desenvolvimento de Software pela FATEC - Jacareí.
            </p>
          </div>
        </div>

        <div className="lg:w-80 pl-20">
          <img
            src="./images/me.jpg"
            alt="Foto Lucas"
            className="w-40 h-40 rounded-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};
