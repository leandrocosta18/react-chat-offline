import {
  ArrowDown,
  ArrowUpRight,
  Braces,
  Code2,
  Database,
  ExternalLink,
  GitBranch,
  Layers3,
  Mail,
  MapPin,
  Server,
} from 'lucide-react'

const skills = [
  { name: 'JavaScript', type: 'Linguagem', icon: Braces },
  { name: 'Python', type: 'Linguagem', icon: Code2 },
  { name: 'React.js', type: 'Frontend', icon: Layers3 },
  { name: 'Next.js', type: 'Frontend', icon: Code2 },
  { name: 'Node.js', type: 'Backend', icon: Server },
  { name: 'PostgreSQL', type: 'Dados', icon: Database },
  { name: 'Tailwind CSS', type: 'Interface', icon: Layers3 },
  { name: 'Git & GitHub', type: 'Workflow', icon: GitBranch },
]

const projects = [
  { number: '01', title: 'Clima', description: 'Previsão do tempo com consulta em tempo real e uma interface simples para decidir o dia.', tags: ['JavaScript', 'API', 'CSS'], href: 'https://leandrocosta18.github.io/clima/', tone: 'lime' },
  { number: '02', title: 'Login', description: 'Uma tela de autenticação responsiva com foco em hierarquia visual e experiência de entrada.', tags: ['HTML', 'CSS', 'JavaScript'], href: 'https://leandrocosta18.github.io/Projeto-de-Login/', tone: 'coral' },
  { number: '03', title: 'Site de Pizza', description: 'Landing page saborosa e responsiva para uma pizzaria, com cards de produtos e navegação direta.', tags: ['HTML', 'CSS', 'UI'], href: 'https://leandrocosta18.github.io/projeto-site-pizza/', tone: 'orange' },
  { number: '04', title: 'Relógio', description: 'Relógio digital construído para praticar atualização de estado e uma composição visual objetiva.', tags: ['JavaScript', 'DOM', 'CSS'], href: 'https://leandrocosta18.github.io/projeto-relogio/', tone: 'blue' },
  { number: '05', title: 'Chat offline', description: 'Experimento em React para conversas locais, componentes reutilizáveis e estados de interface.', tags: ['React', 'TypeScript', 'Vite'], href: 'https://github.com/leandrocosta18/react-chat-offline', tone: 'violet' },
]

