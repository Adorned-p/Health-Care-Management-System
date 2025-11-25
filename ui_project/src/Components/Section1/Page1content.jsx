import React from 'react'
import RightPart from './RightPart'
import LeftPart from './LeftPart'

const Page1Content = (props) => {
  return (
    <div className='flex px-4 items-center gap-8 py-6 white h-[90vh]'>
        <LeftPart></LeftPart>
        <RightPart users = {props.users} />
    </div>
  )
}

export default Page1Content
