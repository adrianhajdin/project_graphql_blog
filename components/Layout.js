import React from 'react'
import Header from "./Header"
const Layout = ({children}) => {
    return (
        <>
            <Header/>
            {children}
        </>
    )
}

export default Layout
