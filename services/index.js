import { request,gql } from 'graphql-request';
const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT

export async function getPosts() {
    let query = gql`
    query MyQuery {
      postsConnection {
        edges {
          cursor
          node {
            author {
              bio
              name
              id
              photo {
                url
              }
            }
            createdAt
            slug
            title
            excerpt
            featuredImage {
              url
            }
            categories {
              name
              slug
            }
          }
        }
      }
    }
    
    `
    let result = await request(graphqlAPI, query)
    return result.postsConnection.edges
}

export async function getCategories() {
  let query = `
  query GetGategories {
      categories {
        name
        slug
      }
  }
  `
  let result = await request(graphqlAPI, query)
  return result.categories
}

export async function getPostDetails(slug){
  let query = gql`
    query GetPostDetails($slug : String!) {
        post(where: {slug: $slug}) {
          title
          excerpt
          featuredImage {
            url
          }
          author{
            name
            bio
            photo {
              url
            }
          }
          createdAt
          slug
          content {
            raw
          }
          categories {
            name
            slug
          }
        }
    }
    `
    let result = await request(graphqlAPI, query,{slug:slug})
    return result.post
}