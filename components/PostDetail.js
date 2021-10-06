import React from 'react'
import Image from 'next/image'
import moment from 'moment'
import parse from 'html-react-parser';
import {grpahCMSImageLoader} from "../util";

const PostDetail = ({post}) => {

    const getContentFragment = (index,text,obj,type) => {
        if(obj){
            if(obj.bold){
                text = (<b key={index}>{text}</b>)
            }
            if(obj.italic){
                text = (<em key={index}>{text}</em>)
            }
            if(obj.underline){
                text = (<u key={index}>{text}</u>)
            }    
        }
        switch(type){
            case "heading-three": 
                return <h3 key={index} className="text-xl font-semibold mb-4">{text.map((item,index) => <React.Fragment key={index}>{item}</React.Fragment>)}</h3>
            case "paragraph": 
                return <p key={index} className="mb-8">{text.map((item,index) => <React.Fragment key={index}>{item}</React.Fragment>)}</p>
            case "heading-four": 
                return <h4 key={index} className="text-md font-semibold mb-4">{text.map((item,index) => <React.Fragment key={index}>{item}</React.Fragment>)}</h4>
            case "image": 
                return  <Image
                key={index}
                loader={grpahCMSImageLoader}
                alt={obj.title} 
                unoptimized
                height={obj.height}
                width={obj.width}
                src={obj.src}
            />
            default: 
                return text
        }
        
    }

    return (
        <>
            <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
                <div className="relative shadow-md inline-block w-full h-80 mb-6">
                <Image
                    unoptimized
                    loader={grpahCMSImageLoader}
                    alt={post.title} 
                    className="shadow-lg rounded-lg"
                    layout="fill"
                    src={post.featuredImage.url}
                />
                </div>
                <div className="flex items-center mb-8 w-full">
                    <div className="flex mr-8 items-center">
                        <Image
                            unoptimized
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
                <h1 className="mb-8 text-3xl font-semibold">{post.title}</h1>
                {
                    post.content.raw.children.map((typeObj,index) => {
                        let children = typeObj.children.map((item,itemindex) => {
                            return getContentFragment(itemindex,item.text,item)
                        })
                        console.log("children",children)
                        return getContentFragment(
                            index,
                            children,
                            typeObj,
                            typeObj.type
                        )
                })
                }
            </div>
            
        </>
    )
}

export default PostDetail
