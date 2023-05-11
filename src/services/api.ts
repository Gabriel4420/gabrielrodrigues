/* eslint-disable import/no-anonymous-default-export */
export default {
  AllSkills: async () => {
    const res = await fetch('https://graphql.datocms.com/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
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
    })

    const json = await res.json()

    return json
  },

  AllProjects: async () => {
    const res = await fetch('https://graphql.datocms.com/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
      },
      body: JSON.stringify({
        query: `{  
          allProjetos {
        id
        descricao
    linkDoCodigoDoProjeto
    linkDoProjeto
    tecnologiaAside
   
    titulo
        imagemDoProjeto {
          url
        }
        
        
        
        
      }}`,
      }),
    })

    
  

    const data = res.json()

    return data 
  },


  Project: async (id:string) => {
    const res = await fetch('https://graphql.datocms.com/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
      },
      body: JSON.stringify({
        query: `{ projeto(filter: {id: {eq: ${id}}}) {
          id
          titulo
          linkDoProjeto
          imagemDoProjeto {
            alt
            url
          }
        }  }`,
      }),
    })

    const data = res.json()

    return data 
  },
}
