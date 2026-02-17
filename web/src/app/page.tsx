import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/img/hero-img.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "brightness(0.4)"
          }}
        />

        <div className="relative z-10 container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold text-white font-heading tracking-wide">
              Bem-vindo à SSAG Tecnologia
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 font-light">
              Solucionamos seus problemas de gestão com eficiência e inovação.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Link
                href="/erp"
                className="bg-secondary text-white px-8 py-3 rounded-full font-semibold hover:bg-red-600 transition-colors duration-300"
              >
                Conheça Nossas Soluções
              </Link>
              <Link
                href="/contato"
                className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-primary transition-colors duration-300"
              >
                Fale Conosco
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-primary mb-4 font-heading">Sobre Nós</h2>
            <div className="w-16 h-1 bg-secondary mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-lg text-gray-600 text-justify">
              <p>
                SSAG Tecnologia, uma empresa de tecnologia genuinamente amazonense, focada em desenvolver soluções de gestão empresarial para diversos segmentos da indústria e comércio.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="text-secondary mr-2">✓</span> Sediada em Manaus-AM.
                </li>
                <li className="flex items-center">
                  <span className="text-secondary mr-2">✓</span> Desenvolvimento e ênfase no SSAG ERP.
                </li>
                <li className="flex items-center">
                  <span className="text-secondary mr-2">✓</span> Ferramenta utilizada por diversas empresas em Manaus-AM.
                </li>
              </ul>
            </div>
            <div className="space-y-6 text-lg text-gray-600 text-justify">
              <p>
                A SSAG não é uma empresa apenas de desenvolvimento de software, estendemos nosso suporte aos clientes através de serviços de consultoria, treinamento e assistência técnica. Com a missão de garantir que cada cliente não apenas obtenha uma solução eficaz, mas também saiba como maximizar seu potencial.
              </p>
              <p>
                Na SSAG Tecnologia, o objetivo é combinar inovação e conhecimento técnico para fornecer soluções de gestão empresarial de ponta que ajudem as empresas a prosperar na era digital.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-primary mb-4 font-heading">Produtos e Serviços</h2>
            <div className="w-16 h-1 bg-secondary mx-auto mb-6"></div>
            <p className="max-w-2xl mx-auto text-gray-600">
              A SSAG Tecnologia oferece soluções inovadoras e eficientes para o mercado de gestão empresarial.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Service 1 */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:-translate-y-2 transition-transform duration-300">
              <div className="text-secondary text-4xl mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                  <path d="M6.854 4.646a.5.5 0 0 1 0 .708L4.207 8l2.647 2.646a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 0 1 .708 0zm2.292 0a.5.5 0 0 0 0 .708L11.793 8l-2.647 2.646a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">ERP</h3>
              <p className="text-gray-600 text-sm">
                Nossos sistemas ERP são cuidadosamente projetados para otimizar processos oferecendo um controle eficiente e integrado.
              </p>
            </div>

            {/* Service 2 */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:-translate-y-2 transition-transform duration-300">
              <div className="text-secondary text-4xl mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-5.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Software House</h3>
              <p className="text-gray-600 text-sm">
                Desenvolvemos softwares personalizados Web, Desktop ou Mobile, atendendo às necessidades específicas do seu negócio.
              </p>
            </div>

            {/* Service 3 */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:-translate-y-2 transition-transform duration-300">
              <div className="text-secondary text-4xl mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M14 0a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12zM5.904 10.803 10 6.708v2.768a.75.75 0 0 0 1.5 0V5.5a.75.75 0 0 0-.75-.75h-3.975a.75.75 0 0 0 0 1.5h2.769l-4.097 4.096a.75.75 0 0 0 1.06 1.06z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">PD&I</h3>
              <p className="text-gray-600 text-sm">
                Projetos de Pesquisa, Desenvolvimento e Inovação para manter sua empresa na vanguarda do mercado.
              </p>
            </div>

            {/* Service 4 */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:-translate-y-2 transition-transform duration-300">
              <div className="text-secondary text-4xl mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z" />
                  <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Consultoria</h3>
              <p className="text-gray-600 text-sm">
                Consultoria especializada e treinamentos em sistemas de gestão e práticas organizacionais (Gestão Governada).
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
