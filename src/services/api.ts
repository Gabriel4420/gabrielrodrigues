/* eslint-disable import/no-anonymous-default-export */
export default {
  AllSkills: async () => {
    const res = await fetch("https://graphql.datocms.com/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
      },
      body: JSON.stringify({
        query: `{ allTechnologies {
        name
        logo {
          url
        }
      }}`,
      }),
    });

    const json = await res.json();

    return json;
  },

  AllProjects: async () => {
    const res = await fetch("https://graphql.datocms.com/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
      },
      body: JSON.stringify({
        query: `{  
          allProjetos {
            id
            
            titulo
            descricao
            linkDoCodigoDoProjeto
            linkDoProjeto
            tecnologiaAside
            tecnologias
            imagemDoProjeto { url }
          }}`,
      }),
    });

    const data = res.json();

    return data;
  },

  Project: async (id: string) => {
    const res = await fetch("https://graphql.datocms.com/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
      },
      body: JSON.stringify({
        query: `{ projeto(filter: {id: {eq: ${id}}}) {
          id
          
          titulo
          linkDoProjeto
          linkDoCodigoDoProjeto
          descricao
          tecnologias
          tecnologiaAside
          imagemDoProjeto { url alt }
        } }`,
      }),
    });

    const data = res.json();

    return data;
  },

  ProjectBySlug: async (slug: string) => {
    const res = await fetch("https://graphql.datocms.com/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
      },
      body: JSON.stringify({
        query: `query ProjectBySlug($slug: String) {
          projeto(filter: { slug: { eq: $slug } }) {
            id
            
            titulo
            descricao
            linkDoProjeto
            linkDoCodigoDoProjeto
            tecnologias
            tecnologiaAside
            imagemDoProjeto { url alt }
          }
        }`,
        variables: { slug },
      }),
    });

    const data = await res.json();

    return data;
  },
};
