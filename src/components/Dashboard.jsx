import React from 'react'
import Header from './Header'
import SideBar from './SideBar'
import ProductView from './ProductView'

const Dashboard = () => {
    return (
        <div className="h-screen flex flex-col overflow-hidden">
            <Header />
            <div className='flex flex-row min-h-full'>
                <SideBar />
                <ProductView />
            </div>
        </div>
    )
}

export default Dashboard