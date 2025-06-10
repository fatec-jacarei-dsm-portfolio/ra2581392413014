import { Badge } from "@/components/ui/badge";

export const PersonalProjects = () => {
  const projects = [
    {
      title: "Spendo",
      description:
        "Permite o acompanhamento de despesas, categorização e visualização de hábitos financeiros por meio de gráficos intuitivos.",
      tags: [
        "Next.js",
        "Typescript",
        "SQLite",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "BetterAuth",
      ],
      url: "https://github.com/lucasroqe/taiz",
      image: "images/spendo.png",
    },
    {
      title: "Taiz",
      description:
        "Ferramenta CLI para agilizar a criação de aplicativos Next.js. Acelera seu fluxo de trabalho de desenvolvimento fornecendo componentes pré-construídos e integração de pacotes.",
      tags: [
        "Next.js",
        "React",
        "Typescript",
        "SQLite",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "BetterAuth",
      ],
      url: "https://github.com/lucasroqe/taiz",
      image: "images/taiz.png",
    },
    {
      title: "Auth Form",
      description:
        "Formulário de autenticação com login/registro pronto para utilizar.",
      tags: [
        "Next.js",
        "Typescript",
        "SQLite",
        "Prisma",
        "Auth.js",
        "Zod",
        "Shadcn UI",
      ],
      url: "https://github.com/lucasroqe/auth-form",
      image: "images/auth-form.jpg",
    },
  ];

  return (
    <section id="personalProjects" className="py-16 border-t border-gray-100">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-medium text-gray-900">Projetos Pessoais</h2>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group border border-gray-200 rounded-lg hover:shadow-md transition-shadow overflow-hidden"
          >
            <a href={project.url} target="_blank" rel="noopener noreferrer">
              <img
                src={project.image}
                alt={`Imagem do projeto ${project.title}`}
                className="h-40 w-full object-cover object-top"
                loading="lazy"
              />
            </a>

            <div className="p-6">
              <h3 className="font-semibold text-gray-900 text-lg mb-2">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-600 hover:underline transition-colors"
                >
                  {project.title}
                </a>
              </h3>

              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
