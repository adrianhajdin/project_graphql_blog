import React,{useState} from 'react'
import Image from 'next/image'
import moment from 'moment'

import {grpahCMSImageLoader} from "../util";

const RelatedPosts = ({categories}) => {
    const [relatedPosts, setRelatedPosts] = useState([
        {
            title: "Why betting sites are the new black Why betting sites are the new black ",
            featuredImage:{
                url : "https://media.graphcms.com/l5SQcQ2TcSCn3IREvi43"
            }
        },
        {
            title: "Why betting sites are the new black",
            featuredImage:{
                url : "https://media.graphcms.com/l5SQcQ2TcSCn3IREvi43"
            },
            slug: "asda"
        }
    ])
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
