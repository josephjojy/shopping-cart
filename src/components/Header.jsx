import React from 'react'

const Header = () => {
    return (
        <div className='bg-gray-500 w-full p-4 text-white'>
            <div className='flex flex-row justify-between'>
                <div className=' font-bold text-xl'>ShopCart</div>
                <div className='flex space-x-4'>
                    <div className='flex'>
                        <div className='rounded-full px-1.5 bg-red-500 relative -right-3 -top-3'>2</div>
                        <div className=' border-2 px-3'>Cart</div>
                    </div>
                    <div className='flex space-x-1'>
                        <div className='bg-red-500 p-3 rounded-full'></div>
                        <div>UserName</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
