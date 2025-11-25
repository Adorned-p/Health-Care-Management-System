import React from 'react'

const RightCard = (props) => {
  return (
    <div className='h-full w-80 bg-red-500 rounded-4xl overflow-hidden relative shrink-0'>
      
      <img className=' h-full w-full object-cover' src={props.img} alt="" />
      <div className='absolute top-0 left-0 h-full w-full  p-8 flex flex-col justify-between'> 
        <h2 className='bg-white text-2xl font-bold rounded-full h-14 w-14 flex justify-center items-center'>{props.id}</h2>
        <div>
            <p className=' text-lg leading-normal text-white mb-10' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum doloribus eos ipsam fugit, aliquid ex.</p>
            <div className='flex justify-between'>
                <button className='bg-blue-600 text-white font-semibold px-8 py-2 rounded-full text-lg' >{props.tag}</button>
                <button className='bg-blue-600 text-white font-semibold px-3 py-2 rounded-full text-lg'><i className="ri-arrow-right-long-line"></i></button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default RightCard
