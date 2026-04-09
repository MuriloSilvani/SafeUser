# SafeUser - Guia de Instalação e Configuração

## Pré-requisitos

- Node.js 18+ 
- npm ou yarn
- Git

## Instalação

### 1. Clone o repositório

```bash
git clone git@github.com:MuriloSilvani/SafeUser.git
cd SafeUser
```

### 2. Configuração de Variáveis de Ambiente

#### Backend

```bash
cd backend
cp .env.example .env
```

**Edite o arquivo `.env` e configure:**

```env
JWT_SECRET=sua-chave-jwt-super-secreta-e-unica
DATABASE_URL=sqlite:./database.sqlite
ENCRYPTION_KEY=abcdefghijklmnopqrstuvwx123456789012  # 32 caracteres obrigatório
```

**Importante:**
- `JWT_SECRET`: Gere uma chave aleatória e segura para produção
- `ENCRYPTION_KEY`: Deve ter exatamente 32 caracteres para AES-256

#### Frontend

```bash
cd ../frontend
cp .env.example .env.local
```

**Edite o arquivo `.env.local`:**

```env
NEXT_PUBLIC_API_URL=http://localhost:3001
```

### 3. Instale as dependências

#### Backend

```bash
cd backend
npm install
```

#### Frontend

```bash
cd frontend
npm install
```

## Execução

### Desenvolvimento

#### Terminal 1 - Backend

```bash
cd backend
npm run start:dev
```

O backend estará rodando em `http://localhost:3001`

#### Terminal 2 - Frontend

```bash
cd frontend
npm run dev
```

O frontend estará rodando em `http://localhost:3000`

### Produção

#### Build

```bash
# Backend
cd backend
npm run build

# Frontend
cd frontend
npm run build
```

#### Start

```bash
# Backend
cd backend
npm run start:prod

# Frontend
cd frontend
npm run start
```

## Estrutura do Projeto

```
SafeUser/
├── backend/                    # API NestJS
│   ├── src/
│   │   ├── auth/              # Autenticação
│   │   ├── user/              # Gerenciamento de usuários
│   │   └── main.ts            # Ponto de entrada
│   ├── .env.example           # Exemplo de variáveis
│   └── package.json
├── frontend/                   # App Next.js
│   ├── app/
│   │   ├── login/             # Página de login
│   │   ├── register/          # Página de registro
│   │   ├── dashboard/         # Dashboard protegido
│   │   └── profile/           # Perfil do usuário
│   ├── .env.example           # Exemplo de variáveis
│   └── package.json
├── .env.example               # Exemplo de variáveis globais
└── README.md
```

## Recursos Principais

### 1. Registro de Usuário
- Email único
- Senha com hash bcrypt (10 rounds)
- CPF e telefone com criptografia AES-256

### 2. Autenticação
- Login com email/senha
- JWT para gerenciamento de sessão
- Tokens com expiração de 60 minutos

### 3. Gerenciamento de Perfil
- Visualizar dados do perfil
- Atualizar informações pessoais
- Alterar senha
- Dados sensíveis criptografados

### 4. Segurança
- Validação de entrada com class-validator
- Proteção com Helmet
- CORS configurado
- Tratamento seguro de erros
- Criptografia AES-256 para dados sensíveis

## Variáveis de Ambiente

### Backend

| Variável | Descrição | Obrigatório |
|----------|-----------|-------------|
| `PORT` | Porta do servidor | Não (default: 3001) |
| `NODE_ENV` | Ambiente (development/production) | Não |
| `JWT_SECRET` | Chave para assinar tokens JWT | Sim |
| `DATABASE_URL` | URL de conexão com banco de dados | Sim |
| `ENCRYPTION_KEY` | Chave de criptografia (32 caracteres) | Sim |

### Frontend

| Variável | Descrição | Obrigatório |
|----------|-----------|-------------|
| `NEXT_PUBLIC_API_URL` | URL da API backend | Sim |

## Troubleshooting

### Erro: "RangeError: Invalid key length"

**Causa**: `ENCRYPTION_KEY` não tem 32 caracteres

**Solução**: Gere uma chave com exatamente 32 caracteres:

```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

### Erro: "secretOrPrivateKey must have a value"

**Causa**: `JWT_SECRET` não configurado

**Solução**: Configure uma chave JWT no `.env`

### Backend não conecta ao banco

**Causa**: `DATABASE_URL` inválida

**Solução**: Verifique se a pasta backend tem permissão de escrita e se o `DATABASE_URL` está correto

## Scripts Disponíveis

### Backend

```bash
npm run start:dev      # Desenvolvimento com hot reload
npm run start:prod     # Produção
npm run build          # Build
npm run lint           # ESLint
npm run test           # Testes
```

### Frontend

```bash
npm run dev            # Desenvolvimento
npm run build          # Build
npm run start          # Produção
npm run lint           # ESLint
```

## Contribuindo

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## Licença

Este projeto é educacional e está sob a MIT License.

## Suporte

Para problemas ou dúvidas, abra uma issue no repositório GitHub.
