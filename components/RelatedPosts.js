import React,{useState,useEffect} from 'react'
import Image from 'next/image'
import moment from 'moment'

import {grpahCMSImageLoader} from "../util";
import {getSimilarPosts} from "../services";

const RelatedPosts = ({categories,slug}) => {
    const [relatedPosts, setRelatedPosts] = useState([])

    useEffect(() => {
        const _getSimilarPosts = async()=>{
            let result = await getSimilarPosts(categories,slug)
            setRelatedPosts(result)
        } 
        _getSimilarPosts()
    }, [])

    return (
        <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
            <h3 className="text-xl mb-8 font-semibold border-b pb-4">Related Posts</h3>
            {relatedPosts.map((post,index) =>(
                <div className="flex items-center w-full mb-4">
                    <div className="w-16 flex-none">
                    <Image
                        loader={grpahCMSImageLoader}
                        alt={post.title} 
                        height="60px"
                        width="60px"
                        className="align-middle rounded-full"
                        src={post.featuredImage.url}
                    />
                    </div>
                    <div className="flex-grow ml-4">
                        <p className="text-gray-500 font-xs">{moment(post.createdAt).format("MMM DD, YYYY")}</p>
                        <a href={`/post/${post.slug}`} className="text-md" key={index}>{post.title}</a>
                    </div>
                </div>
            ))}  
        </div>
    )
}

export default RelatedPosts
