import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { URL } from '../constants';
import Card from './Card';

const ProductView = ({ setCartItems }) => {
    const [products, setProducts] = useState();
    const [loading, setLoading] = useState(true);
    const { category } = useParams()

    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true)
            try {
                const response = await axios.get(`${URL}/category/${category}`)
                setProducts(response.data)
                setLoading(false);
            } catch (error) { console.log(error) }
        }
        fetchProducts();

    }, [category])

    if (loading)
        return (<div className='w-full'></div>)
    if (!category)
        return (<div className='text-center w-full my-4 text-lg text-gray-700'>🡸Select a category to shop from.</div>)
    return (
        <div className='w-full overflow-scroll'>
            <div className='m-8 '>
                <div className='text-xl'>Products under <span className='font-bold uppercase'>{category}</span></div>
                <div className='flex flex-wrap p-6'>
                    {products.map((product, index) => (
                        <Card key={index} product={product} setCartItems={setCartItems} />
                    ))}
                </div>
            </div>

        </div>
    )
}

export default ProductView
