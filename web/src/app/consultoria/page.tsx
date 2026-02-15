
export const metadata = {
    title: "Consultoria | SSAG Tecnologia",
    description: "Consultoria em TI e processos.",
};

export default function ConsultoriaPage() {
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center">
                    <h2 className="text-base font-semibold leading-7 text-secondary">Expertise</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-primary sm:text-4xl font-heading">
                        Consultoria Estratégica
                    </p>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        Apoiamos sua empresa na transformação digital, otimização de processos e escolha das melhores tecnologias.
                    </p>
                </div>
            </div>
        </div>
    );
}
