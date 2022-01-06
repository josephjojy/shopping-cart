import React, { useEffect, useState } from 'react'
import axios from "axios"
import { URL } from '../constants'
import { NavLink } from 'react-router-dom'
const SideBar = () => {

    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchCategories = async () => {
        try {
            const response = await axios.get(`${URL}/categories`);
            setCategories(response.data)
            setLoading(false)
        } catch (error) { console.log(error) }
    }


    useEffect(() => {
        fetchCategories();
    }, [])
    if (loading)
        return (<div>Loading</div>)
    return (
        <div className=" w-80 border-2 h-full space-y-2">
            {categories.map((category, index) => (
                <NavLink to={`/${category}`} >
                    <div key={index} className=' border-2 border-black m-2 pl-6 py-1 uppercase cursor-pointer' >
                        {category}
                    </div>
                </NavLink>
            ))}
        </div>
    )
}

export default SideBar
