import React from 'react'

const Categories = ({categories}) => {
    return (
        <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
            <h3 className="text-xl mb-8 font-semibold">Categories</h3>
            {categories.map((category,index) =>(
                <p className="text-lg border-b pb-3 mb-3" key={index}>{category.name}</p>
            ))} 
        </div>
    )
}

export default Categories
