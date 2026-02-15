Abaixo está **o plano completo em um único Markdown**, consolidando:

* Evolução de stack (Next + Tailwind + Postgres + Docker)
* Reposicionamento institucional
* SEO + Marketing
* Área administrativa
* Deploy VPS
* Evolução futura integrada ao ecossistema SSAG
* Organização de repositório
* Estratégia de versionamento
* Roadmap por fases

---

# 📘 PLANO OFICIAL DE IMPLEMENTAÇÃO

# SSAG Tecnologia — Plataforma Institucional Evolutiva

---

# 🎯 Objetivo Estratégico

Transformar o atual site institucional da SSAG Tecnologia em:

> 🧠 Uma plataforma institucional evolutiva
> 🚀 Com stack moderna
> 📈 Preparada para marketing, captação e autoridade técnica
> 🔐 Integrável ao ecossistema SSAG
> 🐳 Containerizada via Docker

---

# 🏗 STACK OFICIAL DEFINIDA

* **Next.js 14 (App Router)**
* **React 18**
* **TailwindCSS**
* **PostgreSQL**
* **Prisma ORM**
* **Docker + Docker Compose**
* **Nginx (Reverse Proxy)**
* **SSL via Let's Encrypt**
* Email SMTP (Plesk ou externo)

---

# 📂 Estrutura do Repositório (Nova)

Criar novo projeto dentro do repo `SSAGSite`:

```
SSAGSite/
│
├── docker/
│   ├── docker-compose.yml
│   ├── nginx/
│   └── postgres/
│
├── app/ (Next.js)
│   ├── app/
│   ├── components/
│   ├── lib/
│   ├── prisma/
│   ├── public/
│   └── styles/
│
├── docs/
│   ├── brand.md
│   ├── social.md
│   ├── deploy.md
│   └── roadmap.md
│
└── .gitignore
```

---

# 🔁 FASE 1 — REFATORAÇÃO BASE (Nova Stack + Estrutura)

## 🎯 Objetivo:

Substituir HTML estático por Next.js mantendo escopo atual.

---

## 1.1 Criar Projeto Next

```
npx create-next-app@latest ssag-web
```

Configurações:

* TypeScript: ✔
* App Router: ✔
* Tailwind: ✔
* ESLint: ✔

---

## 1.2 Estrutura de Páginas (Refatoração)

Converter páginas atuais para rotas:

| Atual HTML          | Nova Rota    |
| ------------------- | ------------ |
| index.html          | /            |
| erp.html            | /erp         |
| software_house.html | /solucoes    |
| pdi.html            | /pdi         |
| consultoria.html    | /consultoria |
| privacy-policy.html | /lgpd        |
| terms-of-use.html   | /termos      |

Criar nova página:

* `/ecossistema`
* `/cases`
* `/contato`

---

## 1.3 Novo Menu Oficial

```
Início
Ecossistema SSAG
ERP
Soluções Sob Medida
PD&I
Consultoria
Cases
Contato
```

---

## 1.4 Refatorar Header e Footer como Components

```
components/
 ├── Header.tsx
 ├── Footer.tsx
 ├── CTA.tsx
 └── Section.tsx
```

---

## 1.5 Implementar SEO Dinâmico

Criar metadata por página:

```
export const metadata = {
  title: "SSAG Tecnologia | Engenharia de Software e Gestão",
  description: "...",
}
```

Implementar:

* OpenGraph
* Twitter Card
* Favicon
* sitemap.xml
* robots.txt

---

# 🗄 FASE 2 — BANCO DE DADOS + CAPTAÇÃO

## 🎯 Objetivo:

Substituir formulário PHP por API interna Next + Postgres.

---

## 2.1 Subir Postgres via Docker

Criar `docker-compose.yml`:

```
services:
  ssag-db:
    image: postgres:15
    environment:
      POSTGRES_USER: ssag
      POSTGRES_PASSWORD: ssag
      POSTGRES_DB: ssag_site
    ports:
      - "5432:5432"
    volumes:
      - ssag_db_data:/var/lib/postgresql/data
```

---

## 2.2 Prisma ORM

Instalar:

