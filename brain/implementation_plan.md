# Plano de Implementação - Modernização do Site SSAG

## Descrição do Objetivo
Transformar o site estático HTML atual da SSAG em uma plataforma evolutiva e moderna usando Next.js, TailwindCSS, PostgreSQL e Docker. O objetivo é estabelecer uma forte presença institucional, permitir a captação de leads e preparar para futuras integrações com o ecossistema SSAG.

## Revisão do Usuário Necessária
> [!IMPORTANT]
> - **Mudança de Stack**: Migração de HTML/PHP estático para Next.js (Node.js).
> - **Hospedagem**: Validar se o VPS atual está pronto para execução Docker/Node.
> - **Conteúdo**: O conteúdo do site antigo será migrado, mas a estrutura mudará significativamente.

## Mudanças Propostas

### Estrutura & Infraestrutura
#### [NOVO] [docker-compose.yml](file:///C:/Central/Dev/SSAG.Empresa/SSAGSite/docker/docker-compose.yml)
- Definir serviços: `ssag-web`, `ssag-db` (Postgres).

### Camada de Aplicação (Next.js)
#### [NOVO] [app](file:///C:/Central/Dev/SSAG.Empresa/SSAGSite/app)
- Inicializar Next.js 14 (App Router).
- Configurar TailwindCSS.
- Configurar Prisma ORM.

### Migração de Páginas
- **Início** (`/`) -> Refatorar de `index.html`
- **ERP** (`/erp`) -> Refatorar de `erp.html`
- **Soluções** (`/solucoes`) -> Refatorar de `software_house.html`
- **PDI** (`/pdi`) -> Refatorar de `pdi.html`
- **Consultoria** (`/consultoria`) -> Refatorar de `consultoria.html`
- **Novas Páginas**: `/ecossistema`, `/cases`, `/contato`, `/admin`.

## Plano de Verificação

### Testes Automatizados
- Verificação de build: `npm run build`
- Verificação de lint: `npm run lint`

### Verificação Manual
- **Verificação Visual**: Verificar se o design responsivo e o estilo Tailwind correspondem à estética "premium".
- **Verificação Funcional**: Testar a conexão de envio de leads ao banco de dados Postgres.
### Verificação de Navegação
- Garantir que todos os links funcionem e o roteamento esteja correto.

## Fase de Versionamento e Deploy
### GitHub & VPS
- **Repositório**: Inicializado na raiz `SSAGSite` contendo `web`, `docs`, `brain`.
- **Workflow**: GitHub Actions (`deploy.yml`) configurado para build e deploy automático.
- **Docker**: Container `ssag-web` rodando na porta `3002`, conectado ao banco `inovam-db` (ou rede compartilhada).
- **Variáveis**: Secrets configuradas (`DATABASE_URL`, `NEXTAUTH_SECRET`, etc).
