'use client'

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "Vesta",
    description: "Sistema inteligente de detecção de quedas para idosos, desenvolvido com o objetivo de promover segurança e bem-estar para pessoas em idade avançada que vivem sozinhas..",
    role: "Atuei como Desenvolvedor Front-end, responsável pelo desenvolvimento da interface mobile",
    tags: ["React Native", "Expo", "IOT", "Python"],
    url: "https://github.com/Steel-Hard/VESTA",
    image: import.meta.env.BASE_URL + "images/vesta.png"
  },
  {
    title: "Qli-mate",
    description: "Plataforma para monitoramento climático e prevenção de riscos associados a eventos de vento extremo.",
    role: "Atuei como Desenvolvedor Fullstack, responsável pelo desenvolvimento da interface web e implementação de autenticação do usuário",
    tags: ["NextJS", "TailwindCSS", "MongoDB", "Shadcn", "Zod", "BetterAuth"],
    url: "https://github.com/storm-access-abp/qli-mate",
    image: import.meta.env.BASE_URL + "images/qli-mate.jpg"
  },
  {
    title: "NutriMe",
    description: "Gerenciamento de alimentação e nutrição, permite que os usuários registrem refeições, monitorem metas nutricionais e tenham acompanhamento nutricional.",
    tags: ["React", "Typescript", "Node.js", "Axios", "PostgreSQL", "TailwindCSS"],
    role: "Atuei como Desenvolvedor Front-end, responsável pelo desenvolvimento da interface web",
    url: "https://github.com/crewTech-ABP/NutriMe",
    image: import.meta.env.BASE_URL + "images/nutrime.png"
  },
  {
    title: "Golden Hive Solutions",
    description: "Sistema web didático para apresentar a metodologia ágil Scrum.",
    role: "Atuei como Desenvolvedor Front-end, responsável pelo desenvolvimento da interface web",
    tags: ["Javascript", "HTML5", "CSS3", "PostgreSQL"],
    url: "https://github.com/lucasroqe/golden-hive",
    image: import.meta.env.BASE_URL + "images/golden-hive.jpg"
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-16 border-t border-gray-100">
      <div className="mb-8">
        <h2 className="text-2xl font-medium text-gray-900">Projetos Acadêmicos</h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <Card key={index} className="transition-all hover:shadow-md">
            <CardHeader className="p-0">
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-40 w-full object-cover object-top rounded-t-lg"
                  loading="lazy"
                />
              </a>
            </CardHeader>

            <CardContent className="pt-4">
              <h3 className="text-lg font-semibold text-gray-900 hover:underline">
                <a href={project.url} target="_blank" rel="noopener noreferrer">
                  {project.title}
                </a>
              </h3>
              <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                {project.description}
              </p>
              <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                {project.role}
              </p>
            </CardContent>

            <CardFooter className="flex flex-wrap gap-2 pt-2">
              {project.tags.map((tag) => (
                <Badge key={tag} variant="outline">
                  {tag}
                </Badge>
              ))}
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
