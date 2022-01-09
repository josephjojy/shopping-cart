import React from 'react'

const Cart = ({ cartItems, setCartItems, handleRemove }) => {

    const handleChangeCount = (e, index) => {
        if (e.target.value === '0')
            handleRemove(index);
        else {
            var items = [...cartItems];
            items[index].count = e.target.value;
            setCartItems(items);
        }
    }
    return (
        <div className='absolute top-12 right-8 border-2 p-2 w-96 max-h-96 overflow-y-scroll bg-white text-black shadow-lg space-y-2'>
            {cartItems.length ? cartItems.map((item, index) => (
                <div className='flex flex-row  border-2 p-2' key={index}>
                    <div className=' h-20'><img src={item.image} className='max-h-full max-w-xs' alt={item.title} /></div>
                    <div className='flex flex-col'>
                        <div className=''>{item.title}</div>
                        <div className='flex justify-between px-4'>
                            <input type="number" value={item.count} min="0" onKeyDown={(event) => {
                                event.preventDefault();
                            }} className="w-10 border-2" onChange={(e) => handleChangeCount(e, index)} />
                            <button className='bg-red-400 p-1 rounded-md font-bold' onClick={() => handleRemove(index)}>Remove</button>
                        </div>
                    </div>
                </div>
            )) : (<div>Cart Empty</div>)}
        </div>
    )
}

export default Cart
