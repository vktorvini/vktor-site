import { site } from "@/lib/site";

const areas = [
  "Análise e organização de dados",
  "Desenvolvimento de aplicações e APIs",
  "Integração de sistemas e fontes de dados",
  "Estruturação de bancos de dados e pipelines",
  "Dashboards e indicadores",
  "Automação de tarefas e processos",
  "Consultoria inicial e apoio técnico em projetos de dados e tecnologia",
];

const projetos = [
  {
    nome: "Boituva Flight Ops",
    texto:
      "Projeto experimental de apoio à análise das condições meteorológicas das operações de balonismo em Boituva. Integra fontes de dados, aplica regras de decisão e guarda histórico para análise. É um complemento de consulta e não substitui autoridades, responsáveis operacionais ou protocolos oficiais de segurança.",
    stack: "Python, FastAPI, Supabase/PostgreSQL, Next.js, TypeScript",
    link: { label: "Ver demonstração", href: "https://boituva-flight-ops.vercel.app/" },
  },
  {
    nome: "Boituva Digital",
    texto:
      "Projeto de experimentação com dados públicos. Coleta os dados do TCE e os organiza nas camadas RAW, BRONZE, SILVER e GOLD, para chegar a uma visão consolidada que apoie a análise da gestão pública. É um projeto independente, sem vínculo institucional.",
    stack: "Python, PostgreSQL, pipelines de dados",
    link: { label: "Ver repositório no GitHub", href: "https://github.com/vktorvini/boituva-digital-platform" },
  },
];

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="border-t border-line">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-16 md:grid-cols-[13rem_1fr] md:py-24">
        <h2 className="text-xl font-medium text-gold">{title}</h2>
        <div>{children}</div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-6 pb-20 pt-20 sm:pt-28">
        <h1 className="text-5xl font-light tracking-tight sm:text-7xl">{site.person}</h1>
        <p className="mt-6 max-w-2xl text-xl leading-relaxed text-muted sm:text-2xl">
          Gestão de TI e Ciência de Dados. Trabalho com integração de dados, APIs e aplicações para apoiar decisões.
        </p>
      </section>

      <Section id="sobre" title="Sobre">
        <div className="max-w-2xl space-y-5 text-lg leading-relaxed text-ink/90">
          <p>
            Sou formado em Gestão da Tecnologia da Informação, com formação em Ciência de Dados e especializações em Business Intelligence e Análise de Dados. Tenho experiência prática em suporte de TI e no desenvolvimento de projetos tecnológicos.
          </p>
          <p>
            Meu trabalho junta tecnologia, dados e gestão: organizar informação, integrar sistemas e transformar isso em apoio à decisão. Uso ferramentas de inteligência artificial como apoio ao desenvolvimento, com o objetivo de ampliar minha autonomia técnica e entender as soluções que construo.
          </p>
        </div>
        <dl className="mt-12 grid max-w-2xl gap-6 text-base sm:grid-cols-3">
          <div>
            <dt className="text-muted">Dados</dt>
            <dd className="mt-1">Python, pandas, NumPy, SQL, PostgreSQL</dd>
          </div>
          <div>
            <dt className="text-muted">Aplicações</dt>
            <dd className="mt-1">FastAPI, Next.js, TypeScript, Supabase</dd>
          </div>
          <div>
            <dt className="text-muted">Ferramentas</dt>
            <dd className="mt-1">Git, GitHub, Docker</dd>
          </div>
        </dl>
      </Section>

      <Section id="atuacao" title="Áreas de atuação">
        <ul className="grid max-w-3xl gap-x-12 gap-y-3 text-lg sm:grid-cols-2">
          {areas.map((a) => (
            <li key={a} className="border-b border-line pb-3">{a}</li>
          ))}
        </ul>
      </Section>

      <Section id="projetos" title="Projetos">
        <div className="max-w-3xl divide-y divide-line">
          {projetos.map((p) => (
            <article key={p.nome} className="py-8 first:pt-0 last:pb-0">
              <h3 className="text-2xl font-light">{p.nome}</h3>
              <p className="mt-3 leading-relaxed text-muted">{p.texto}</p>
              <p className="mt-3 text-sm text-ink/80">{p.stack}</p>
              <a
                href={p.link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block border-b border-gold pb-0.5 text-gold transition-colors hover:text-ink"
              >
                {p.link.label}
              </a>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
