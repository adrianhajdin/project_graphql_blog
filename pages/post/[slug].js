import React from 'react'
import {getPosts,getPostDetails} from "../../services";
import {PostDetail,Categories,RelatedPosts,Author} from "../../components";
import {AdjacentPosts} from "../../sections";

const PostDetails = ({post}) => {
    console.log("post",post)
    return (
        <div className="container mx-auto px-10 mb-8">
            <div className="grid grid-cols-12 gap-12">
                <div className="col-span-8">
                    <PostDetail post={post}/>
                    <Author author={post.author}/>
                    <AdjacentPosts/>
                </div>
                <div className="col-span-4">
                    <RelatedPosts categories={post.categories.map(category => category.id)}/>
                    <Categories/>
                </div>
            </div>
        </div>
    )
}

export default PostDetails

export async function getStaticProps({ params}) {
    console.log("params",params)
    const data = await getPostDetails(params.slug,params.cursor)
    console.log("data",data)
    return {
      props: {
        post: data,
        // relatedPosts: data.relatedPosts || [],
        // previousPost : data.previousPost || null,
        // nextPost : data.nextPost || null
      },
    }
}

export async function getStaticPaths() {
    const posts = await getPosts()
    posts.map(({cursor,node:{ slug }}) => {
        console.log("asdasdad ===> ", slug,cursor)
    })
    return {
        paths: posts.map(({cursor,node:{ slug }}) => (
            {
            params: { slug,cursor },
        })),
        fallback: true,
    }
}