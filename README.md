# Tato Streaming - Shared

Pacote compartilhado do ecossistema Tato Streaming.

## Contexto do Projeto

Este repositorio concentra contratos comuns entre aplicacoes, como:

- schemas de validacao com Zod
- tipos TypeScript derivados desses schemas
- modelos de dominio compartilhados (auth, user, media)

No workspace maior, este pacote se relaciona com:

- `../front/tatoStreaming-front`: pode reutilizar tipos/schemas para manter consistencia de payloads.
- `../back/tatoStreaming-back`: pode reutilizar os mesmos contratos para validacao e tipagem na API.

A ideia principal e reduzir duplicacao e evitar divergencia de contrato entre front e back.

## Estrutura Atual

- `src/auth.ts`: contratos de autenticacao.
- `src/user.ts`: contrato de perfil de usuario.
- `src/media.ts`: contratos de midia.
- `src/index.ts`: exporta os modulos publicos do pacote.

## Stack

- TypeScript
- Zod

## Requisitos

- Node.js 20+ (recomendado)
- npm 10+ (recomendado)

## Setup Passo a Passo

### 1) Instalar dependencias

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
- declaracoes de tipos (`types`)

### 3) Limpar artefatos de build (opcional)

```bash
npm run clean
```

## Como este pacote e usado pelos outros projetos

Tanto front quanto back declaram dependencia local para este pacote via `file:../shared`.

Fluxo recomendado no desenvolvimento local:

1. atualizar codigo em `shared/src`
2. executar `npm run build` em `shared`
3. rodar/reiniciar front e back para consumir os contratos atualizados

## Publicacao em repositorio proprio (proximo passo)

Ao separar este modulo em um repositorio dedicado, uma estrategia simples e:

1. manter o nome do pacote como `@tato-streaming/shared`
2. remover `"private": true` quando for publicar em registry
3. versionar com semver (ex.: `1.0.0`, `1.1.0`)
4. publicar `dist/` como artefato de distribuicao
5. atualizar front/back para consumir versao publicada em vez de `file:../shared`

Com isso, o shared vira a fonte unica de verdade para os contratos do ecossistema.
