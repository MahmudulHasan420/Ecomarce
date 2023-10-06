import React, { useState } from 'react'
import Container from './Container'
import Flexx from './Flexx'
import {FaBars,FaAngleDown,} from 'react-icons/fa'
import {BiSolidUser} from 'react-icons/bi'
import {BsFillCartFill ,BsSearch} from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector, } from 'react-redux'
import { pagename } from '../slices/Breadcrumslices'



const Searchber = () => {

   let [open, setopen]=useState(false)
    let dispatch =useDispatch()


      let handlebreadcrum =(name)=>{
        dispatch(pagename(name))
      }

      let cart = useSelector((state)=>state.cart.cartItem)

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
                   
                    <Link>
                        <BsFillCartFill onClick={()=>setopen(true)}/>{cart.length}
                    </Link>
                     
                </Flexx>
            </Flexx>
            {open &&
            <div className="w-1/3 bg-red-500 h-screen absolute top-0 right-0 z-10">
                  <BsFillCartFill onClick={()=>setopen(false)}/>
            </div>
            }       
        </Container>
    </section>
  )
}

export default Searchber