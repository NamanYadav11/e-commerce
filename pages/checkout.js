import { banner6 } from '@/asset'
import Header from '@/components/Header'
import Image from 'next/image'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectItems, selectTotal } from '@/slices/basketSlice';
import CheckoutProduct from '@/components/CheckoutProduct'
import { Currency } from 'currency-formatter'
const stripePromise=loadStripe(process.env.stripe_public_key)

function checkout() {
    const total=useSelector(selectTotal)
    const items=useSelector(selectItems)
    const currencyFormatter = require('currency-formatter')

    const createCheckoutSession =() =>{

    }


  return (
    <div>
        <Header/>

        <main className='lg:flex max-w-screen-2xl mx-auto relative'>
            {/* left */}

            <div className='flex-grow m-5 shadow-sm'>
            
                <Image src={banner6}
                width={1020}
                height={250}
                objectFit='contain'
                />
                <p className='text-6xl font-semibold text-white absolute top-14 left-16'>Shop Now</p>


                <div className='flex flex-col p-5 space-y-10 bg-white'>
                    <h1 className='text-3xl border-b pb-4'>
                        {items.length === 0 ? 'Your Shopping cart empty': 'Your Shopping cart'}
                    </h1>

                    {items.map((item,i) => (
                        <CheckoutProduct
                        key={i}
                        id={item.id}
                        title={item.title}
                        rating={item.rating}
                        price={item.price}
                        description={item.description}
                        image={item.image} 
                        />
                    ))}
                
                </div>
            </div>







            {/* right */}
            {items.length >0 &&(
            <div className='flex flex-col bg-white p-10 shadow-md'>
                
                    <>
                        <h2 className='whitespace-nowrap font-medium text-lg'>Subtotal({items.length} items):
                        <span className ='font-bold'>
                            {currencyFormatter.format(total, { code: 'USD' })}
                        </span>
                        </h2>
                        <button 
                        role='link'
                        onClick={createCheckoutSession}
                        className="button hover:bg-cyan-400 p-4 h-14">Proceed to checkout</button>
                    </>
               
            </div>
            )}
        </main>
        
    </div>
  )
}

export default checkout