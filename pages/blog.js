import Link from 'next/link'
import React from 'react'

const Blog = () => {
  return (
    <div className='h-screen w-full flex justify-center items-center'>
      <div className=''>
        <h2 className='text-2xl font-bold'>Popular blogs</h2>
        <Link href={'/blogpost/how to learn javascript'}>
          <div className="my-10">
            <h4 className='text-xl font-semibold'>how to learn javascript</h4>
            <p>javascript is a scripting language to design the logic for the web</p>
          </div>
        </Link>
        <Link href={'/blogpost/how to learn nextjs'}>
          <div className="my-10">
            <h4 className='text-xl font-semibold'>how to learn nextjs</h4>
            <p>javascript is a scripting language to design the logic for the web</p>
          </div>
        </Link>
        <Link href={'/blogpost/how to learn python'}>
          <div className="my-10">
            <h4 className='text-xl font-semibold'>how to learn python</h4>
            <p>javascript is a scripting language to design the logic for the web</p>
          </div>
        </Link>
        <Link href={'/blogpost/how to learn solidity'}>
          <div className="my-10">
            <h4 className='text-xl font-semibold'>how to learn solidity</h4>
            <p>javascript is a scripting language to design the logic for the web</p>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Blog