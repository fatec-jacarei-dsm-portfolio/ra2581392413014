import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";

export const DATA = {
  name: "Lucas Roque",
  initials: "LR",
  url: " ",
  location: "Jacareí, SP",
  locationLink: "https://www.google.com/maps/place/jacarei",
  description: "Estudante em Desenvolvimento de Software em Multiplataforma.",
  summary:
    "Apaixonado por tecnologia, estou focado em criar soluções eficientes e inovadoras, desde o design da interface até a implementação de funcionalidades escaláveis.",
  avatarUrl: "/me.jpg",
  skills: [
    "React",
    "Next.js",
    "Javascript",
    "Typescript",
    "Node.js",
    "TailwindCSS",
    "Python",
    "Java",
    "Postgres",
    "MongoDB",
  ],
  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],
  contact: {
    email: "alvim.lucas2@hotmail.com",
    tel: "+5512992152060",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/lucasroqe",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/lucasroqe/",
        icon: Icons.linkedin,
        navbar: true,
      },
      Email: {
        name: "Email",
        url: "mailto:alvim.lucas2@hotmail.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },
  work: [
    {
      company: "SPS Group",
      href: "https://www.spsgroup.com.br",
      badges: [],
      location: "São José dos Campos, SP",
      title: "Analista de Suporte SAP B1",
      logoUrl: "/sps.jpg",
      start: "04/2025",
      end: "Momento",
      description: "Suporte técnico SAP B1.",
    },
    {
      company: "Redt",
      href: "https://redt.cloud/",
      badges: [],
      location: "São José dos Campos, SP",
      title: "Analista de TI",
      logoUrl: "/redt.png",
      start: "05/2022",
      end: "08/2024",
      description:
        "Suporte técnico remoto e presencial para equipamentos de videoconferência e telefonia na Embraer S.A, incluindo atendimento a vice-presidentes, diretores e executivos de alto escalão.",
    },
    {
      company: "Net Jacareí",
      href: "https://netjacarei.com.br/",
      badges: [],
      location: "Jacareí, SP",
      title: "Analista de suporte técnico N2",
      logoUrl: "/netjacarei.png",
      start: "01/2021",
      end: "05/2022",
      description:
        "Suporte técnico N2 via telefone, e-mail e WhatsApp, oferecendo atendimento de qualidade para clientes com links de conexão empresariais e residenciais, solucionando problemas técnicos relacionados à conectividade e ao funcionamento de serviços de internet.",
    },
  ],
  education: [
    {
      school: "Fatec - Jacareí",
      href: "https://fatec.sp.gov.br/",
      degree: "Técnologo em Desenvolvimento de Software em Multiplataforma",
      logoUrl: "/fatec.jpg",
      start: "01/2024",
      end: "12/2026",
    },
    {
      school: "UNICSUL",
      href: "https://www.cruzeirodosul.edu.br/",
      degree: "Técnologo em Análise e Desenvolvimento de Sistemas",
      logoUrl: "/unicsul.png",
      start: "01/2020",
      end: "01/2023",
    },
    {
      school: "Etec Cônego José Bento",
      href: "https://www.cps.sp.gov.br/etec/",
      degree: "Técnico em Redes de Computadores",
      logoUrl: "/etec.jpg",
      start: "01/2020",
      end: "06/2021",
    },
    {
      school: "Etec Cônego José Bento",
      href: "https://www.cps.sp.gov.br/etec/",
      degree: "Técnico em Redes de Computadores integrado ao ensino médio",
      logoUrl: "/etec.jpg",
      start: "01/2016",
      end: "12/2018",
    },
  ],
  projects: {
    personal: [
      {
        title: "Taiz",
        href: "https://github.com/lucasroqe/taiz",
        dates: "2025",
        active: true,
        description:
          "CLI para acelerar o desenvolvimento de aplicação Next.js. Fornece componentes pré-construídos e integração perfeita de pacotes.",
        technologies: [
          "Next.js",
          "React",
          "Typescript",
          "SQLite",
          "Prisma",
          "TailwindCSS",
          "Shadcn UI",
          "BetterAuth",
        ],
        links: [
          {
            type: "Repositório",
            href: "https://github.com/lucasroqe/taiz",
            icon: <Icons.github className="size-3" />,
          },
        ],
        image: "/taiz.png",
        video: "",
      },
      {
        title: "Spendo",
        href: "https://github.com/lucasroqe/taiz",
        dates: "2025",
        active: true,
        description:
          "Permite o acompanhamento de despesas, categorização e visualização de hábitos financeiros por meio de gráficos intuitivos.",
        technologies: [
          "Next.js",
          "Typescript",
          "SQLite",
          "Prisma",
          "TailwindCSS",
          "Shadcn UI",
          "BetterAuth",
        ],
        links: [
          {
            type: "Repositório",
            href: "https://github.com/lucasroqe/spendo",
            icon: <Icons.github className="size-3" />,
          },
        ],
        image: "/spendo.png",
        video: "",
      },
      {
        title: "Auth Form",
        href: "https://github.com/lucasroqe/auth-form",
        dates: "2025",
        active: true,
        description:
          "Formulário de autenticação com login/registro pronto para utilizar.",
        technologies: [
          "Next.js",
          "Typescript",
          "SQLite",
          "Prisma",
          "Auth.js",
          "Zod",
          "Shadcn UI",
        ],
        links: [
          {
            type: "Repositório",
            href: "https://github.com/lucasroqe/auth-form",
            icon: <Icons.github className="size-3" />,
          },
        ],
        image: "/auth-form.jpg",
        video: "",
      },
    ],
    academic: [
      {
        title: "Qli-mate",
        href: "https://github.com/crewTech-ABP/NutriMe",
        dates: "2025",
        active: true,
        description:
          "Plataforma para monitoramento climático e prevenção de riscos associados a eventos de vento extremo",
        technologies: ["Next.js", "React", "TailwindCSS", "MongoDB", "Shadcn"],
        links: [
          {
            type: "Repositório",
            href: "https://github.com/storm-access-abp/qli-mate",
            icon: <Icons.github className="size-3" />,
          },
        ],
        image: "/qli-mate.jpg",
        video: "",
      },
      {
        title: "NutriMe",
        href: "https://github.com/crewTech-ABP/NutriMe",
        dates: "2024",
        active: true,
        description:
          "Gerenciamento de alimentação e nutrição, permite que os usuários registrem refeições, monitorem metas nutricionais e tenham acompanhamento nutricional.",
        technologies: [
          "React",
          "Typescript",
          "Node.js",
          "Axios",
          "PostgreSQL",
          "TailwindCSS",
        ],
        links: [
          {
            type: "Repositório",
            href: "https://github.com/crewTech-ABP/NutriMe",
            icon: <Icons.github className="size-3" />,
          },
        ],
        image: "/nutrime.png",
        video: "",
      },
      {
        title: "Golden Hive Solutions",
        href: "https://github.com/lucasroqe/golden-hive",
        dates: "2024",
        active: true,
        description:
          "Sistema web didático para apresentar a metodologia ágil Scrum.",
        technologies: ["Javascript", "HTML5", "CSS3", "PostgreSQL"],
        links: [
          {
            type: "Repositório",
            href: "https://github.com/lucasroqe/golden-hive",
            icon: <Icons.github className="size-3" />,
          },
        ],
        image: "/golden-hive.jpg",
        video: "",
      },
    ],
  },
} as const;