function App() {
  return (
    <div className="min-h-screen overflow-hidden bg-ink text-paper selection:bg-lime selection:text-ink">
      <header className="relative mx-auto max-w-7xl px-6 pb-20 pt-6 sm:px-10 lg:px-16 lg:pb-32">
        <nav className="flex items-center justify-between border-b border-white/10 pb-5" aria-label="Navegação principal">
          <a href="#inicio" className="font-display text-lg font-bold tracking-tight text-paper">leandro<span className="text-lime">.</span></a>
          <div className="hidden items-center gap-8 text-sm text-muted sm:flex"><a className="transition-colors hover:text-lime" href="#sobre">Sobre</a><a className="transition-colors hover:text-lime" href="#skills">Skills</a><a className="transition-colors hover:text-lime" href="#projetos">Projetos</a></div>
          <a href="mailto:leandrooliveiracosta2001@gmail.com" className="group flex items-center gap-2 text-sm font-semibold text-lime">Vamos conversar<ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></a>
        </nav>

        <div id="inicio" className="relative grid gap-14 pt-20 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-20 lg:pt-28">
          <div className="relative z-10"><p className="mb-7 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.28em] text-lime"><span className="h-px w-8 bg-lime" /> Desenvolvedor em formação</p><h1 className="max-w-4xl font-display text-5xl font-bold leading-[0.94] tracking-[-0.055em] text-paper sm:text-7xl lg:text-[6.6rem]">Código com <span className="text-lime">intenção.</span></h1><p className="mt-8 max-w-xl text-base leading-7 text-muted sm:text-lg">Me chamo Leandro, tenho 25 anos e estou construindo meu caminho como desenvolvedor full-stack. Transformo curiosidade em produtos digitais úteis, claros e bem pensados.</p><div className="mt-10 flex flex-wrap items-center gap-5"><a href="#projetos" className="group inline-flex items-center gap-3 rounded-full bg-lime px-6 py-3.5 text-sm font-bold text-ink transition-transform hover:-translate-y-1">Ver meus projetos<ArrowDown size={17} className="transition-transform group-hover:translate-y-1" /></a><a href="mailto:leandrooliveiracosta2001@gmail.com" className="inline-flex items-center gap-2 text-sm font-semibold text-paper transition-colors hover:text-lime"><Mail size={17} /> Entre em contato</a></div></div>

          <div className="relative mx-auto w-full max-w-md lg:justify-self-end"><div className="absolute -right-10 -top-12 h-36 w-36 rounded-full border border-lime/30" /><div className="absolute -bottom-12 -left-10 h-24 w-24 rounded-full bg-coral/80 blur-2xl" /><div className="relative border border-white/15 bg-[#20231f] p-4 shadow-[16px_16px_0_#b7f34a]"><div className="flex items-center justify-between border-b border-white/10 pb-4 text-xs text-muted"><span className="flex gap-1.5"><i className="h-2.5 w-2.5 rounded-full bg-coral" /><i className="h-2.5 w-2.5 rounded-full bg-lime" /><i className="h-2.5 w-2.5 rounded-full bg-paper/50" /></span><span>leandro.tsx</span></div><div className="space-y-4 px-2 py-7 font-mono text-sm leading-7 sm:px-6 sm:text-base"><p><span className="text-coral">const</span> <span className="text-lime">developer</span> = {'{'}</p><p className="pl-5 text-muted">name: <span className="text-paper">&apos;Leandro&apos;</span>,</p><p className="pl-5 text-muted">focus: <span className="text-paper">&apos;full-stack&apos;</span>,</p><p className="pl-5 text-muted">building: <span className="text-paper">true</span>,</p><p className="pl-5 text-muted">coffee: <span className="text-paper">Infinity</span>,</p><p>{'}'}</p><p className="pt-3 text-coral">developer<span className="text-paper">.</span><span className="text-lime">build</span><span className="text-paper">()</span></p></div></div><span className="absolute -bottom-9 -right-4 rotate-[-8deg] font-display text-4xl font-bold text-coral">hello!</span></div>
        </div>
      </header>

      <main>
        <section id="sobre" className="border-y border-white/10 bg-[#171916] px-6 py-20 sm:px-10 lg:px-16"><div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24"><div><p className="eyebrow">01 / Sobre mim</p><h2 className="section-title mt-5">Aprender fazendo.</h2></div><div className="max-w-2xl space-y-6 text-base leading-8 text-muted sm:text-lg"><p>Atualmente curso Análise e Desenvolvimento de Sistemas e busco minha primeira oportunidade para atuar profissionalmente na área. Gosto de entender como as coisas funcionam e transformar ideias em experiências que fazem sentido.</p><p>Meu foco é seguir evoluindo no ecossistema JavaScript, conectando interfaces bem construídas a backends confiáveis. Cada projeto é um novo espaço para praticar, experimentar e melhorar.</p><div className="flex items-center gap-2 pt-2 text-sm font-semibold text-paper"><MapPin size={16} className="text-lime" /> Brasil, disponível para oportunidades</div></div></div></section>

        <section id="skills" className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-16 lg:py-28"><div className="mb-12 flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div><p className="eyebrow">02 / Ferramentas</p><h2 className="section-title mt-5">Stack em construção.</h2></div><p className="max-w-xs text-sm leading-6 text-muted">Tecnologias que uso para transformar ideias em projetos reais.</p></div><div className="grid grid-cols-2 gap-3 md:grid-cols-4">{skills.map(({ name, type, icon: Icon }) => <div key={name} className="group border border-white/10 bg-white/[0.03] p-5 transition-colors hover:border-lime/50 hover:bg-lime hover:text-ink"><Icon size={23} strokeWidth={1.5} className="mb-8 text-lime group-hover:text-ink" /><p className="font-display text-lg font-bold">{name}</p><p className="mt-1 text-xs text-muted group-hover:text-ink/60">{type}</p></div>)}</div></section>

        <section id="projetos" className="border-t border-white/10 bg-[#171916] px-6 py-20 sm:px-10 lg:px-16 lg:py-28"><div className="mx-auto max-w-7xl"><div className="mb-12 flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div><p className="eyebrow">03 / Projetos selecionados</p><h2 className="section-title mt-5">Coisas que construí.</h2></div><GitBranch size={36} strokeWidth={1} className="hidden text-lime sm:block" /></div><div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">{projects.map((project) => <a key={project.number} href={project.href} target="_blank" rel="noreferrer" className={`project-card project-${project.tone} group`}><div className="flex items-start justify-between"><span className="font-mono text-xs text-muted">{project.number}</span><ArrowUpRight size={20} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></div><div className="mt-20"><h3 className="font-display text-3xl font-bold">{project.title}</h3><p className="mt-3 max-w-sm text-sm leading-6 text-muted group-hover:text-ink/70">{project.description}</p><div className="mt-6 flex flex-wrap gap-2">{project.tags.map(tag => <span key={tag} className="rounded-full border border-current/20 px-3 py-1 text-[11px] font-semibold">{tag}</span>)}</div></div></a>)}<a href="https://github.com/leandrocosta18" target="_blank" rel="noreferrer" className="group flex min-h-[280px] flex-col justify-between border border-lime bg-lime p-6 text-ink transition-transform hover:-translate-y-1"><div className="flex justify-between"><GitBranch size={28} strokeWidth={1.5} /><ExternalLink size={20} /></div><div><h3 className="font-display text-3xl font-bold leading-none">Mais no<br />GitHub.</h3><p className="mt-4 text-sm font-semibold">@leandrocosta18 <ArrowUpRight className="inline transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" size={16} /></p></div></a></div></div></section>
      </main>

      <footer className="mx-auto max-w-7xl px-6 pb-8 pt-20 sm:px-10 lg:px-16"><div className="grid gap-10 border-b border-white/10 pb-16 lg:grid-cols-[1fr_auto] lg:items-end"><div><p className="eyebrow">04 / Vamos conversar</p><h2 className="mt-5 max-w-2xl font-display text-5xl font-bold leading-none tracking-[-0.05em] sm:text-7xl">Tem uma ideia?<br /><span className="text-lime">Me chama.</span></h2></div><a href="mailto:leandrooliveiracosta2001@gmail.com" className="group inline-flex items-center gap-2 text-sm font-bold text-paper hover:text-lime">leandrooliveiracosta2001@gmail.com <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></a></div><div className="flex flex-col justify-between gap-6 pt-6 text-xs text-muted sm:flex-row sm:items-center"><p>© 2026 Leandro Oliveira Costa</p><div className="flex gap-5"><a className="flex items-center gap-2 hover:text-lime" href="https://www.linkedin.com/in/leandro-oliveira-128516284" target="_blank" rel="noreferrer"><ExternalLink size={15} /> LinkedIn</a><a className="flex items-center gap-2 hover:text-lime" href="https://github.com/leandrocosta18" target="_blank" rel="noreferrer"><GitBranch size={15} /> GitHub</a></div></div></footer>
    </div>
  )
}

export default App