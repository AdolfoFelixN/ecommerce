"use client"
import Link from 'next/link'
import Cart from './Cart'
import { useCartStore } from '@/providers/store'
import { FaCartShopping } from "react-icons/fa6";

function NavBar() {

  const {cart, showCart, toggleShowCart} = useCartStore()

  return (
    <nav className='fixed w-full bg-[#333333] p-4 flex justify-between text-white z-10'>
        <Link href="/" className='text-2xl'>Ecommerce</Link>
        <ul className='flex gap-3 items-center'>            
            <Link href="/registro" className='hover:text-blue-300'>Registro</Link>
            <div onClick={toggleShowCart} className='flex gap-1 items-center bg-white py-1 px-2  text-black rounded hover:bg-gray-200 cursor-pointer'>
            <FaCartShopping />
            <li>{cart.length}</li>
            </div>
            {showCart && <Cart/>}
        </ul>
    </nav>
  )
}

export default NavBar