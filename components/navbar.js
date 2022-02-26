import React from 'react'
import Link from 'next/link'

const Navbar = () => {
    return (
        <nav className='py-4 flex items-center justify-center w-full'>

            <ul className='flex justify-center items-center'>

                <li className="px-4 text-lg hover:text-black text-gray-500">
                    <Link href="/" scroll={false}>
                        <a>Home</a>
                    </Link>
                </li>

                <li className="px-4 text-lg hover:text-black text-gray-500">
                    <Link href="/about" scroll={false}>
                        <a>About</a>
                    </Link>
                </li>

                <li className="px-4 text-lg hover:text-black text-gray-500">
                    <Link href="/contact" scroll={false}>
                        <a>Contact</a>
                    </Link>
                </li>

                <li className="px-4 text-lg hover:text-black text-gray-500">
                    <Link href="/blog" scroll={false}>
                        <a>Blogs</a>
                    </Link>
                </li>

            </ul>

        </nav>
    )
}

export default Navbar