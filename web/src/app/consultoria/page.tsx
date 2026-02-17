
import SectionTitle from "@/components/ui/SectionTitle";
import ServiceCard from "@/components/ui/ServiceCard";
import FeatureList from "@/components/ui/FeatureList";

export const metadata = {
    title: "Consultoria & Treinamentos | SSAG Tecnologia",
    description: "Consultoria estratégica em TI, Suporte Técnico e Capacitação.",
};

export default function ConsultoriaPage() {
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">

                {/* Header */}
                <SectionTitle
                    subtitle="Expertise e Suporte"
                    title="Consultoria e Treinamentos"
                    description="Otimizamos processos, sistemas e infraestrutura para impulsionar seu negócio."
                />

                <div className="grid md:grid-cols-3 gap-8 mb-20">

                    {/* 1. Consultoria TI */}
                    <div className="bg-gray-50 p-8 rounded-2xl border-t-4 border-secondary">
                        <h3 className="text-2xl font-bold text-primary mb-6">Consultoria em TI</h3>
                        <FeatureList items={[
                            "Diagnóstico Tecnológico",
                            "Planejamento Estratégico de TI",
                            "Governança de TI",
                            "Segurança da Informação"
                        ]} />
                    </div>

                    {/* 2. Suporte */}
                    <div className="bg-gray-50 p-8 rounded-2xl border-t-4 border-secondary">
                        <h3 className="text-2xl font-bold text-primary mb-6">Suporte Técnico</h3>
                        <FeatureList items={[
                            "Atendimento Especializado N1/N2/N3",
                            "Manutenção Preventiva",
                            "Manutenção Corretiva",
                            "Monitoramento de Sistemas 24/7"
                        ]} />
                    </div>

                    {/* 3. Treinamentos */}
                    <div className="bg-gray-50 p-8 rounded-2xl border-t-4 border-secondary">
                        <h3 className="text-2xl font-bold text-primary mb-6">Treinamentos</h3>
                        <FeatureList items={[
                            "Capacitação Técnica",
                            "Treinamentos Corporativos",
                            "Formação em Ferramentas",
                            "Workshops e Palestras"
                        ]} />
                    </div>

                </div>

                {/* Call to Action */}
                <div className="bg-primary rounded-3xl p-8 md:p-16 text-center text-white">
                    <h2 className="text-3xl font-bold mb-6">Precisa de Apoio Especializado?</h2>
                    <p className="text-lg mb-8 max-w-2xl mx-auto text-gray-200">
                        Conte com a expertise da SSAG para resolver desafios complexos de tecnologia.
                    </p>
                    <a
                        href="/contato"
                        className="bg-white text-primary px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors inline-block"
                    >
                        Solicitar Proposta
                    </a>
                </div>

            </div>
        </div>
    );
}
