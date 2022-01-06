import React from 'react'

const Card = ({ product, setCartItems }) => {
    const handleClick = (product) => {
        setCartItems(prev => [...prev, product])
    }
    return (
        <div className='border-2 w-80 h-72 m-4 pb-4'>
            <div className='h-3/4 m-1 flex justify-center'><img src={product.image} alt={product.title} /></div>
            <div className='p-2 overflow-hidden text-ellipsis whitespace-nowrap'>{product.title}</div>
            <div className='py-1 flex justify-center bg-gray-400 text-white shadow-lg cursor-pointer' onClick={() => handleClick(product)}>Add to cart</div>
        </div>
    )
}

export default Card
