"use client"
import Link from 'next/link'
import Cart from './Cart'
import { useCartStore } from '@/providers/store'

function NavBar() {

  const {cart, showCart, toggleShowCart} = useCartStore()

  return (
    <nav className='fixed w-full bg-[#333333] p-4 flex justify-between text-white'>
        <Link href="/" className='text-2xl'>Ecommerce</Link>
        <ul className='flex gap-3 items-center'>            
            <Link href="/registro" className='hover:text-blue-300'>Registro</Link>
            <li onClick={toggleShowCart} className='hover:text-blue-300 cursor-pointer'>Carrito {cart.length}</li>
            {showCart && <Cart/>}
        </ul>
    </nav>
  )
}

export default NavBar