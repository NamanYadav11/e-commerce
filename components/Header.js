import React from 'react'
import {
    SearchIcon,
    ShoppingBagIcon
} from "@heroicons/react/outline";
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { selectItems } from '@/slices/basketSlice';

function Header() {
    const router = useRouter();
    const items=useSelector(selectItems)
  return (
    <header className='text-black'>
        {/* Top nav */}
        <div className='flex items-center justify-center bg-transparent p-1 flex-grow px-3 mt-2'>
            <div className='flex items-center flex-grow sm:flex-grow-0 cursor-pointer'
                onClick={() => router.push('/')}
            >
                <p className='font-extrabold'>
                    ShopeNow
                </p>
            </div>


        {/* Search */}

        <div className='hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer mx-4 bg-white'>
            <input className='p-2 h-full w-6 rounded-l-md flex-grow flex-shrink focus:outline-none' type="text" />
            <SearchIcon className='h-12 p-4'/>
        </div>

        {/* Right side */}

        <div className='flex gap-5'>
            <div className='link'>
               <p>Hello, Naman Yadav</p> 
               <p className='md:text-sm'>Account & Lists</p>
            </div>

            <div className='link'>
                <p>Returns</p>
                <p className='md:text-sm'>& Orders</p>
            </div>

            <div className=' relative flex items-center link'
                onClick={()=> router.push('/checkout')}
            >
                <span className='bg-cyan-400 absolute right-0 top-1 rounded-full w-4 h-4 flex justify-center items-center'>{items.length}</span>
                <ShoppingBagIcon className='h-8'/>


            </div>
        </div>

        </div>

        {/* Bottom nav */}
        <div>

        </div>

    </header>
  )
}




export default Header