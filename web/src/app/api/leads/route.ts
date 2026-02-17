import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { nome, email, telefone, empresa, mensagem } = body;

        if (!nome || !email) {
            return NextResponse.json(
                { error: "Nome e Email são obrigatórios." },
                { status: 400 }
            );
        }

        const lead = await prisma.lead.create({
            data: {
                nome,
                email,
                telefone,
                empresa,
                mensagem,
                origem: "site_contato",
            },
        });

        // Enviar notificação por email
        try {
            const { sendMail } = await import("@/lib/mail");
            await sendMail({
                to: process.env.SMTP_USER || "contato@ssagtecnologia.com", // Envia para o próprio email configurado
                subject: `Novo Lead: ${nome} - ${empresa || 'Sem Empresa'}`,
                html: `
                    <h1>Novo Lead Recebido</h1>
                    <p><strong>Nome:</strong> ${nome}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Telefone:</strong> ${telefone || 'N/A'}</p>
                    <p><strong>Empresa:</strong> ${empresa || 'N/A'}</p>
                    <p><strong>Mensagem:</strong></p>
                    <blockquote style="background: #f9f9f9; padding: 10px; border-left: 5px solid #ccc;">
                        ${mensagem || 'Sem mensagem'}
                    </blockquote>
                    <p><small>Recebido via site SSAG Tecnologia</small></p>
                `
            });
        } catch (mailError) {
            console.error("Falha ao enviar notificação de email:", mailError);
            // Não falhar a requisição principal se o email falhar, pois o lead já foi salvo
        }

        return NextResponse.json(lead, { status: 201 });
    } catch (error) {
        console.error("Erro ao criar lead:", error);
        return NextResponse.json(
            { error: "Erro interno no servidor." },
            { status: 500 }
        );
    }
}
