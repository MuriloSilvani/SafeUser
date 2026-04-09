# **Relatório de Projeto de Software com Ênfase em Segurança do Ambiente Lógico**

## **1. Introdução**

Com o crescimento acelerado das aplicações digitais, a segurança da informação tornou-se um dos pilares fundamentais no desenvolvimento de software. Sistemas que manipulam dados sensíveis, como informações pessoais e credenciais de acesso, precisam garantir confidencialidade, integridade e disponibilidade dessas informações.

Este projeto tem como objetivo desenvolver uma aplicação de software que implemente funcionalidades básicas de gerenciamento de usuários, com foco especial na aplicação de boas práticas de segurança no ambiente lógico. O sistema busca demonstrar como técnicas adequadas podem mitigar vulnerabilidades comuns, como acesso não autorizado, vazamento de dados e ataques de injeção.

---

## **2. Descrição do Sistema**

O sistema desenvolvido, denominado **SafeUser**, consiste em uma aplicação web para gerenciamento de usuários. Ele permite o cadastro, autenticação e gerenciamento de informações pessoais de forma segura.

### **Principais funcionalidades:**

* Cadastro de usuários
* Login e logout
* Visualização de dados do perfil
* Atualização de informações pessoais
* Alteração de senha
* Acesso a área restrita (dashboard)

O sistema simula um ambiente real onde dados sensíveis são manipulados, exigindo a implementação de mecanismos robustos de segurança.

---

## **3. Requisitos do Sistema**

### **3.1 Requisitos Funcionais**

* RF01: O sistema deve permitir o cadastro de novos usuários.
* RF02: O sistema deve permitir autenticação por email e senha.
* RF03: O usuário autenticado deve acessar uma área restrita.
* RF04: O usuário deve poder atualizar seus dados pessoais.
* RF05: O usuário deve poder alterar sua senha.

### **3.2 Requisitos Não Funcionais**

* RNF01: O sistema deve garantir a segurança dos dados armazenados.
* RNF02: O sistema deve validar todas as entradas de dados do usuário.
* RNF03: O sistema deve impedir acesso não autorizado.
* RNF04: O sistema deve tratar erros sem expor informações sensíveis.
* RNF05: O sistema deve seguir boas práticas de desenvolvimento seguro.

---

## **4. Arquitetura e Tecnologias Utilizadas**

O sistema foi desenvolvido utilizando uma arquitetura cliente-servidor, com separação entre frontend e backend.

### **Tecnologias utilizadas:**

* Backend: Node.js
* Framework: NestJS (ou Express)
* Banco de dados: MongoDB ou PostgreSQL
* ORM: Prisma (ou equivalente)
* Autenticação: JWT (JSON Web Token)
* Criptografia de senha: bcrypt
* Frontend: React / Next.js

Essa estrutura permite escalabilidade, organização do código e aplicação eficiente de camadas de segurança.

---

## **5. Mecanismos de Segurança Implementados**

### **5.1 Criptografia de Senhas**

As senhas dos usuários não são armazenadas em formato texto. Foi utilizado o algoritmo de hash bcrypt, que aplica salt automaticamente, tornando ataques de força bruta significativamente mais difíceis.

**Benefício:** Proteção contra vazamento de credenciais mesmo em caso de acesso indevido ao banco de dados.

---

### **5.2 Autenticação e Controle de Acesso**

O sistema utiliza autenticação baseada em JWT (JSON Web Token). Após o login, um token é gerado e enviado ao cliente, sendo necessário para acessar rotas protegidas.

Além disso, foi implementado controle de acesso para garantir que apenas usuários autenticados possam acessar áreas restritas.

**Benefício:** Impede acesso não autorizado ao sistema.

---

### **5.3 Validação de Entradas**

Todas as entradas fornecidas pelo usuário são validadas antes de serem processadas, incluindo:

* Formato de email
* Tamanho mínimo de senha
* Campos obrigatórios

**Benefício:** Prevenção contra dados inválidos e ataques como injeção de código.

---

### **5.4 Proteção contra SQL Injection**

O sistema utiliza ORM (Object Relational Mapping), evitando a construção manual de queries SQL e garantindo o uso de consultas parametrizadas.

**Benefício:** Elimina vulnerabilidades relacionadas a injeção de SQL.

---

### **5.5 Proteção contra XSS (Cross-Site Scripting)**

O frontend evita a renderização direta de conteúdo HTML não confiável e trata os dados exibidos ao usuário de forma segura.

**Benefício:** Evita execução de scripts maliciosos no navegador do usuário.

---

### **5.6 Tratamento Seguro de Erros**

O sistema implementa tratamento de erros que impede a exposição de informações internas, como estruturas do banco de dados ou detalhes do servidor.

Mensagens genéricas são exibidas ao usuário, enquanto erros detalhados são registrados internamente.

**Benefício:** Reduz risco de exploração de vulnerabilidades por atacantes.

---

### **5.7 Uso de Variáveis de Ambiente**

Informações sensíveis, como chaves de API e segredos de autenticação, são armazenadas em variáveis de ambiente, evitando exposição no código-fonte.

**Benefício:** Aumenta a segurança e facilita a gestão de configurações.

---

## **6. Boas Práticas de Desenvolvimento Seguro**

Durante o desenvolvimento, foram adotadas as seguintes boas práticas:

* Separação de responsabilidades (controllers, services, repositories)
* Uso de bibliotecas confiáveis e atualizadas
* Não armazenamento de dados sensíveis em texto puro
* Estruturação clara do projeto
* Preparação para uso de HTTPS
* Possibilidade de implementação futura de autenticação em dois fatores (2FA)

---

## **7. Resultados Obtidos**

O sistema desenvolvido atende aos requisitos propostos e demonstra, na prática, a aplicação de técnicas essenciais de segurança da informação no ambiente lógico.

Foi possível construir uma aplicação funcional e segura, capaz de proteger dados sensíveis e resistir a ataques comuns explorados em sistemas web.

---

## **8. Conclusão**

A segurança no desenvolvimento de software não deve ser tratada como um recurso opcional, mas sim como um requisito essencial desde o início do projeto.

Este trabalho demonstrou que, mesmo em sistemas simples, é possível aplicar mecanismos eficientes de proteção, reduzindo significativamente riscos de vulnerabilidades.

Como melhorias futuras, podem ser implementados recursos adicionais como:

* Autenticação em dois fatores (2FA)
* Verificação de email
* Logs de auditoria
* Monitoramento de tentativas de acesso

Dessa forma, o sistema pode evoluir para níveis ainda mais elevados de segurança e confiabilidade.

---

## **9. Referências**

* OWASP Top 10 – Principais riscos de segurança em aplicações web
* Documentação oficial do Node.js
* Documentação do JWT
* Documentação do bcrypt
* Boas práticas de segurança em desenvolvimento web

---
