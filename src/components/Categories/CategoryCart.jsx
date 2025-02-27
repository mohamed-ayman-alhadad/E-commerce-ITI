import React from 'react'

export default function CategoryCart({item}) {
  return (
     <>
     <div className='flex flex-col items-center gap-4 px-5 py-3 justify-center border rounded'>
        <img src={item.image} alt="" className='w-15 h-16' />
        <p className='w-20'>{item.name}</p>
     </div>
     </>
  )
}
