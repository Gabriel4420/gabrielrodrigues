This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Integração com DatoCMS, Slugs e Páginas de Projetos

- Rotas de projetos: as páginas individuais estão em `src/pages/projects/[id].tsx`. Embora o nome do arquivo use `id`, a rota aceita tanto `slug` quanto `id`.
- Geração de páginas: usa SSG com ISR e `fallback: 'blocking'`, permitindo criação automática de páginas na primeira visita após cadastro.
- Mapeamento: o `slug` é preferido nas URLs. Se não houver `slug`, cai para `id`.

### Data Fetching

- `src/services/api.ts`
  - `AllProjects`: retorna `id`, `slug`, `titulo`, `descricao`, `linkDoProjeto`, `linkDoCodigoDoProjeto`, `tecnologias`, `tecnologiaAside`, `imagemDoProjeto { url }`.
  - `ProjectBySlug(slug)`: busca projeto diretamente pelo `slug` via variáveis GraphQL.
  - `Project(id)`: fallback de busca por `id` com campos completos.

### ISR e Fallback

- `getStaticPaths`: gera `paths` com `slug || id` e usa `fallback: 'blocking'`.
- `getStaticProps`: tenta `ProjectBySlug(slug)` primeiro; se não achar, busca todos e encontra por `id`. Dados são normalizados para evitar falhas de prerender.

### Revalidação On‑Demand (Webhook)

- Endpoint: `src/pages/api/revalidate.ts`
  - Revalida páginas individuais via `GET/POST` em `/api/revalidate?token=<REVALIDATE_TOKEN>` com `path=<slug-ou-id>`.
  - Exemplo de requisição (POST):

```bash
curl -X POST "https://seu-dominio/api/revalidate?token=$REVALIDATE_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"path":"meu-projeto-slug"}'
```

#### Configurando Webhook no DatoCMS

- Em DatoCMS, crie um webhook que dispare em publicação/atualização do modelo "Projeto".
- Aponte para: `https://seu-dominio/api/revalidate?token=<REVALIDATE_TOKEN>`.
- Envie no body JSON o campo `path` com o `slug` do projeto publicado.

### Variáveis de Ambiente

- `NEXT_PUBLIC_API_KEY`: token de acesso à API GraphQL do DatoCMS.
- `REVALIDATE_TOKEN`: token secreto para proteção do endpoint de revalidate.

### Validação de Campos no DatoCMS

- Modelo "Projeto":
  - `slug`: obrigatório e único (idealmente gerado a partir de `titulo`).
  - `titulo`: obrigatório.
  - `descricao`: obrigatório.
  - `linkDoProjeto`: obrigatório, URL válida.
  - `imagemDoProjeto`: ao menos uma imagem com `url`.

### Tratamento de Erros e Logs

- Logs no servidor: `console.info`, `console.warn`, `console.error` em `getStaticProps`/`getStaticPaths`.
- O endpoint `/api/revalidate` também loga tentativas e erros.
- O componente de projeto valida arrays e strings antes de renderizar (evita erro "Cannot read properties of undefined" no build/prerender).

### Testes Locais

- `npm run dev`: cadastre um projeto no DatoCMS e acesse `/projects/<slug>`.
- `npm run build`: garante que o prerender não falhe. Em caso de erro, verifique se os campos obrigatórios estão preenchidos e se as variáveis de ambiente estão configuradas.

### Solução de Problemas

- 404 em projeto novo:
  - Verifique se a URL usa `slug` correto.
  - A primeira visita com `fallback: 'blocking'` deve gerar a página; caso contrário, acione o webhook de revalidate.
- Erro de prerender (build):
  - Cheque logs; normalmente é dado ausente. Garanta validação dos campos no DatoCMS.
- Imagens não carregam:
  - Confirme `next.config.js` inclui domínios do DatoCMS (`www.datocms-assets.com`).
