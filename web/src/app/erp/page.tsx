
import SectionTitle from "@/components/ui/SectionTitle";
import FeatureList from "@/components/ui/FeatureList";

export const metadata = {
    title: "ERP Industrial | SSAG Tecnologia",
    description: "Sistema de Gestão Industrial completo e integrado.",
};

export default function ERPPage() {
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">

                {/* Header */}
                <SectionTitle
                    subtitle="Gestão Industrial"
                    title="ERP SSAG – Controle Total"
                    description="Plataforma robusta, modular e escalável, desenvolvida para atender empresas de diversos segmentos com eficiência e inteligência de dados."
                />

                {/* Benefits Section */}
                <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
                    <div>
                        <h3 className="text-2xl font-bold text-primary mb-6">Por que escolher o ERP SSAG?</h3>
                        <FeatureList items={[
                            "Centralização de informações",
                            "Redução de retrabalho",
                            "Aumento da produtividade",
                            "Controle financeiro completo",
                            "Relatórios estratégicos em tempo real",
                            "Conformidade fiscal e tributária",
                            "Integração entre setores"
                        ]} />
                    </div>
                    <div className="bg-gray-100 rounded-2xl p-8 h-full min-h-[300px] flex items-center justify-center">
                        {/* Placeholder for ERP Image or Dashboard Screenshot */}
                        <div className="text-center text-gray-400">
                            <span className="text-6xl block mb-4">📊</span>
                            <p>Dashboard Interativo</p>
                        </div>
                    </div>
                </div>

                {/* Versions Section */}
                <div className="mb-20">
                    <SectionTitle
                        subtitle="Versões Especializadas"
                        title="Uma Solução para Cada Necessidade"
                        align="center"
                    />

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="bg-white border border-gray-200 p-6 rounded-xl hover:shadow-md transition-shadow">
                            <h4 className="font-bold text-lg text-primary mb-2">ERP SSAG Desktop</h4>
                            <p className="text-sm text-secondary font-semibold mb-3">Comercial & Serviços</p>
                            <p className="text-sm text-gray-600">Ideal para empresas de serviços técnicos, locação e comércio geral.</p>
                        </div>

                        <div className="bg-white border border-gray-200 p-6 rounded-xl hover:shadow-md transition-shadow">
                            <h4 className="font-bold text-lg text-primary mb-2">ERP SSAG Desktop</h4>
                            <p className="text-sm text-secondary font-semibold mb-3">Comércio Naval</p>
                            <p className="text-sm text-gray-600">Especializado para o setor naval, serviços técnicos e locação.</p>
                        </div>

                        <div className="bg-white border border-gray-200 p-6 rounded-xl hover:shadow-md transition-shadow">
                            <h4 className="font-bold text-lg text-primary mb-2">ERP SSAG Access</h4>
                            <p className="text-sm text-secondary font-semibold mb-3">Hospitalar</p>
                            <p className="text-sm text-gray-600">Focado no comércio de produtos hospitalares e regulamentações.</p>
                        </div>

                        <div className="bg-white border border-gray-200 p-6 rounded-xl hover:shadow-md transition-shadow">
                            <h4 className="font-bold text-lg text-primary mb-2">ERP SSAG Access</h4>
                            <p className="text-sm text-secondary font-semibold mb-3">Nichos Customizados</p>
                            <p className="text-sm text-gray-600">Multiempresa, multiloja e multivenda para redes complexas.</p>
                        </div>
                    </div>
                </div>

                {/* Call to Action */}
                <div className="bg-primary rounded-3xl p-8 md:p-16 text-center text-white">
                    <h2 className="text-3xl font-bold mb-6">Quer ver o ERP em ação?</h2>
                    <p className="text-lg mb-8 max-w-2xl mx-auto text-gray-200">
                        Agende uma demonstração gratuita e descubra como podemos otimizar sua gestão.
                    </p>
                    <a
                        href="/contato"
                        className="bg-white text-primary px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors inline-block"
                    >
                        Solicitar Demonstração
                    </a>
                </div>

            </div>
        </div>
    );
}
