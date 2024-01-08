import Image from 'next/image'
import React from 'react'
import { StarIcon } from '@heroicons/react/solid'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import dynamic from "next/dynamic";
import { addToBasket } from '@/slices/basketSlice'
import { Currency } from 'currency-formatter'

function Product({id,title,price,description,category,image}) {
    const currencyFormatter = require('currency-formatter')
    const dispatch=useDispatch();
  
    const [rating] = useState(
        Math.floor(Math.random()*(5-2+1))+2
    )

    const addItemToBasket = ()=>{
        const product = {
            id,
            title,
            price,
            description,
            category,
            rating,
            image
        };
        dispatch(addToBasket(product));
    };

    return (
    <div className='relative flex flex-col m-5 bg-white p-7 gap-1 z-30' >
        <p className='absolute top-2 right-2 text-gray-400 text-xs italic'>{category}</p>

        <div className='flex justify-center pb-5'>
            <Image src={image} height={200} width={200} objectFit='contain'/> 
        </div>

        <h4 className='font-semibold text-2xl'>{title}</h4>

        <div className='flex'>
        {Array(rating)
          .fill()
          .map((_,i)=>(
            <StarIcon key={i} className='flex text-yellow-400 h-6'/>
          ))
        }
      </div>

      <p className='line-clamp-3'>{description}</p>

        

        <div className='font-semibold text-lg'>
            {currencyFormatter.format(price, { code: 'USD' })}
        </div>



        <button 
        className='mt-auto button hover:bg-cyan-500'
            onClick={addItemToBasket}
        >Add to cart</button>

    </div>
  )
}

export default dynamic (() => Promise.resolve(Product), {ssr: false})
