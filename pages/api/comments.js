import { GraphQLClient, gql } from "graphql-request"

const graphqlAPI = 'https://api-us-east-1.graphcms.com/v2/ckw3wumad06j701z1b9e11eob/master'
const graphCMSToken = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2Mzc1NDUwOTQsImF1ZCI6WyJodHRwczovL2FwaS11cy1lYXN0LTEuZ3JhcGhjbXMuY29tL3YyL2NrdzN3dW1hZDA2ajcwMXoxYjllMTFlb2IvbWFzdGVyIiwiaHR0cHM6Ly9tYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiMTY2ZjIyOTgtZTVmYi00ZmEwLTljNGEtZDEyMDZjNzkyYTZhIiwianRpIjoiY2t3YTAyaGpxMXZicDAxdzNiNWJkNzJvciJ9.T3mjQVbcrwImTjaP_zomh-TLy4m8Go7503Qqe7wZB1YXQ93bKaIVWYmdlQc8N4jcgHunoLePGUEaRJOoDjl4LPY_mAG_OkHRPtkMZ6Dv1vzzUbdof83rQheyz9c2fO84kFNBBCHStJgyRwyV_tuESrxLmljKQ_FAegCZl5KyK7fuMmemM-LdwWnD45sq-6b3WMCmNm8yy8Pa59b9FT4zBaWsVpAXO4nAx7jJzgME5vYg7UHDGAHU2B4mzIr6ocLsQFhJf-UoRb9yxhDKPmR2p3kKjg8e0ih63QQdVOaO8eqPjy92XlaAeaBsyxN4tFBSeKnHUJCcMUUz9dvRYXDZB1DnYe_23fSb5KdRjW3NHcLo--A6d8kowagpColyzLx3QF1AE_64wuVAsqSgyK9m7aAGwDZrwzOHM5-lG8GAxC2BdyuLWS89m7Ab2cFRSwnw7KbFnerqlt8_yHeWY7gCNCo9IeciCdqc_zFiHQLntZxaaK8UwgulQIZzH_LTASMZheXCTvt40gLhecQ0tHIAVpGJ_w1uyfh9x7jmm_f2wIHp0567ma0DHp5plQj8DsrCdDzifyVl1AzkIb9iSenhI4t9ZHRJU0BY9QbonKdVsQSgAuMg8Ffs6Ukq-z5ctAxaDqfPhO9UQeAFm6kM8ifAp7Y3nrkDvJUqrRfunsvsd_o'

export default async function comentarios(req, res) {
  const graphQLClient = new GraphQLClient(graphqlAPI, {
    headers: {
      authorization: `Bearer ${graphCMSToken}`
    }
  })

  const query = gql`
    mutation CreateComentario($nombreCom: String!, $comentario: String!, $slug: String!){
      createComentario(data:{nombreCom: $nombreCom, comentario: $comentario, post:{connect:{ slug: $slug}}}){id}
    }
  `
  try {
    const result = await graphQLClient.request(query, req.body)
    return res.status(200).send(result);
  } catch (error) {
    return res.status(500).send(error);
  }

}
