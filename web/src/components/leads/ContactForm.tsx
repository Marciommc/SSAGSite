"use client";

import { useState } from "react";

export default function ContactForm() {
    const [formData, setFormData] = useState({
        nome: "",
        email: "",
        telefone: "",
        empresa: "",
        mensagem: "",
    });
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");

        try {
            const res = await fetch("/api/leads", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                setStatus("success");
                setFormData({ nome: "", email: "", telefone: "", empresa: "", mensagem: "" });
            } else {
                setStatus("error");
            }
        } catch (error) {
            setStatus("error");
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <form onSubmit={handleSubmit} className="mx-auto mt-16 max-w-xl sm:mt-20">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div className="sm:col-span-2">
                    <label htmlFor="nome" className="block text-sm font-semibold leading-6 text-text">
                        Nome Completo
                    </label>
                    <div className="mt-2.5">
                        <input
                            type="text"
                            name="nome"
                            id="nome"
                            autoComplete="name"
                            required
                            value={formData.nome}
                            onChange={handleChange}
                            className="block w-full rounded-md border-0 px-3.5 py-2 text-text shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-secondary sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>
                <div className="sm:col-span-2">
                    <label htmlFor="email" className="block text-sm font-semibold leading-6 text-text">
                        Email Corporativo
                    </label>
                    <div className="mt-2.5">
                        <input
                            type="email"
                            name="email"
                            id="email"
                            autoComplete="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="block w-full rounded-md border-0 px-3.5 py-2 text-text shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-secondary sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>
                <div className="sm:col-span-2">
                    <label htmlFor="telefone" className="block text-sm font-semibold leading-6 text-text">
                        Telefone / WhatsApp
                    </label>
                    <div className="mt-2.5">
                        <input
                            type="tel"
                            name="telefone"
                            id="telefone"
                            autoComplete="tel"
                            value={formData.telefone}
                            onChange={handleChange}
                            className="block w-full rounded-md border-0 px-3.5 py-2 text-text shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-secondary sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>
                <div className="sm:col-span-2">
                    <label htmlFor="empresa" className="block text-sm font-semibold leading-6 text-text">
                        Empresa
                    </label>
                    <div className="mt-2.5">
                        <input
                            type="text"
                            name="empresa"
                            id="empresa"
                            autoComplete="organization"
                            value={formData.empresa}
                            onChange={handleChange}
                            className="block w-full rounded-md border-0 px-3.5 py-2 text-text shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-secondary sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>
                <div className="sm:col-span-2">
                    <label htmlFor="mensagem" className="block text-sm font-semibold leading-6 text-text">
                        Como podemos ajudar?
                    </label>
                    <div className="mt-2.5">
                        <textarea
                            name="mensagem"
                            id="mensagem"
                            rows={4}
                            value={formData.mensagem}
                            onChange={handleChange}
                            className="block w-full rounded-md border-0 px-3.5 py-2 text-text shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-secondary sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>
            </div>
            <div className="mt-10">
                <button
                    type="submit"
                    disabled={status === "loading"}
                    className="block w-full rounded-md bg-secondary px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-secondary/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary disabled:opacity-50"
                >
                    {status === "loading" ? "Enviando..." : "Enviar Mensagem"}
                </button>
            </div>
            {status === "success" && (
                <div className="mt-4 p-4 text-green-700 bg-green-100 rounded-md">
                    Mensagem enviada com sucesso! Entraremos em contato em breve.
                </div>
            )}
            {status === "error" && (
                <div className="mt-4 p-4 text-red-700 bg-red-100 rounded-md">
                    Erro ao enviar mensagem. Tente novamente mais tarde.
                </div>
            )}
        </form>
    );
}
