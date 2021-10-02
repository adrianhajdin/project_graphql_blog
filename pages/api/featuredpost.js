import { request,gql } from 'graphql-request';

const graphqlAPI = process.env.GRAPHCMS_ENDPOINT
console.log("graphqlAPI",graphqlAPI)
export default async function asynchandler(req, res) {
    console.log("handler called")
    let query = gql`{
        posts(where: {featuredPost: true}){
            title,
            slug
        }
    }`
    let result = await request(graphqlAPI, query)
    console.log("result",result)
    return res.status(200).send(result)   
}
  