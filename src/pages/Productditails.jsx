import React from 'react'
import Container from '../components/Container'
import Flexx from '../components/Flexx'
import Image from '../components/Image'
import product1 from '../assets/product1.png'
import { useSelector } from 'react-redux'


const Productditails = () => {
    let pagename =useSelector((state=>state.Breadcrum.previousname))
  return (
    <Container>
         <Flexx> {pagename} /
        <p className='first-letter:uppercase ml-1'>{window.location.pathname.replace("/", " ").replace("-", " ")}</p>
        </Flexx>
    <Flexx className="gap-10">
        <div className='w-1/2'>
        <div >
      <Image src={product1} className="w-full"/>
      </div>
      <div >
      <Image src={product1} className="w-full"/>
      </div>
        </div>
      <div className='w-1/2'>
        <div>
        <Image src={product1} className="w-full"/>
        </div>
        <div>
        <Image src={product1} className="w-full"/>
        </div> 
    </div>  
    </Flexx>
</Container>
  )
}

export default Productditails