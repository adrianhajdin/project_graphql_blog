import React from 'react'
import useSWR from "swr"

const fetcher = url => fetch(url).then(res => res.json())

export const useGetFeaturedPosts = () => {
    let {data, error} = useSWR('/api/featuredpost',fetcher)
    console.log("posts",data)
    return {
        featuredPosts : (data && data.posts) || [],
        featuredPostsLoaded : (data && !!data.posts),
        featuredPostsError : error
    }
}

const FeaturedPosts = () => {
    let {featuredPosts,featuredPostsLoaded,featuredPostsError} = useGetFeaturedPosts()
    return (
        <div>
           {featuredPostsLoaded && featuredPosts.map((post,index) =>(
                <p key={index}>{post.title}</p>
            ))} 
        </div>
    )
}

export default FeaturedPosts
