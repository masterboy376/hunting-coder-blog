import React from 'react'

const Dummy = () => {
    return (
        <>
            <style jsx global>
                {`
        .my-dummy{
          background-color: cyan;
        }
        `}
            </style>
            <div className='text-3xl text-center my-dummy'>dummy ಠ_ಠ dummy</div>
        </>
    )
}

export default Dummy