```
npm install prisma @prisma/client
npx prisma init
```

Criar schema inicial:

### lead

* id
* nome
* email
* telefone
* empresa
* segmento
* mensagem
* origem
* createdAt

### newsletter

* id
* email
* createdAt

### diagnostico

* id
* leadId
* desafio
* sistemaAtual
* prazo
* orcamento
* status

---

## 2.3 Criar API Route

```
app/api/leads/route.ts
```

Salvar dados no banco.

---

# 🔐 FASE 3 — ÁREA ADMINISTRATIVA INTERNA

## 🎯 Objetivo:

Criar painel interno protegido.

---

## 3.1 Criar Rota:

```
/admin
```

Autenticação simples (JWT ou NextAuth)

---

## 3.2 Dashboard

Exibir:

* Total de leads
* Leads recentes
* Origem dos leads
* Exportação CSV

---

# 🎨 FASE 4 — MARKETING & POSICIONAMENTO

## 🎯 Objetivo:

Transformar o site em máquina de autoridade.

---

## 4.1 Hero Section Profissional

Headline sugerida:

> “SSAG: Engenharia de Software + Gestão Governada por Metamodelo”

Subheadline:

> ERP, automação e geração industrial de sistemas com rastreabilidade e governança.

---

## 4.2 Criar Página `/ecossistema`

Explicar:

* SSAG.Core
* SSAG.MCP.Tasks
* SSAG.MCP.Agente
* SSAG.CAE
* Futuro SSAG.Cortex

---

## 4.3 Criar `/cases`

Modelo:

* Problema
* Solução
* Resultado
* Métricas

---

## 4.4 Criar Landing Pages Segmentadas

Futuro:

* /erp-industria
* /erp-construcao
* /erp-comex

---

# 📈 FASE 5 — CONTEÚDO & SEO

Criar sistema simples de blog:

```
/blog
/blog/[slug]
```

Estratégia:

* 2 artigos por semana
* Conteúdo técnico
* Dores empresariais
* Engenharia SSAG

---

# 🐳 FASE 6 — DEPLOY VPS 38.242.243.45

## 6.1 Estrutura Docker Final

```
services:
  ssag-web
  ssag-db
  nginx
```

---

## 6.2 Build Produção

```
npm run build
```

---

## 6.3 Nginx Reverse Proxy

Configurar:

* Porta 80 → redirect 443
* SSL via Let's Encrypt
* Proxy para container Next

---

# 📊 FASE 7 — EVOLUÇÃO ESTRATÉGICA

## Futuro (Integração com SSAG)

* Dashboard integrado ao SSAG.Core
* API compartilhada
* Portal cliente
* Área de documentação técnica dinâmica
* Integração com Mautic
* Automação de marketing

---

# 🧠 POSICIONAMENTO FINAL

Este não será apenas um site.

Será:

> 🔹 Plataforma institucional da SSAG
> 🔹 Hub de autoridade técnica
> 🔹 Captador estruturado de negócios
> 🔹 Base para SaaS futuros
> 🔹 Demonstração prática de engenharia

---

# 📋 CHECKLIST DE EXECUÇÃO (ANTIGRAVITY)

### Fase 1

* [ ] Criar projeto Next
* [ ] Refatorar páginas
* [ ] Criar menu novo
* [ ] Implementar SEO

### Fase 2

* [ ] Subir Postgres
* [ ] Criar Prisma
* [ ] Criar API leads
* [ ] Conectar formulário

### Fase 3

* [ ] Criar /admin
* [ ] Implementar login
* [ ] Criar dashboard

### Fase 4

* [ ] Criar /ecossistema
* [ ] Criar /cases
* [ ] Atualizar copy institucional

### Fase 5

* [ ] Criar blog
* [ ] Criar 5 artigos iniciais

### Fase 6

* [ ] Configurar Docker produção
* [ ] Configurar Nginx
* [ ] SSL
* [ ] Deploy

---

# 🔥 Conclusão

Você não estará criando um site.

Você estará criando:

> A vitrine oficial da engenharia SSAG
> A base de captação estruturada
> E o início da plataforma institucional evolutiva
