import { request,gql } from 'graphql-request';
const graphqlAPI = process.env.GRAPHCMS_ENDPOINT
console.log("graphqlAPI service",graphqlAPI)

export async function getPosts(page) {
    console.log("Service called",page)
    let query = gql`
    query GetPosts($skip: Int!) {
        posts(last: 10, skip: $skip) {
          title
          excerpt
          featuredImage {
            url
          }
          author{
            name
            photo {
              url
            }
          }
          createdAt
          slug
          categories {
            name
            slug
          }
        }
    }
    `
    let result = await request(graphqlAPI, query,{skip : page * 10})
    console.log("Service result",result)
    return result.posts
}

export async function getCategories() {
    console.log("getCategories Service")
    let query = gql`
    query GetGategories($limit : Int!) {
        categories(first: $limit) {
          name
          slug
        }
      }
    `
    console.log(query)
    let result = await request(graphqlAPI, query,{limit : 10})
    console.log(result)
    return result.categories
}