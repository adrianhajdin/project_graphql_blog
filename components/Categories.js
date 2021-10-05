import React, {useEffect,useState} from 'react'
import {getCategories} from "../services";

const Categories = () => {
    const [categories, setCategories] = useState([])
    
    useEffect(() => {
        getCategories()
        .then(categories => {
            setCategories(categories)
        }).catch(err => {
            console.log(err)
        })
    }, [])

    return (
        <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
            <h3 className="text-xl mb-8 font-semibold border-b pb-4">Categories</h3>
            {categories.map((category,index) =>(
                <p className="text-lg border-b pb-3 mb-3" key={index}>{category.name}</p>
            ))}  
        </div>
    )
}

export default Categories
