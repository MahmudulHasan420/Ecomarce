import React from 'react'
import Container from './Container'
import Flexx from './Flexx'
import {FaBars,FaAngleDown,} from 'react-icons/fa'
import {BiSolidUser} from 'react-icons/bi'
import {BsFillCartFill ,BsSearch} from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { pagename } from '../slices/Breadcrumslices'



const Searchber = () => {

    let dispatch =useDispatch()


      let handlebreadcrum =(name)=>{
        dispatch(pagename(name))
      }

  return (
    <section className='bg-ash py-6'>
        <Container>
            <Flexx>
                <div className='w-1/5 flex items-center gap-x-2.5'>
                    <FaBars/>Shop by Category
                </div>
                <div className='w-3/5 relative'>
                   <input type="text" className='w-full px-5 py-4' placeholder='Search Product'/>
                   <BsSearch className='text-2xl absolute right-4 top-1/2 -translate-y-1/2'/>
                </div>
                <Flexx className='w-1/5 justify-end items-center gap-x-10'>
                    <Flexx className="">

                    <Link onClick={()=>handlebreadcrum("Sing-up")} to="/sing-up">
                        <BiSolidUser/>
                    </Link>
                        
                    <Link onClick={()=>handlebreadcrum("login")} to="/login">
                        <FaAngleDown/>
                    </Link>
                </Flexx>
                   
                    <Link onClick={()=>handlebreadcrum("login")} to="/checkout">
                        <BsFillCartFill/>
                    </Link>
                     
                </Flexx>
            </Flexx>
        </Container>
    </section>
  )
}

export default Searchber