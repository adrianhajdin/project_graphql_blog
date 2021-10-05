import React,{useState} from 'react'
import Image from 'next/image'
import moment from 'moment'

import {grpahCMSImageLoader} from "../util";
import {AdjacentPostCard} from "../components"

const AdjacentPosts = () => {
    const [adjacentPost, setAdjacentPost] = useState(
        {
            next : {
                title: "Why betting sites are the new black Why betting sites are the new black ",
                featuredImage:{
                    url : "https://media.graphcms.com/H8sXQBSRuOqzURH2OSjL"
                }
            },
            previous : {
                title: "Why betting sites are the new black",
                featuredImage:{
                    url : "https://media.graphcms.com/l5SQcQ2TcSCn3IREvi43"
                },
                slug: "asda"
            }
        }
    )
    return (
        <div className="grid grid-cols-12 gap-12">
            <div className="col-span-6 rounded-lg relative h-72">
                <AdjacentPostCard post={adjacentPost.next} position="LEFT"/>
            </div>
            <div className="col-span-6 rounded-lg relative h-72">
                <AdjacentPostCard post={adjacentPost.previous} position="RIGHT"/>
            </div>
        </div>
    )
}

export default AdjacentPosts
