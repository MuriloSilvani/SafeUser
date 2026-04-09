# SafeUser - Gerenciador de Usuários Seguro

> Aplicação web com foco em segurança do ambiente lógico

## 📋 Estrutura do Projeto

```
.
├── backend/              # Nest.js API (port 3001)
│   ├── src/
│   │   ├── auth/        # Autenticação (JWT, Local Strategy)
│   │   ├── user/        # Gerenciamento de usuários
│   │   ├── types/       # Tipos TypeScript compartilhados
│   │   └── main.ts      # Entrada da aplicação
│   ├── .env             # Variáveis de ambiente
│   └── package.json
│
├── frontend/            # Next.js App (port 3000)
│   ├── app/
│   │   ├── page.tsx     # Home
│   │   ├── register/    # Tela de registro
│   │   ├── login/       # Tela de login
│   │   ├── dashboard/   # Dashboard protegido
│   │   └── profile/     # Editar perfil
│   ├── lib/
│   │   ├── api.ts       # Cliente API com interceptadores
│   │   └── masks.ts     # Máscaras de entrada
│   ├── types/           # Tipos TypeScript
│   └── package.json
│
├── .env                 # Variáveis globais
├── .gitignore          # Configuração do git
└── package.json        # Root package (opcional)
```

## 🚀 Quick Start

### Pré-requisitos
- Node.js 18+
- npm ou yarn

### Instalação

```bash
# Backend
cd backend
npm install

# Frontend
cd ../frontend
npm install
```

### Variáveis de Ambiente

**Backend** (`.env` na pasta backend):
```env
JWT_SECRET=supersecretkeyforjwt
DATABASE_URL=sqlite:./database.sqlite
ENCRYPTION_KEY=abcdefghijklmnopqrstuvwx1234567890
PORT=3001
```

### Executar

**Terminal 1 - Backend:**
```bash
cd backend
npm run start:dev
```

**Terminal 2 - Frontend:**
```bash
cd frontend
npm run dev
```

Acesse: http://localhost:3000

## 🔐 Recursos de Segurança

### Backend
- ✅ **Autenticação JWT** com token em Bearer
- ✅ **Hash de Senha** com bcrypt + salt
- ✅ **Criptografia AES-256** para dados sensíveis (CPF, telefone)
- ✅ **ORM TypeORM** para prevenir SQL Injection
- ✅ **Validação de Entrada** com class-validator
- ✅ **Rate Limiting** combinado com Helmet
- ✅ **Roteamento Protegido** com Guards JWT
- ✅ **CORS Habilitado** para integração frontend

### Frontend
- ✅ **Máscaras de Entrada** (CPF, telefone)
- ✅ **Validação de Formulários** em tempo real
- ✅ **Sem renderização de HTML** direto (XSS prevention)
- ✅ **Interceptador de Token** automático
- ✅ **Tipagem Completa** com TypeScript
- ✅ **Design limpo** com Tailwind CSS

## 📦 Dependências Principais

### Backend
- `@nestjs/core` - Framework
- `@nestjs/typeorm` - ORM
- `@nestjs/jwt` - Autenticação
- `passport` - Estratégias de auth
- `bcrypt` - Hash seguro
- `sqlite3` - Banco de dados

### Frontend
- `next` - Framework React
- `axios` - Cliente HTTP
- `tailwindcss` - Estilos
- `typescript` - Type safety

## 📝 Operações Git

```bash
# Ver histórico unificado
git log --oneline

# Ver estrutura do repositório
git ls-tree -r HEAD --name-only

# Clonar projeto completo
git clone <url>
cd unoesc_seguranca
npm install  # Instala ambas as dependências
```

## 🧪 Testes

```bash
# Backend - Lint
cd backend && npm run lint

# Frontend - Lint
cd frontend && npm run lint
```

## 📚 Documentação Adicional

- Veja `README.md` (relatório detalhado) para documentação do projeto
- Configuração de segurança: Consulte código em `backend/src/` e `frontend/lib/`

## 👤 Autor

Desenvolvido como projeto de segurança de ambiente lógico.

---

**Repositório unificado em:** `/unoesc_seguranca` ✨
