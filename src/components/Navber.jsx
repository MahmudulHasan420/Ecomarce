import React from 'react'
import Container from './Container'
import Flexx from './Flexx'
import Image from './Image'
import logo from '../assets/logo.png'
import List from './List'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { pagename } from '../slices/Breadcrumslices'

const Navber = () => {
  let dispatch =useDispatch()


      let handlebreadcrum =(name)=>{
        dispatch(pagename(name))
      }

  return (
<section className='py-8'>
    <Container>

       <Flexx> 
       <div className="w-1/5">
        <Image src={logo} alt={logo}/>
        </div>
        <div className="w-4/5">
        <ul className='flex gap-10 justify-end'>
          <Link onClick={()=>handlebreadcrum("Home")} to="/" > 
            <List text="Home"/>
          </Link>

          <Link onClick={()=>handlebreadcrum("Shop")} to="/product">
            <List text="Shop"/> 
          </Link>
                
                
          <Link onClick={()=>handlebreadcrum("about")} to="/about">
            <List text="About"/> 
          </Link>
                <Link onClick={()=>handlebreadcrum("contact")} to="/contact">
                  <List text="Contact"/> 
                </Link>
                <Link onClick={()=>handlebreadcrum("about")} to="/productditails">
            <List text="Journal"/> 
          </Link>
            </ul>
        </div>
       </Flexx>

    
    </Container>
</section>
  )
}

export default Navber