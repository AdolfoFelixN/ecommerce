import Link from 'next/link'
import React from 'react'

function NavBar() {
  return (
    <nav className='fixed w-full bg-[#333333] p-4 flex justify-between text-white'>
        <Link href="/" className='text-2xl'>Ecommerce</Link>
        <ul className='flex gap-3 items-center'>
            <li className='hover:text-blue-300 cursor-pointer'>Opción</li>
            <Link href="/registro" className='hover:text-blue-300'>Registro</Link>
        </ul>
    </nav>
  )
}

export default NavBar