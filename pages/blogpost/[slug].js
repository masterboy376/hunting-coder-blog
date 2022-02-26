import React from 'react'
import { useRouter } from 'next/router'

const slug = () => {
  const router = useRouter()
  const { slug } = router.query
  return (
    <div className='w-3/4 mx-auto min-h-screen flex flex-col items-center'>
      <h1 className="text-2xl font-bold">this is title for {slug}</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores modi debitis sed quas a ipsam quam pariatur dolore sunt. Maiores, nostrum, autem, quam repudiandae quaerat veritatis nesciunt culpa optio pariatur placeat veniam doloremque praesentium?</p>
    </div>
  )
}

export default slug