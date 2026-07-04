# Tato Streaming - Shared

Pacote compartilhado do ecossistema Tato Streaming.

## Contexto do Projeto

Este repositório concentra contratos comuns entre aplicações, como:

- schemas de validação com Zod
- tipos TypeScript derivados desses schemas
- modelos de domínio compartilhados (auth, user, media)

No workspace maior, este pacote se relaciona com:

- `../front/tatoStreaming-front`: pode reutilizar tipos/schemas para manter consistência de payloads.
- `../back/tatoStreaming-back`: pode reutilizar os mesmos contratos para validação e tipagem na API.

A ideia principal e reduzir duplicação e evitar divergência de contrato entre front e back.

## Estrutura Atual

- `src/auth.ts`: contratos de autenticação.
- `src/user.ts`: contrato de perfil de usuário.
- `src/media.ts`: contratos de mídia.
- `src/index.ts`: exporta os módulos públicos do pacote.

## Stack

- TypeScript
- Zod

## Requisitos

- Node.js 20+ (recomendado)
- npm 10+ (recomendado)

## Setup Passo a Passo

### 1) Instalar dependências

No terminal, a partir da pasta `shared`:

```bash
npm install
```

### 2) Gerar build do pacote

```bash
npm run build
```

Isso gera `dist/` com:

- JavaScript compilado (`main`)
- declarações de tipos (`types`)

### 3) Limpar artefatos de build (opcional)

```bash
npm run clean
```

## Como este pacote e usado pelos outros projetos

Tanto front quanto back declaram dependência local para este pacote via `file:../shared`.

Fluxo recomendado no desenvolvimento local:

1. atualizar código em `shared/src`
2. executar `npm run build` em `shared`
3. rodar/reiniciar front e back para consumir os contratos atualizados

## Publicação em repositório próprio (próximo passo)

Ao separar este módulo em um repositório dedicado, uma estratégia simples é:

1. manter o nome do pacote como `@tato-streaming/shared`
2. remover `"private": true` quando for publicar em registry
3. versionar com semver (ex.: `1.0.0`, `1.1.0`)
4. publicar `dist/` como artefato de distribuição
5. atualizar front/back para consumir versão publicada em vez de `file:../shared`

Com isso, o shared vira a fonte única de verdade para os contratos do ecossistema.
