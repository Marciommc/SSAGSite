
import SectionTitle from "@/components/ui/SectionTitle";
import ServiceCard from "@/components/ui/ServiceCard";
import FeatureList from "@/components/ui/FeatureList";

export const metadata = {
    title: "Software House | SSAG Tecnologia",
    description: "Desenvolvimento de software sob medida, QA, UX/UI e DevOps.",
};

export default function SoftwareHousePage() {
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">

                {/* Header */}
                <SectionTitle
                    subtitle="Software House"
                    title="Desenvolvimento Sob Medida"
                    description="Desenvolvemos soluções com foco em performance, segurança e escalabilidade."
                />

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">

                    {/* 1. Desenvolvimento */}
                    <div className="bg-gray-50 p-8 rounded-2xl">
                        <h3 className="text-xl font-bold text-primary mb-4">1️⃣ Desenvolvimento de Software</h3>
                        <FeatureList items={[
                            "Desenvolvimento de MVP",
                            "Sistemas Web e Mobile",
                            "Atualização de Software Legado",
                            "Migração para Nuvem",
                            "Manutenção Evolutiva e Corretiva",
                            "Melhoria de Performance",
                            "Integrações com APIs e sistemas externos"
                        ]} />
                    </div>

                    {/* 2. QA */}
                    <div className="bg-gray-50 p-8 rounded-2xl">
                        <h3 className="text-xl font-bold text-primary mb-4">2️⃣ Testes e QA</h3>
                        <p className="text-sm text-gray-600 mb-4">Garantimos qualidade e confiabilidade em todas as entregas.</p>
                        <FeatureList items={[
                            "Testes Funcionais",
                            "Testes Não Funcionais",
                            "Automação de Testes",
                            "Consultoria em Processos de Qualidade",
                            "Implantação de Cultura de QA"
                        ]} />
                    </div>

                    {/* 3. UX/UI */}
                    <div className="bg-gray-50 p-8 rounded-2xl">
                        <h3 className="text-xl font-bold text-primary mb-4">3️⃣ UX/UI Design</h3>
                        <p className="text-sm text-gray-600 mb-4">Criamos experiências digitais intuitivas e centradas no usuário.</p>
                        <FeatureList items={[
                            "Design de Interface",
                            "Prototipagem",
                            "Testes de Usabilidade",
                            "Arquitetura da Informação",
                            "Pesquisa com Usuários"
                        ]} />
                    </div>

                    {/* 4. DevOps */}
                    <div className="bg-gray-50 p-8 rounded-2xl">
                        <h3 className="text-xl font-bold text-primary mb-4">4️⃣ DevOps</h3>
                        <p className="text-sm text-gray-600 mb-4">Automatizamos processos e garantimos ambientes seguros.</p>
                        <FeatureList items={[
                            "Infraestrutura como Código (IaC)",
                            "Consultoria em Cloud",
                            "Orquestração de Containers",
                            "Segurança da Informação",
                            "Monitoramento e Observabilidade",
                            "CI/CD"
                        ]} />
                    </div>

                    {/* 5. Ágil */}
                    <div className="bg-gray-50 p-8 rounded-2xl">
                        <h3 className="text-xl font-bold text-primary mb-4">5️⃣ Métodos Ágeis</h3>
                        <p className="text-sm text-gray-600 mb-4">Implementamos cultura ágil para acelerar resultados.</p>
                        <FeatureList items={[
                            "Treinamentos em Scrum, Kanban e Agile",
                            "Consultoria em Transformação Ágil",
                            "Estruturação de Times Ágeis",
                            "Implantação de OKRs"
                        ]} />
                    </div>

                </div>

                {/* Call to Action */}
                <div className="bg-primary rounded-3xl p-8 md:p-16 text-center text-white">
                    <h2 className="text-3xl font-bold mb-6">Precisa de um Software Personalizado?</h2>
                    <p className="text-lg mb-8 max-w-2xl mx-auto text-gray-200">
                        Transforme suas ideias em realidade com nossa equipe de especialistas.
                    </p>
                    <a
                        href="/contato"
                        className="bg-white text-primary px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors inline-block"
                    >
                        Solicitar Orçamento
                    </a>
                </div>

            </div>
        </div>
    );
}
