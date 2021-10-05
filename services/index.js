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

export async function getSimilarPosts(categories,slug) {
  let query = `
  query GetPostDetails($slug: String!, $categories: [String!]) {
    posts(
      where: {slug_not: $slug, AND: {categories_some: {slug_in: $categories}}}
      last: 3
    ) {
      title
      featuredImage {
        url
      }
      createdAt
      slug
    }
  }
  
  `
  let result = await request(graphqlAPI, query,{slug:slug,categories:categories})
  return result.posts
}

export async function getAdjacentPosts(createdAt,slug) {
  let query = `
  query GetAdjacentPosts($createdAt: DateTime!,$slug:String!) {
    next:posts(
      first: 1
      orderBy: createdAt_ASC
      where: {slug_not: $slug, AND: {createdAt_gte: $createdAt}}
    ) {
      title
      featuredImage {
        url
      }
      createdAt
      slug
    }
    previous:posts(
      first: 1
      orderBy: createdAt_DESC
      where: {slug_not: $slug, AND: {createdAt_lte: $createdAt}}
    ) {
      title
      featuredImage {
        url
      }
      createdAt
      slug
    }
  }
  `
  let result = await request(graphqlAPI, query,{slug:slug,createdAt:createdAt})
  return {next : result.next[0],previous : result.previous[0]}
}

export async function getCategoryPost(slug) {
  console.log("slug service", slug)
  let query = `
  query GetCategoryPost($slug: String!) {
    postsConnection(where: {categories_none: {slug: $slug}}) {
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
  let result = await request(graphqlAPI, query,{slug:slug})
  return result.postsConnection.edges
}