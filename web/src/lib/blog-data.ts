export interface BlogPost {
    slug: string;
    title: string;
    excerpt: string;
    date: string;
    content: string; // HTML or Markdown
}

export const blogPosts: BlogPost[] = [
    {
        slug: "engenharia-de-software-industrial",
        title: "Por que sua indústria precisa de Engenharia de Software, não apenas TI",
        excerpt: "Descubra a diferença entre manter sistemas rodando e projetar soluções escaláveis que impulsionam o chão de fábrica.",
        date: "2024-05-15",
        content: `
      <p>Muitas indústrias tratam a tecnologia como um centro de custo, focando apenas em manter o ERP rodando e os computadores funcionando. No entanto, na era da Indústria 4.0, a Engenharia de Software se torna o coração da operação.</p>
      <h2>O que muda?</h2>
      <p>Rastreabilidade total, integração entre máquinas e sistemas de gestão, e tomada de decisão baseada em dados em tempo real. Não é sobre consertar impressoras, é sobre arquitetar o futuro da sua produção.</p>
      <p>Na SSAG, aplicamos metodologias de desenvolvimento ágil e arquitetura robusta para garantir que seu software cresça com sua fábrica.</p>
    `,
    },
    {
        slug: "gestao-governada-por-metamodelo",
        title: "O que é Gestão Governada por Metamodelo?",
        excerpt: "Entenda como a abstração e a modelagem podem simplificar a complexidade da gestão empresarial.",
        date: "2024-05-20",
        content: `
      <p>A complexidade dos negócios modernos exige mais do que planilhas e sistemas rígidos. Exige uma gestão que se adapte.</p>
      <h2>O Metamodelo</h2>
      <p>O conceito de Metamodelo permite que definamos as regras do negócio como dados, não apenas como código hard-coded. Isso dá flexibilidade e governança, permitindo que a empresa evolua seus processos sem reescrever todo o sistema.</p>
    `,
    },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
    return blogPosts.find((post) => post.slug === slug);
}
