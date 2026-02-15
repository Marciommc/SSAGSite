
export const metadata = {
    title: "PD&I | SSAG Tecnologia",
    description: "Pesquisa, Desenvolvimento e Inovação.",
};

export default function PDIPage() {
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center">
                    <h2 className="text-base font-semibold leading-7 text-secondary">Inovação</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-primary sm:text-4xl font-heading">
                        Pesquisa, Desenvolvimento e Inovação (PD&I)
                    </p>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        Investimos em tecnologias de ponta para criar o futuro hoje. Projetos de IA, IoT e automação avançada.
                    </p>
                </div>
            </div>
        </div>
    );
}
