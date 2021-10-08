import { request, gql } from 'graphql-request';

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export default async function asynchandler(req, res) {
  const query = gql`{
    posts(where: {featuredPost: true}) {
        title,
        slug
    }
  }`;

  const result = await request(graphqlAPI, query);

  return res.status(200).send(result);
}
