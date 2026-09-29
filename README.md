# UAIFlow — Frontend Client

> **Interface Web para Aquisição Inteligente de Idiomas baseada em Neurociência, Chunks Lexicais e Feedback por IA.**

---

## Sobre o Projeto

O **UAIFlow** é a aplicação frontend da plataforma UAIFlow, projetada para oferecer uma experiência fluida, moderna e sem atritos para estudantes de idiomas com rotinas corridas.

A aplicação foca no **desafio diário de produção ativa de frases**, apresentando blocos lexicais personalizados (*chunks*, *phrasal verbs*, *collocations*, expressões) gerados dinamicamente com base no perfil e interesses do usuário, exibindo avaliações pedagógicas instantâneas e sugestões *native-like* via IA.

---

## Tech Stack & Design System

- **Framework Core:** Next.js (App Router)
- **Linguagem:** TypeScript
- **Estilização & Temas:** Tailwind CSS com paleta no espaço de cor OKLCH (Slate Dark Theme + Mineral Purple Accent)
- **Componentes UI:** Shadcn/UI & Radix UI Primitives
- **Ícones:** Lucide Icons
- **Gerenciamento de Estado & Data Fetching:** TanStack Query (React Query) & Axios
- **Formulários & Validação:** React Hook Form & Zod
- **Code Style & Linting:** Biome / Ultracite

---

## Estrutura do Projeto

```bash
uai-flow-web/
├── src/
│   ├── app/                    # App Router (páginas e rotas)
│   │   ├── (private)/          # Rotas autenticadas (Dashboard, Sentences, Profile)
│   │   ├── (public)/           # Home, Login e Register     
│   │   └── layout.tsx          # Root layout
│   ├── components/
│   │   ├── ui/                 # Componentes base do Shadcn/UI (Button, Input, Card, Dialog)
│   │   ├── dashboard/          # Componentes da Nuvem Diária e Workspace de frases
│   │   ├── sentences/          # Cards e filtros da galeria de frases do usuário
│   │   └── layout/             # Header, Sidebar, User Menu e Language Selector
│   ├── context/
│   ├── hooks/                  # Custom hooks (TanStack Query mutations/queries)
│   ├── images/                 # Imagens estáticas e favicons
│   ├── lib/                    # Configurações de clientes (Axios API, QueryClient)
│   ├── providers/
│   ├── schemas/
│   ├── services/               # Chamadas de API REST divididas por módulo
│   ├── types/                  # Definições de interfaces e types do TypeScript
│   ├── utils/                  # Formatadores e utilitários de CSS (cn helper)
│   └── proxy.ts
├── .gitignore
├── biome.jsonc
├── next.config.ts
├── package.json
├── pnpm-lock.yaml
├── pnpm-workspace.yaml
├── postcss.config.mjs
├── README.md
└── tsconfig.json

```

---

## Como Executar o Projeto Localmente

### Pré-requisitos

* **Node.js** (v18 ou superior)
* Servidor backend **UAIFlow API** rodando (localmente em `http://localhost:3333` ou remoto)
* Gerenciador de pacotes (`npm`, `pnpm` ou `bun`)

### 1. Clonar o repositório e instalar dependências

```bash
git clone [https://github.com/tatyanepgoncalves/uaiflow.git](https://github.com/tatyanepgoncalves/uaiflow.git)
cd uaiflow
npm install

```

### 2. Configurar Variáveis de Ambiente

Crie um arquivo `.env.local` na raiz do projeto:

```env
NEXT_PUBLIC_API_URL=http://localhost:3333

```

### 3. Executar o Servidor de Desenvolvimento

```bash
npm run dev

```

Abra `http://localhost:3000` no seu navegador para visualizar a aplicação.

---

## Principais Funcionalidades da Interface

* **Dashboard Diário (Core Loop):** Nuvem interativa com os chunks do dia e formulário de produção de frases com feedback da IA em tempo real.
* **Banco de Frases Privado:** Galeria estilo feed/cards com busca e filtros por status de avaliação, tipo de chunk e data.
* **Configuração de Contexto IA:** Formulário de perfil para informar nível (A1-B2), profissão e interesses que alimentam as sugestões do tutor IA.
* **Isolamento de Idiomas:** Seletor no header que alterna instantaneamente o idioma ativo do usuário.

---

## Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](./LICENSE) para mais detalhes.

---

Developed with 🔺 by **Tatyane**

