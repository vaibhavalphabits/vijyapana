

import React from 'react'
import Container from './container'

function Imgtext({text}) {
  return (
    <Container>
    <div style={{backgroundImage:"url(images/bg-img.jpg)", backgroundSize:"cover", backgroundAttachment:"fixed",backgroundPosition:"center"}} className='mt-36 w-full border h-[40vh] relative'>
      <div className="flex items-center justify-center absolute inset-0 bg-[#ffffff75]">
    <h1 className='uppercase text-md md:text-3xl tracking-wider font-bold'>{text}</h1>
      </div>
    </div>
    </Container>
  )
}

export default Imgtext
