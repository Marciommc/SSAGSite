
import SectionTitle from "@/components/ui/SectionTitle";
import ServiceCard from "@/components/ui/ServiceCard";

export const metadata = {
    title: "PD&I | SSAG Tecnologia",
    description: "Inovação, Captação de Recursos e Gestão de P&D.",
};

export default function PDIPage() {
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">

                {/* Header */}
                <SectionTitle
                    subtitle="Inovação"
                    title="Pesquisa, Desenvolvimento e Inovação"
                    description="Transformamos conhecimento em valor econômico através da gestão estratégica de PD&I."
                />

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">

                    {/* 1. Captação */}
                    <ServiceCard
                        title="Captação de Recursos"
                        description="Identificação e submissão de projetos para fontes de fomento e incentivos fiscais."
                        icon={<span className="icon-[bi--cash-coin] text-4xl">💰</span>}
                        items={[
                            "Estruturação de Projetos",
                            "Submissão a Editais",
                            "Relação com Investidores",
                            "Lei do Bem e Incentivos"
                        ]}
                    />

                    {/* 2. Gestão */}
                    <ServiceCard
                        title="Gestão de PD&I"
                        description="Coordenação técnica e administrativa para garantir o sucesso dos projetos."
                        icon={<span className="icon-[bi--kanban] text-4xl">📋</span>}
                        items={[
                            "Coordenação Técnica",
                            "Planejamento Estratégico",
                            "Execução e Monitoramento",
                            "Prestação de Contas"
                        ]}
                    />

                    {/* 3. Educacional */}
                    <ServiceCard
                        title="Desenvolvimento Educacional"
                        description="Capacitação de equipes para a era digital."
                        icon={<span className="icon-[bi--mortarboard] text-4xl">🎓</span>}
                        items={[
                            "Programas de Capacitação",
                            "Treinamentos Tecnológicos",
                            "Formação de Times"
                        ]}
                    />

                    {/* 4. Políticas */}
                    <ServiceCard
                        title="Políticas de Inovação"
                        description="Criação de ecossistemas internos de inovação."
                        icon={<span className="icon-[bi--lightbulb] text-4xl">💡</span>}
                        items={[
                            "Estruturação de Núcleos",
                            "Cultura Organizacional",
                            "Planejamento de Inovação"
                        ]}
                    />

                    {/* 5. P&D */}
                    <ServiceCard
                        title="Pesquisa e Desenvolvimento"
                        description="Do conceito à validação de novos produtos e tecnologias."
                        icon={<span className="icon-[bi--flask] text-4xl">🔬</span>}
                        items={[
                            "Novas Tecnologias",
                            "Prototipagem",
                            "Validação de Produto"
                        ]}
                    />

                    {/* 6. PI */}
                    <ServiceCard
                        title="Propriedade Intelectual"
                        description="Proteção legal do seu patrimônio tecnológico."
                        icon={<span className="icon-[bi--shield-lock] text-4xl">🛡️</span>}
                        items={[
                            "Registro de Software",
                            "Patentes e Marcas",
                            "Estratégia de Proteção"
                        ]}
                    />

                </div>

                {/* Call to Action */}
                <div className="bg-gradient-to-br from-secondary to-red-700 rounded-3xl p-8 md:p-16 text-center text-white">
                    <h2 className="text-3xl font-bold mb-6">Tem um Projeto Inovador?</h2>
                    <p className="text-lg mb-8 max-w-2xl mx-auto text-white/90">
                        Nós ajudamos a viabilizar financeiramente e tecnicamente sua ideia.
                    </p>
                    <a
                        href="/contato"
                        className="bg-white text-secondary px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors inline-block"
                    >
                        Falar com Consultor de Inovação
                    </a>
                </div>

            </div>
        </div>
    );
}
