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

        return NextResponse.json(lead, { status: 201 });
    } catch (error) {
        console.error("Erro ao criar lead:", error);
        return NextResponse.json(
            { error: "Erro interno no servidor." },
            { status: 500 }
        );
    }
}
