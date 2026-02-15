
export const metadata = {
    title: "ERP Industrial | SSAG Tecnologia",
    description: "Sistema de Gestão Industrial completo e integrado.",
};

export default function ERPPage() {
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center">
                    <h2 className="text-base font-semibold leading-7 text-secondary">Gestão Industrial</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-primary sm:text-4xl font-heading">
                        ERP SSAG - Controle Total
                    </p>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        Nossa solução de ERP foi desenhada especificamente para indústrias que necessitam de rastreabilidade, controle de estoque e gestão financeira integrada.
                    </p>
                </div>
            </div>
        </div>
    );
}
