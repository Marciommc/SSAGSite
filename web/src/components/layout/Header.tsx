"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

const navigation = [
    { name: "Início", href: "/" },
    { name: "Ecossistema SSAG", href: "/ecossistema" },
    { name: "ERP", href: "/erp" },
    { name: "Soluções", href: "/solucoes" },
    { name: "PD&I", href: "/pdi" },
    { name: "Consultoria", href: "/consultoria" },
    { name: "Cases", href: "/cases" },
    { name: "Contato", href: "/contato" },
];

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    return (
        <header className="fixed w-full z-50 bg-ssag-blue backdrop-blur-sm shadow-md transition-all">
            <nav
                className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
                aria-label="Global"
            >
                <div className="flex lg:flex-1">
                    <Link href="/" className="-m-1.5 p-1.5">
                        <span className="sr-only">SSAG Tecnologia</span>
                        {/* Placeholder for Logo - Replace with Image later */}
                        <h1 className="text-2xl font-bold text-white tracking-widest font-heading">
                            SSAG<span className="text-ssag-red">.</span>
                        </h1>
                    </Link>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-300"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Abrir menu principal</span>
                        <svg
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            aria-hidden="true"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                            />
                        </svg>
                    </button>
                </div>
                <div className="hidden lg:flex lg:gap-x-8">
                    {navigation.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={`text-sm font-semibold leading-6 transition-colors ${pathname === item.href
                                ? "text-secondary"
                                : "text-white hover:text-secondary"
                                }`}
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    {/* Optional CTA or login */}
                </div>
            </nav>
            {/* Mobile menu */}
            {mobileMenuOpen && (
                <div className="lg:hidden" role="dialog" aria-modal="true">
                    <div className="fixed inset-0 z-50" />
                    <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-primary px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
                        <div className="flex items-center justify-between">
                            <Link href="/" className="-m-1.5 p-1.5">
                                <span className="sr-only">SSAG Tecnologia</span>
                                <h1 className="text-xl font-bold text-white tracking-widest font-heading">
                                    SSAG<span className="text-secondary">.</span>
                                </h1>
                            </Link>
                            <button
                                type="button"
                                className="-m-2.5 rounded-md p-2.5 text-gray-300"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                <span className="sr-only">Fechar menu</span>
                                <svg
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>
                        <div className="mt-6 flow-root">
                            <div className="-my-6 divide-y divide-gray-500/10">
                                <div className="space-y-2 py-6">
                                    {navigation.map((item) => (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-800"
                                            onClick={() => setMobileMenuOpen(false)}
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}
