import React, { ReactNode } from 'react'

const Main = (props) => {
    const { children } = props
    return (
        <main>
            {children}
        </main>
    )
}

export default Main