import React from 'react'
import Header from "./Header"
const Layout = ({children}) => {
    return (
        <div>
            <Header/>
            {children}
        </div>
    )
}

export default Layout
