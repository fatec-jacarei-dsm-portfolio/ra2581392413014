import BlurFade from '@/components/magicui/blur-fade'
import BlurFadeText from '@/components/magicui/blur-fade-text'
import { ProjectCard } from '@/components/project-card'
import { ResumeCard } from '@/components/resume-card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { DATA } from '@/data/resume'
import Link from 'next/link'
import Markdown from 'react-markdown'

const BLUR_FADE_DELAY = 0.04

export default function Page() {
  return (
    <main className="flex min-h-[100dvh] flex-col space-y-10">
      <section id="hero">
        <div className="mx-auto w-full max-w-3xl">
          <div className="flex justify-between">
            <div className="flex flex-1 flex-col space-y-1.5">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-2xl font-bold tracking-tighter sm:text-4xl xl:text-5xl/none"
                yOffset={8}
                text={`Olá, me chamo ${DATA.name.split(' ')[0]} 👋`}
              />
              <BlurFadeText
                className="my-4 max-w-[600px] font-light md:text-2xl"
                delay={BLUR_FADE_DELAY}
                text={DATA.description}
              />
            </div>
            <BlurFade delay={BLUR_FADE_DELAY}>
              <Avatar className="size-16 md:size-32">
                <AvatarImage
                  alt={DATA.name}
                  src={DATA.avatarUrl}
                  className="scale-125 object-contain"
                />
                <AvatarFallback>{DATA.initials}</AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>
        </div>
      </section>
      <section id="about">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="mb-4 text-center text-3xl font-bold">Sobre mim</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <Markdown className="text-center text-muted-foreground  md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            {DATA.summary}
          </Markdown>
        </BlurFade>
      </section>
      <section id="skills">
        <div className="flex flex-col">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="mb-4 text-center text-3xl font-bold">Tecnologias</h2>
          </BlurFade>
          <div className="flex flex-wrap justify-center gap-2">
            {DATA.skills.map((skill, id) => (
              <BlurFade key={skill} delay={BLUR_FADE_DELAY * 6 + id * 0.05}>
                <Badge className="text-sm">{skill}</Badge>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="projects">
        <div className="w-full">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <div className="justify-centertext-center flex flex-col items-center">
              <h2 className="mb-4 text-center text-3xl font-bold">
                Projetos acadêmicos
              </h2>
              {/* <p className="mb-2 text-center text-muted-foreground md:text-left md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Atuei no desenvolvimento de projetos acadêmicos.
                Confira:
              </p> */}
            </div>
          </BlurFade>
          <div className="mx-auto grid max-w-[800px] grid-cols-1 gap-3 sm:grid-cols-2">
            {DATA.projects.academic.map((project, id) => (
              <BlurFade
                key={project.title}
                delay={BLUR_FADE_DELAY * 8 + id * 0.05}
              >
                <ProjectCard
                  href={project.href}
                  title={project.title}
                  description={project.description}
                  dates={project.dates}
                  tags={project.technologies}
                  image={project.image}
                  video={project.video}
                  links={project.links}
                />
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="projects">
        <div className="w-full">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <div className="justify-centertext-center flex flex-col items-center">
              <h2 className="mb-4 text-center text-3xl font-bold">
                Projetos pessoais
              </h2>
              {/* <p className="mb-2 text-center text-muted-foreground md:text-left md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Atuei no desenvolvimento de projetos pessoais.
                Confira:
              </p> */}
            </div>
          </BlurFade>
          <div className="mx-auto grid max-w-[800px] grid-cols-1 gap-3 sm:grid-cols-2">
            {DATA.projects.personal.map((project, id) => (
              <BlurFade
                key={project.title}
                delay={BLUR_FADE_DELAY * 8 + id * 0.05}
              >
                <ProjectCard
                  href={project.href}
                  title={project.title}
                  description={project.description}
                  dates={project.dates}
                  tags={project.technologies}
                  image={project.image}
                  video={project.video}
                  links={project.links}
                />
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="education">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="mb-4 text-center text-3xl font-bold">
              Formação acadêmica
            </h2>
          </BlurFade>
          {DATA.education.map((education, id) => (
            <BlurFade
              key={education.school}
              delay={BLUR_FADE_DELAY * 10 + id * 0.05}
            >
              <ResumeCard
                href={education.href}
                logoUrl={education.logoUrl}
                altText={education.school}
                title={education.school}
                subtitle={education.degree}
                period={`${education.start} - ${education.end}`}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="work">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <h2 className="mb-4 text-center text-3xl font-bold">
              Experiência profissional
            </h2>
          </BlurFade>
          {DATA.work.map((work, id) => (
            <BlurFade
              key={work.company}
              delay={BLUR_FADE_DELAY * 12 + id * 0.05}
            >
              <ResumeCard
                logoUrl={work.logoUrl}
                altText={work.company}
                title={work.company}
                subtitle={work.title}
                href={work.href}
                badges={work.badges}
                period={`${work.start} - ${work.end ?? 'Present'}`}
                description={work.description}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="contact">
        <div className="mb-12 mt-14 grid w-full items-center justify-center text-center md:mb-0 md:px-6">
          <BlurFade delay={BLUR_FADE_DELAY * 13}>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-4xl">
                Fale comigo
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Quer bater um papo? Me mande um{' '}
                <Link
                  href="mailto:alvim.lucas2@hotmail.com"
                  className="text-blue-500 hover:underline"
                >
                  e-mail
                </Link>{' '}
                e irei te responder o mais rápido possível
              </p>
            </div>
          </BlurFade>
        </div>
      </section>
    </main>
  )
}
