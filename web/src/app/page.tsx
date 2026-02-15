import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-primary pt-20 pb-20 lg:pt-32 lg:pb-32 overflow-hidden -mt-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl font-heading">
              Engenharia de Software + Gestão Governada
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              ERP, automação e geração industrial de sistemas com rastreabilidade e governança.
              A plataforma institucional da SSAG preparada para o futuro.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/erp"
                className="rounded-full bg-secondary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-secondary/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
              >
                Conheça o ERP
              </Link>
              <Link href="/ecossistema" className="text-sm font-semibold leading-6 text-white">
                Nosso Ecossistema <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Section Placeholder */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-base font-semibold leading-7 text-secondary">Ecossistema SSAG</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-primary sm:text-4xl font-heading">
              Tecnologia para Alta Performance
            </p>
            <p className="mt-6 text-lg leading-8 text-text">
              Otimizamos processos complexos através de engenharia de software avançada e inteligência artificial.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
