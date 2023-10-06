import React from 'react'
import Image from './Image'
import product1 from '../assets/product1.png'
import Badge from './Badge'
import ProductHeading from './ProductHeading'
import Flexx from './Flexx'
import { AiFillHeart } from 'react-icons/ai';
import { BiGitCompare } from 'react-icons/bi';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { addtocart } from '../slices/Cartslices'
import { useDispatch } from 'react-redux'


const Product = ({heading,price}) => {

    let dispatch = useDispatch()

    let handlecart = ()=>{
        dispatch(addtocart({
            pname: heading,
            pprice: price,
            img : product1,
            quantity : 1
            
        }))
    }



    

  return (
    <div className='mx-3'>      
        <div className="relative overflow-hidden group">
            <Image src={product1} alt="Product Photo" className="w-full" />
            <Badge text="new" className="absolute top-5 left-5"/>
            <div className='bg-white p-6 absolute -bottom-32 left-0 w-full group-hover:bottom-0 duration-300'>
                <Flexx className="justify-end items-center gap-2">
                    <p className='font-pop font-base text-normal'>Add to Wish List</p>
                    <AiFillHeart></AiFillHeart>
                </Flexx>
                <Flexx className="justify-end items-center gap-2 my-2">
                    <p className='font-pop font-base text-normal'>Compare</p>
                    <BiGitCompare></BiGitCompare>
                </Flexx>
                <Flexx className="justify-end items-center gap-2 ">
                    <p onClick={handlecart} className='font-pop font-base text-normal cursor-pointer'>Add to Cart</p>
                    <AiOutlineShoppingCart></AiOutlineShoppingCart>
                </Flexx>

            </div>
        </div>
        <Flexx className="justify-between mt-3">
                <ProductHeading text={heading}/>
                <p className='font-pop font-base text-normal '>{price}</p>
        </Flexx>
    </div>

  )
}

export default Product