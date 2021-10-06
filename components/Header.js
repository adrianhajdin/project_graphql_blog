import React from 'react'
import Link from 'next/link'

const Header = () => {
    return (
        <div className="container mx-auto px-10 mb-8">
            <div className="border-b border-blue-400 py-8">
                <Link href="/"><a className="cursor-pointer font-bold text-4xl text-white">Graph CMS</a></Link>
            </div>
        </div>
    )
}

export default Header
