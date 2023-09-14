import React from 'react'
import Image from '../components/Image'
import error from '../assets/error.png'
import Button from '../components/Button'
import Container from '../components/Container'

const Error = () => {
  return (
    <>
<section>
    <Container>
        <div className='max-w-643 mt-20'>
        <Image src={error} alt="error"/>
      <p className='py-12'>The page you were looking for couldn't be found. The page could be removed or you misspelled the word while searching for it. Maybe try a search?</p>

      <div >
        <input type="text" className='w-full p-5 placeholder:font-pop placeholder:font-normal placeholder:text-sm' placeholder='Type to search'/>
      </div>
       <Button text="Back to Home"  className="mt-14 mb-28"/> 
      
        </div>
    </Container>
</section>
    </>
  )
}

export default Error