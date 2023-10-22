import React from 'react'
import Container from '../components/Container'
import Flexx from '../components/Flexx'
import Image from '../components/Image'
import product1 from '../assetsproduct1'

const Shop = () => {
  return (
    <Container>
        <Flexx className=" flex-wrap">
          <div className='W-1/2'>
          <Image src={product1}/>
          </div>
          <div className='W-1/2'>
          <Image src={product1}/>
          </div>
          <div className='W-1/2'>
          <Image src={product1}/>
          </div>
          <div className='W-1/2'>
          <Image src={product1}/>
          </div>
                
           
        </Flexx>
    </Container>
  )
}

export default Shop