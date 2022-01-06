import React from 'react'
import { useParams } from 'react-router-dom'

const ProductView = () => {
    const {category} = useParams()
    if(!category)
        return (<div>not selected</div>)
    return (
        <div>
            {category}
        </div>
    )
}

export default ProductView
