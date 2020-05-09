import React, { useEffect } from 'react'
import init from '../components/three/three'

const Three = () => {
    useEffect(() => {
        init()
    }, [])
    return (
        <div className="three-page">
            <div id="three-container"></div>
        </div>
    )
}

export default Three