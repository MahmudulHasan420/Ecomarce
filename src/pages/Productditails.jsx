import React from 'react'
import Container from '../components/Container'
import Flexx from '../components/Flexx'
import Image from '../components/Image'
import product1 from '../assets/product1.png'
import { useSelector } from 'react-redux'
import SubHeading from '../components/SubHeading'
import {AiFillStar} from 'react-icons/ai'
import Button from '../components/Button'
import {HiPlusSm} from 'react-icons/hi'


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
    <SubHeading text="Product" className="mt-12"/>
    <Flexx className="gap-6 my-5"> 
      <div className='flex '>
      <AiFillStar/>
      <AiFillStar/>
      <AiFillStar/>
      <AiFillStar/>
      <AiFillStar/>

      </div>
      <p className='font-pop font-normal text-sm '>1 Review</p>
    </Flexx>
    <Flexx className="gap-6">
      <del className='font-pop font-normal text-base text-lightBlack'>$88.00</del>
      <h5 className='font-pop font-bold text-xl'>$44.00</h5>
    </Flexx>
    <div className='w-1/2 h-1 bg-ash mb-14 mt-14'></div>

    <Flexx className="gap-13">
      <h6 className='font-pop font-bold text-base'>COLOR:</h6>
      <div className='flex gap-4'>
         <div className='w-5 h-5 rounded-full bg-color1'></div>
         <div className='w-5 h-5 rounded-full bg-color2'></div>
         <div className='w-5 h-5 rounded-full bg-color3'></div>
         <div className='w-5 h-5 rounded-full bg-color4'></div>
         <div className='w-5 h-5 rounded-full bg-color5'></div>

      </div>
    </Flexx>
    <Flexx className="gap-19 my-8">
      <h6 className='font-pop font-bold text-base'>SIZE:</h6>
      <select > 
  <option value="S">S</option>
  <option value="M">M</option>
  <option value="L">L</option>
  <option value="XL">XL</option>
  <option value="XXL">XXL</option>
  <option value="XXXL">XXXL</option>
</select>
    </Flexx>
    <Flexx className="gap-7 my-8 ">
      <h6 className='font-pop font-bold text-base mt-1'>QUANTITY:</h6>

      <div className='flex gap-8 border border-solid border-lightBlack py-1 px-5'>
        <p>-</p>
        <p>1</p>
        <p>+</p>
      </div>

    </Flexx>
    <div className='w-1/2 h-1 bg-ash mb-14 mt-14'></div>
    <Flexx className="gap-7 my-8 ">
      <h6 className='font-pop font-bold text-base'>STATUS:</h6>
      <p className='font-pop font-normal text-base text-lightBlack'>In stock</p>

   

    </Flexx>

    <div className='w-1/2 h-1 bg-ash mb-14 mt-14'></div>

      <Button text="Add to Wish List" className="hover:bg-white hover:text-black hover:border hover:border-solid hover:border-black"/>
      <Button text="Add to Cart" className="hover:bg-white hover:text-black hover:border hover:border-solid hover:border-black ml-5"/>

      <div className='w-1/2 h-1 bg-ash mb-6 mt-14 '></div>

      <Flexx className="justify-between my-8 w-1/2">
      <h6 className='font-pop font-bold text-base mt-1'>FEATURES  & DETAILS</h6>
      <h5 className='mt-2'><HiPlusSm/></h5>
    </Flexx>

    <div className='w-1/2 h-1 bg-ash mb-6 mt-6 '></div>

    <Flexx className="justify-between my-8 w-1/2">
      <h6 className='font-pop font-bold text-base mt-1'>SHIPPING & RETURNS</h6>
      <h5 className='mt-2'><HiPlusSm/></h5>
    </Flexx>
    <div className='w-1/2 h-1 bg-ash mb-6 mt-6 '></div>

    <p className='font-pop font-normal text-base text-lightBlack w-1/2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>


</Container>
  )
}

export default Productditails