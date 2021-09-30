import { request,gql } from 'graphql-request';

const graphqlAPI = 'https://api-eu-central-1.graphcms.com/v2/cku56f92114s901yz0ce9ah3f/master';

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
  