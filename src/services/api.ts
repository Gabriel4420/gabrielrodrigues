const DATOCMS_ENDPOINT = "https://graphql.datocms.com/";

type GraphQLError = { message: string };
type GraphQLResponse<T> = { data?: T; errors?: GraphQLError[] };

function getDatoToken() {
  const token =
    process.env.DATOCMS_API_TOKEN ??
    process.env.NEXT_DATOCMS_API_TOKEN ??
    process.env.NEXT_PUBLIC_API_KEY;

  if (!token) {
    throw new Error(
      "Token do DatoCMS ausente. Defina DATOCMS_API_TOKEN no arquivo .env.local ou nas variáveis do ambiente de deploy.",
    );
  }

  return token;
}

async function datoRequest<T>(
  query: string,
  variables?: Record<string, unknown>,
): Promise<{ data: T }> {
  const headers: Record<string, string> = {
    Accept: "application/json",
    Authorization: `Bearer ${getDatoToken()}`,
    "Content-Type": "application/json",
  };

  if (process.env.DATOCMS_ENVIRONMENT) {
    headers["X-Environment"] = process.env.DATOCMS_ENVIRONMENT;
  }

  const response = await fetch(DATOCMS_ENDPOINT, {
    method: "POST",
    headers,
    body: JSON.stringify({ query, variables }),
  });
  const payload = (await response.json()) as GraphQLResponse<T>;
  const messages = payload.errors?.map((error) => error.message).join("; ");

  if (!response.ok) {
    throw new Error(
      `DatoCMS respondeu HTTP ${response.status}: ${messages || response.statusText}`,
    );
  }
  if (messages) throw new Error(`Erro GraphQL do DatoCMS: ${messages}`);
  if (!payload.data) throw new Error("O DatoCMS respondeu sem o campo data.");

  return { data: payload.data };
}

const api = {
  AllSkills: () =>
    datoRequest<{
      allTechnologies: Array<{ name: string; logo: { url: string } | null }>;
    }>(`
      query AllSkills {
        allTechnologies { name logo { url } }
      }
    `),

  AllProjects: () =>
    datoRequest<{ allProjetos: Array<Record<string, any>> }>(`
      query AllProjects {
        allProjetos {
          id
          titulo
          descricao
          linkDoCodigoDoProjeto
          linkDoProjeto
          tecnologiaAside
          tecnologias
          imagemDoProjeto { url alt }
        }
      }
    `),

  Project: (id: string) =>
    datoRequest<{ projeto: Record<string, any> | null }>(
      `
        query ProjectById($id: ItemId!) {
          projeto(filter: { id: { eq: $id } }) {
            id
            titulo
            linkDoProjeto
            linkDoCodigoDoProjeto
            descricao
            tecnologias
            tecnologiaAside
            imagemDoProjeto { url alt }
          }
        }
      `,
      { id },
    ),

};

export default api;
