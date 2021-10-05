import React from 'react'
import Image from 'next/image'
import moment from 'moment'

import {grpahCMSImageLoader} from "../util";

const PostCard = ({post}) => {
    return (
        <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
            <div className="relative shadow-md inline-block w-full h-80 mb-6">
            <Image
                loader={grpahCMSImageLoader}
                alt={post.title} 
                className="shadow-lg rounded-lg"
                layout="fill"
                src={post.featuredImage.url}
            />
            </div>
            <a href={`/post/${post.slug}`}><h1 className="transition duration-700 text-center mb-8 cursor-pointer hover:text-pink-600 text-3xl font-semibold">{post.title}</h1></a>
            <div className="flex items-center mb-8 w-full">
                <div className="flex mr-8 items-center">
                    <Image
                        loader={grpahCMSImageLoader}
                        alt={post.author.name} 
                        height="30px"
                        width="30px"
                        className="align-middle rounded-full"
                        src={post.author.photo.url}
                    />
                    <p className="inline align-middle text-gray-700 ml-2 font-medium text-lg">{post.author.name}</p>
                </div>
                <div className="font-medium text-gray-700">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline mr-2 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="align-middle">{moment(post.createdAt).format("MMM DD, YYYY")}</span>
                </div>
            </div>
            <p className="text-center text-lg text-gray-700 font-normal pl-20 pr-20 mb-8">
                {post.excerpt}
            </p>
            <div className="text-center">
                <a href={`/post/${post.slug}`} className="transition duration-500 ease transform hover:-translate-y-1 inline-block bg-pink-600 text-lg font-medium rounded-full text-white px-8 py-3 cursor-pointer">
                    Continue Reading
                </a>
            </div>
        </div>
    )
}

export default PostCard
