import React from 'react'

const Card = ({ product,cartItems, setCartItems }) => {
    const handleClick = (product) => {
        var items = [...cartItems]
        var p = product;
        var itemIndex = -1
        items.map((item,index)=>{
            if(item.id===p.id)
                itemIndex = index;
        })
        if(itemIndex>=0){
            items[itemIndex].count = parseInt(items[itemIndex].count)+1
            setCartItems(items);
        }
        else{    
            p.count = 1;
            setCartItems(prev => [...prev, p])
        }
        alert(`${product.title} has been added to the cart`);
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
