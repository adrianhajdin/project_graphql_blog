import React,{useRef, useState} from 'react'
import {submitComment} from "../services";

const CommentsForm = ({slug}) => {
    const [error,setError] = useState(false)
    const [showSuccessMessage,setShowSuccessMessage] = useState(false)
    const commentEl = useRef()
    const nameEl = useRef()
    const emailEl = useRef()

    const handlePostSubmission = () => {
        if(!commentEl.current.value || !nameEl.current.value || !emailEl.current.value){
            setError(true)
            return
        }
        let commentObj = {
            name : nameEl.current.value,
            email : emailEl.current.value,
            comment : commentEl.current.value,
            slug : slug,
        }
        submitComment(commentObj)
        .then(res => {
            if(res.createComment){
                nameEl.current.value = ""
                emailEl.current.value = ""
                commentEl.current.value = ""
                setShowSuccessMessage(true)
                setTimeout(() => {
                    setShowSuccessMessage(false)
                },3000)
            }
        })
    }

    return (
        <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
            <h3 className="text-xl mb-8 font-semibold border-b pb-4">Leave a Reply</h3>
            <div class="grid grid-cols-1 gap-4 mb-4">
                <textarea ref={commentEl} className="p-4 outline-none w-full rounded-lg h-40 focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700" name="comment" placeholder="Comment"></textarea>
            </div>
            <div class="grid grid-cols-2 gap-4 mb-4">
                <input ref={nameEl} className="py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700" placeholder="Name" name="name"/>
                <input ref={emailEl} className="py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700" placeholder="Email" name="email"/>
            </div>
            {error && <p className="text-xs text-red-500">All fields are mandatory</p>}
            <div className="mt-8">
                <button onClick={handlePostSubmission} className="transition duration-500 ease hover:bg-indigo-900 inline-block bg-pink-600 text-lg font-medium rounded-full text-white px-8 py-3 cursor-pointer">Post Comment</button>
            </div>
            {showSuccessMessage && <p className="text-xl text-center font-semibold mt-8 text-green-500">Comment submitted for review</p>}
        </div>
    )
}

export default CommentsForm
