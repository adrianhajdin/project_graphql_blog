//import { request,gql } from 'graphql-request';
import { GraphQLClient, gql } from 'graphql-request'

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export default async function asynchandler(req, res) {

    const graphQLClient = new GraphQLClient(graphqlAPI, {
      headers: {
        authorization: `Bearer ${process.env.GRAPHCMS_TOKEN}`
      },
    })

    let query = gql`
        mutation CreateComment($name: String!, $email: String!, $comment: String!, $slug: String!) {
            createComment(
            data: {name: $name, email: $email, comment: $comment, post: {connect: {slug: $slug}}}
            ) {
            id
            }
        }
      
    `
    let result = await graphQLClient.request(query,
        {
            "name": req.body.name,
            "email": req.body.email,
            "comment": req.body.comment,
            "slug": req.body.slug
      })
    return res.status(200).send(result)
}
  