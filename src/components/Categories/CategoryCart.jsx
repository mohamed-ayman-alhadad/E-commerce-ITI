import React from 'react'

export default function CategoryCart({item}) {
  return (
    <div className='flex flex-col items-center gap-3 p-4 justify-center border rounded hover:shadow-md transition-shadow duration-200'>
      <img 
        src={item.image} 
        alt={item.name} 
        className='w-12 h-12 sm:w-16 sm:h-16 object-contain' 
      />
      <p className='text-sm sm:text-base text-center font-medium'>{item.name}</p>
    </div>
  )
}
