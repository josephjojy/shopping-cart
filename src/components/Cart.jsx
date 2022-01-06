import React from 'react'

const Cart = ({ cartItems, handleRemove }) => {

    return (
        <div className='absolute top-12 right-8 border-2 p-2 w-96 bg-white text-black shadow-lg space-y-2'>
            {cartItems.length ? cartItems.map((item, index) => (
                <div className='flex flex-row  border-2 p-2' key={index}>
                    <div className=' h-20'><img src={item.image} className='max-h-full max-w-xs' /></div>
                    <div className='flex flex-col'>
                        <div className=''>{item.title}</div>
                        <div className='flex justify-end'><button className='bg-red-400 p-1 rounded-md font-bold' onClick={() => handleRemove(index)}>Remove</button></div>
                    </div>
                </div>
            )) : (<div>Cart Empty</div>)}
        </div>
    )
}

export default Cart
