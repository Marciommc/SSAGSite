
import ContactForm from "@/components/leads/ContactForm";

export const metadata = {
    title: "Contato | SSAG Tecnologia",
    description: "Fale com nossos especialistas.",
};

export default function ContatoPage() {
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center">
                    <h2 className="text-base font-semibold leading-7 text-secondary">Vamos Conversar?</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-primary sm:text-4xl font-heading">
                        Entre em Contato
                    </p>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        Estamos prontos para entender seu desafio e propor a melhor solução.
                    </p>

                    <ContactForm />
                </div>
            </div>
        </div>
    );
}
