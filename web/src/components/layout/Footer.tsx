import Link from "next/link";

const navigation = {
    solutions: [
        { name: "ERP Desktop & Access", href: "/erp" },
        { name: "Software House", href: "/software-house" },
        { name: "Cloud & Infra", href: "/cloud" },
        { name: "PD&I", href: "/pdi" },
        { name: "Consultoria", href: "/consultoria" },
    ],
    company: [
        { name: "Sobre Nós", href: "/ecossistema" },
        { name: "Cases", href: "/cases" },
        { name: "Blog", href: "/blog" },
        { name: "Contato", href: "/contato" },
    ],
    legal: [
        { name: "Política de Privacidade", href: "/lgpd" },
        { name: "Termos de Uso", href: "/termos" },
    ],
};

export default function Footer() {
    return (
        <footer className="bg-ssag-blue text-white" aria-labelledby="footer-heading">
            <h2 id="footer-heading" className="sr-only">
                Rodapé
            </h2>
            <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
                <div className="xl:grid xl:grid-cols-3 xl:gap-8">
                    <div className="space-y-8">
                        <h1 className="text-2xl font-bold text-white tracking-widest font-heading">
                            SSAG<span className="text-ssag-red">.</span>
                        </h1>
                        <p className="text-sm leading-6 text-gray-300">
                            Engenharia de Software e Gestão Governada por Metamodelo.
                            Transformando complexidade em controle.
                        </p>
                        <div className="flex space-x-6">
                            {/* Social icons placeholder */}
                        </div>
                    </div>
                    <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <h3 className="text-sm font-semibold leading-6 text-white">Soluções</h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    {navigation.solutions.map((item) => (
                                        <li key={item.name}>
                                            <Link href={item.href} className="text-sm leading-6 text-gray-300 hover:text-white">
                                                {item.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="mt-10 md:mt-0">
                                <h3 className="text-sm font-semibold leading-6 text-white">Empresa</h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    {navigation.company.map((item) => (
                                        <li key={item.name}>
                                            <Link href={item.href} className="text-sm leading-6 text-gray-300 hover:text-white">
                                                {item.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <h3 className="text-sm font-semibold leading-6 text-white">Legal</h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    {navigation.legal.map((item) => (
                                        <li key={item.name}>
                                            <Link href={item.href} className="text-sm leading-6 text-gray-300 hover:text-white">
                                                {item.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
                    <p className="text-xs leading-5 text-gray-400">
                        &copy; {new Date().getFullYear()} SSAG Tecnologia. Todos os direitos reservados.
                    </p>
                </div>
            </div>
        </footer>
    );
}
