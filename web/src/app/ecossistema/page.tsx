
import SectionTitle from "@/components/ui/SectionTitle";
import FeatureList from "@/components/ui/FeatureList";

export const metadata = {
    title: "Sobre & Ecossistema | SSAG Tecnologia",
    description: "Conheça nossa história, missão, valores e o ecossistema tecnológico SSAG.",
};

export default function EcossistemaPage() {
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">

                {/* Intro / Sobre */}
                <SectionTitle
                    subtitle="Quem Somos"
                    title="SSAG Tecnologia"
                    description="Somos uma empresa especializada em soluções tecnológicas completas, atuando de forma integrada para combinar tecnologia, gestão e inovação. Nosso compromisso é transformar tecnologia em vantagem competitiva."
                />

                {/* Missão, Visão, Valores */}
                <div className="grid md:grid-cols-3 gap-8 mb-24">
                    <div className="bg-gray-50 p-8 rounded-2xl text-center hover:bg-gray-100 transition-colors">
                        <div className="text-4xl mb-4">🎯</div>
                        <h3 className="text-xl font-bold text-primary mb-3">Missão</h3>
                        <p className="text-gray-600">
                            Entregar soluções tecnológicas inovadoras que impulsionem o crescimento e a eficiência das empresas.
                        </p>
                    </div>

                    <div className="bg-gray-50 p-8 rounded-2xl text-center hover:bg-gray-100 transition-colors">
                        <div className="text-4xl mb-4">👁️</div>
                        <h3 className="text-xl font-bold text-primary mb-3">Visão</h3>
                        <p className="text-gray-600">
                            Ser referência em tecnologia, inovação e gestão empresarial no mercado nacional.
                        </p>
                    </div>

                    <div className="bg-gray-50 p-8 rounded-2xl text-left hover:bg-gray-100 transition-colors">
                        <div className="text-4xl mb-4 text-center">💎</div>
                        <h3 className="text-xl font-bold text-primary mb-3 text-center">Valores</h3>
                        <ul className="space-y-2 text-gray-600">
                            <li className="flex items-center"><span className="text-secondary mr-2">•</span> Ética e Transparência</li>
                            <li className="flex items-center"><span className="text-secondary mr-2">•</span> Inovação e Excelência</li>
                            <li className="flex items-center"><span className="text-secondary mr-2">•</span> Compromisso com o cliente</li>
                            <li className="flex items-center"><span className="text-secondary mr-2">•</span> Melhoria contínua</li>
                        </ul>
                    </div>
                </div>

                {/* Diferenciais */}
                <div className="mb-24">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <SectionTitle
                                align="left"
                                subtitle="Por que a SSAG?"
                                title="Nossos Diferenciais"
                                description="Entregamos mais do que software. Entregamos inteligência e resultados."
                            />
                            <FeatureList items={[
                                "Equipe multidisciplinar altamente qualificada",
                                "Soluções personalizadas para sua necessidade",
                                "Foco em inovação e resultados reais",
                                "Atendimento consultivo e próximo",
                                "Infraestrutura moderna e segura",
                                "Experiência comprovada em múltiplos segmentos"
                            ]} />
                        </div>
                        <div className="bg-gradient-to-br from-gray-900 to-ssag-blue h-full min-h-[400px] rounded-2xl flex items-center justify-center text-white p-8">
                            {/* Placeholder for Team/Office Image */}
                            <div className="text-center">
                                <h4 className="text-2xl font-bold mb-2">Ecossistema SSAG</h4>
                                <p className="opacity-80">Engenharia Governada & Tecnologia de Ponta</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Ecossistema Tech (Mantendo o contexto original da página) */}
                <div>
                    <SectionTitle
                        subtitle="Nossa Tecnologia"
                        title="O Ecossistema SSAG"
                        description="Nossas soluções são impulsionadas por arquiteturas modernas e agentes inteligentes."
                    />
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="border border-gray-200 p-8 rounded-xl">
                            <h4 className="text-xl font-bold text-primary mb-2">SSAG.Core</h4>
                            <p className="text-gray-600">O núcleo de nossas aplicações, garantindo estabilidade, segurança e performance para todos os produtos.</p>
                        </div>
                        <div className="border border-gray-200 p-8 rounded-xl">
                            <h4 className="text-xl font-bold text-primary mb-2">Agentes MCP</h4>
                            <p className="text-gray-600">Utilizamos o Model Context Protocol para integrar IA avançada em nossos fluxos de trabalho e produtos.</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
