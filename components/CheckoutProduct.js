import React from 'react'
import Image from 'next/image'
import { StarIcon } from '@heroicons/react/solid'
import { Currency } from 'currency-formatter'
import { addToBasket, removeFromBasket } from '@/slices/basketSlice'
import { useDispatch } from 'react-redux'

function CheckoutProduct({
    id,
    title,
    price,
    description,
    category,
    rating,
    image
}) 
{
    const dispatch = useDispatch();
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
    const removeItemFromBasket = ()=>{


        dispatch(removeFromBasket({id}));
    }

    const currencyFormatter = require('currency-formatter')
  return (
    <div className='grid grid-cols-5 items-center
    '>
        <Image src={image} height={200} width={200} objectFit='contain'/>
        
        {/* Middle */}
        <div className='col-span-3 mx-5'>
            <p className='text-lg font-medium'>{title}</p>
            <div className='flex py-1'>
                {Array(rating)
                .fill()
                .map((_,i)=>(
                    <StarIcon key={i} className="h-5 text-yellow-500"/>
                ))}
            </div>
            <p
                className='text-xs line-clamp-3 my-2'
            >{description}</p>

            <div className='font-semibold text-lg'>
                {currencyFormatter.format(price, { code: 'USD' })}
            </div>

        </div>

        <div>
            <button className="button mt-auto hover:bg-cyan-500"
                onClick={addItemToBasket}
            >Add to cart</button>
            <button className="button mt-auto hover:bg-cyan-500 p-2"
                onClick={removeItemFromBasket}
            >Remove from cart</button>
        </div>

       

    </div>
  )
}

export default CheckoutProduct