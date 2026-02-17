
import SectionTitle from "@/components/ui/SectionTitle";
import ServiceCard from "@/components/ui/ServiceCard";

export const metadata = {
    title: "Cloud & Infraestrutura | SSAG Tecnologia",
    description: "VPS, Servidores Dedicados, Backup e Hospedagem de alta performance.",
};

export default function CloudPage() {
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">

                {/* Header */}
                <SectionTitle
                    subtitle="Cloud & Infraestrutura"
                    title="Soluções Robustas em Nuvem"
                    description="Alta disponibilidade, segurança e performance para sua operação."
                />

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">

                    {/* 1. VPS */}
                    <ServiceCard
                        title="VPS"
                        description="Servidor Virtual Privado com escalabilidade sob demanda e alta disponibilidade."
                        icon={<span className="icon-[bi--cloud] text-4xl">☁️</span>}
                        items={[
                            "VPS em Nuvem",
                            "Armazenamento VPS",
                            "Escalabilidade",
                            "Alta disponibilidade"
                        ]}
                    />

                    {/* 2. Dedicados */}
                    <ServiceCard
                        title="Servidores Dedicados"
                        description="Performance máxima com isolamento completo e controle total do ambiente."
                        icon={<span className="icon-[bi--hdd-rack] text-4xl">🖥️</span>}
                        items={[
                            "Bare Metal",
                            "Performance máxima",
                            "Isolamento completo",
                            "Controle total"
                        ]}
                    />

                    {/* 3. Storage */}
                    <ServiceCard
                        title="Armazenamento e Backup"
                        description="Segurança para seus dados com planos de recuperação de desastres."
                        icon={<span className="icon-[bi--hdd-network] text-4xl">💾</span>}
                        items={[
                            "Armazenamento de Objetos",
                            "Backup em Nuvem",
                            "Planos de DRP"
                        ]}
                    />

                    {/* 4. Email/Hosting */}
                    <ServiceCard
                        title="Email e Hospedagem"
                        description="Soluções corporativas para sua presença digital."
                        icon={<span className="icon-[bi--envelope] text-4xl">📧</span>}
                        items={[
                            "E-mails corporativos",
                            "Hospedagem de Sites",
                            "Certificados SSL",
                            "Gestão de Domínios"
                        ]}
                    />

                </div>

                {/* Call to Action */}
                <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-8 md:p-16 text-center text-white">
                    <h2 className="text-3xl font-bold mb-6">Sua Infraestrutura Está Pronta para Escalar?</h2>
                    <p className="text-lg mb-8 max-w-2xl mx-auto text-gray-300">
                        Fale com nossos especialistas e desenhe a arquitetura ideal para o seu negócio.
                    </p>
                    <a
                        href="/contato"
                        className="bg-secondary text-white px-8 py-3 rounded-full font-bold hover:bg-red-600 transition-colors inline-block"
                    >
                        Falar com Consultor
                    </a>
                </div>

            </div>
        </div>
    );
}
