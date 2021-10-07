import React,{useState,useEffect} from 'react'

import {AdjacentPostCard} from "../components"
import {getAdjacentPosts} from "../services"

const AdjacentPosts = ({createdAt,slug}) => {
    const [adjacentPost, setAdjacentPost] = useState(null)
    const [dataLoaded, setDataLoaded] = useState(false)

    useEffect(() => {
        const _getAdjacentPosts = async()=>{
            let result = await getAdjacentPosts(createdAt,slug)
            setAdjacentPost(result)
            setDataLoaded(true)
        } 
        _getAdjacentPosts()
    }, [slug])

    return (
        <div className="grid grid-cols-1 lg:grid-cols-8 gap-12 mb-8">
            {dataLoaded && <>
                
                {adjacentPost.previous && 
                    <div className={`${adjacentPost.next ? "col-span-1 lg:col-span-4" : "col-span-1 lg:col-span-8"} adjacent-post rounded-lg relative h-72`}>
                        <AdjacentPostCard post={adjacentPost.previous} position="LEFT"/>
                    </div>
                }
                {adjacentPost.next && 
                    <div className={`${adjacentPost.previous ? "col-span-1 lg:col-span-4" : "col-span-1 lg:col-span-8"} adjacent-post rounded-lg relative h-72`}>
                        <AdjacentPostCard post={adjacentPost.next} position="RIGHT"/>
                    </div>
                }
            </>}
        </div>
    )
}

export default AdjacentPosts
