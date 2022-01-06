import React, { useState } from 'react'
import Header from './Header'
import SideBar from './SideBar'
import ProductView from './ProductView'

const Dashboard = () => {
    const [cartItems, setCartItems] = useState([]);
    return (
        <div className="h-screen flex flex-col overflow-hidden">
            <Header cartItems={cartItems} setCartItems={setCartItems} />
            <div className='flex flex-row min-h-full'>
                <SideBar />
                <ProductView setCartItems={setCartItems} />
            </div>
        </div>
    )
}

export default Dashboard