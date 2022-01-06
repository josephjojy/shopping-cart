import axios from 'axios';
import React,{useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { URL } from '../constants';
import Card from './Card';

const ProductView = () => {
    const [products,setProducts] = useState();
    const { category } = useParams()


   
    useEffect(() => {
        const fetchProducts = async() => {
            try{
                const response = await axios.get(`${URL}/category/${category}`)
                setProducts(response.data)
            }catch(error){console.log(error)}
        }
        fetchProducts();
    }, [category])

    if (!category)
        return (<div className='text-center w-full my-4 text-lg text-gray-700'>🡸Select a category to shop from.</div>)
    return (
        <div className='w-full overflow-scroll'>
            <div className='m-8 '>
                <div className='text-xl'>Products under <span className='font-bold uppercase'>{category}</span></div>
                <div className='flex flex-wrap p-6'>
                    {products.map((product,index)=>(
                        <Card key={index} product={product} />
                    ))}
                </div>
            </div>

        </div>
    )
}

export default ProductView
