// Fonte única de dados do site. Itens com ready:false ainda não têm página e não aparecem no menu.
export const site = {
  name: "Vktor",
  person: "Victor Vinicius",
  tagline: "Tecnologia | Dados | Negócios Inteligentes",
  description:
    "Victor Vinicius, Gestão de TI e Ciência de Dados. Integração de dados, APIs, aplicações e painéis para apoiar decisões.",
  whatsapp: "5515998115708", // PENDENTE: confirmar número
  whatsappMessage: "Olá, Victor! Vim pelo site Vktor e gostaria de conversar sobre um projeto.",
  github: "https://github.com/vktorvini",
  nav: [
    { label: "Sobre", href: "/#sobre", ready: true },
    { label: "Atuação", href: "/#atuacao", ready: true },
    { label: "Projetos", href: "/#projetos", ready: true },
  ],
};
export const whatsappUrl = (msg: string = site.whatsappMessage) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(msg)}`;
