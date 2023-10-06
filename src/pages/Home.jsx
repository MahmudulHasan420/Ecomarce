import React from 'react'
import Container from '../components/Container'
import Flexx from '../components/Flexx'
import Product from '../components/Product'

const Home = () => {
  return (
    
    <Container>
        <Flexx>
            <div className='w-23'>
              <Product heading="product1" price="$44.44"/>
            </div>
            <div className='w-23'>
            <Product heading="product2"  price="$44.44"/>
            </div>
            <div className='w-23'>
            <Product heading="product3"  price="$44.44"/>
            </div> 
            <div className='w-23'>
            <Product heading="product4"  price="$44.44"/>
            </div>
        </Flexx>
    </Container>
  )
}

export default Home