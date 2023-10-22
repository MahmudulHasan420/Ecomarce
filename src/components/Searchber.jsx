import React, { useEffect, useState } from 'react'
import Container from './Container'
import Flexx from './Flexx'
import {FaBars,FaAngleDown,} from 'react-icons/fa'
import {BiSolidUser} from 'react-icons/bi'
import {BsFillCartFill ,BsSearch} from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector, } from 'react-redux'
import { pagename } from '../slices/Breadcrumslices'
import { dacrement ,increment , remove} from '../slices/Cartslices'




const Searchber = () => {

   let [open, setopen]=useState(false)
   let [total, settotal ] =useState(0)
    let dispatch =useDispatch()


      let handlebreadcrum =(name)=>{
        dispatch(pagename(name))
      }

     

      let cart = useSelector((state)=>state.cart.cartItem)

      let handledecrement=(item)=>{
        
        dispatch(dacrement(item))

      }

      
      let handleincrement=(item)=>{
  
      dispatch(increment(item))

    }

    useEffect(()=>{
      let total = 0

      cart.map((item)=>{
        total += item.pprice*item.quantity
      })
      settotal(total)
    },[cart])


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
                        <Flexx className="relative">
                        <BsFillCartFill onClick={()=>setopen(true)}/>
                        <p className='absolute -bottom-1 left-5'>{cart.length}</p>
                        </Flexx>
                    </Link>
                     
                </Flexx>
            </Flexx>
            {open &&
            <div className="w-1/3 bg-black h-screen  absolute top-0 right-0 z-10">
              <button
      className="hover:bg-red-600 text-white font-semibold py-1 px-2  focus:outline-none focus:shadow-outline-red active:bg-red-700"
      onClick={()=>setopen(false)}
    >
      x 
    </button> 
                 

                  <ul className='flex justify-between bg-lightBlack  py-4 pl-14 pr-5 border-b border-solid border-black'>
                    
                    <li className='w-1/5'>product</li>
                    <li className='w-1/5'>Price</li>
                    <li className='w-1/5'>Quantity</li>
                    <li className='w-1/5'>Subtotal</li>
                  </ul>

                  {
                    cart.length > 0 
                    ?
                    cart.map(item=>(
                      <ul className='flex justify-between bg-lightBlack py-4 pl-14 pr-5  border-b border-solid border-black ' > 
                      <li className='w-1/12'>
                      <button
    className=" text-white font-semibold py-1 px-2  focus:outline-none focus:shadow-outline-red "
    onClick={()=>dispatch(remove(item))}
  >
    x 
  </button> 
                      </li >
                      <li className='w-1/5' >{item.pname}</li>
                      <li className='w-1/5'>{item.pprice}</li>

                      <li className=' w-1/5 '>
                          <button className='px-3 border border-solid mx-2' onClick={()=>handledecrement(item)}>-</button>
                          {item.quantity}
                          <button className='px-3 border border-solid mx-2' onClick={()=>handleincrement(item)}>+</button>
                      
                      </li>
                      
                      <li className='w-1/5'>{item.quantity*item.pprice}</li>
                      </ul>
                  )
                  )
                    :
                    <h1>card is empty</h1>

                    
                    
                    }

                    

                 <h1 className='absolute bottom-5 right-5 text-white '>total  {total} : </h1>
            </div>
            }       
        </Container>
    </section>
  )
}

export default Searchber