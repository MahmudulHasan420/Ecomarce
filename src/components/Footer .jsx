import React from 'react'
import Container from './Container'
import Flexx from './Flexx'
import ProductHeading from './ProductHeading'
import List from './List'
import Image from './Image'
import logo from '../assets/logo.png'
import {AiFillFacebook,AiFillLinkedin,AiFillInstagram} from 'react-icons/ai'

const Footer  = () => {
  return (
   <>
    <section className='bg-ash pt-14'>
        <Container>
            <Flexx className="mb-16">
                <div className='w-2/12'>
                    <ProductHeading text="MENU"></ProductHeading>
                    
                    <ul className='mt-6 flex flex-col gap-y-1.5'>
                        <List text="Home"/>
                        <List text="Shop"/>
                        <List text="About"/>
                        <List text="Contacts"/>
                        <List text="Journal"/>
                    </ul>
                    
                    </div>
                <div className='w-2/12'>
                <ProductHeading text="SHOP"></ProductHeading>
                    <ul   className='mt-6 flex flex-col gap-y-1.5'>
                        <List text="Category 1"/>
                        <List text="Category 2"/>
                        <List text="Category 3"/>
                        <List text="Category 4"/>
                        <List text="Category 5"/>
                    </ul>
                </div>
                <div className='w-2/12'>
                <ProductHeading text="HELP"></ProductHeading>
                    <ul  className='mt-6 flex flex-col gap-y-1.5'>
                        <List text="Privacy Policy"/>
                        <List text="Terms & Conditions"/>
                        <List text="Special E-shop"/>
                        <List text="Shipping"/>
                        <List text="Secure Payments"/>
                    </ul>
                </div>
                <div className='w-3/12'>
                <ProductHeading text="(052) 611-5711"></ProductHeading>
                <ProductHeading text="company@domain.com" className="mb-4"></ProductHeading>
                <p className='font-pop font-normal text-sm text-blak'>575 Crescent Ave. Quakertown, PA 18951</p>
                </div>
                <div className='w-3/12'>
                    <Image src={logo} alt={logo} />
                </div>
            </Flexx>
            <Flexx className="pb-14">
               
                   <Flexx className='w-9/12 items-center gap-x-6'>
                   <AiFillFacebook />
                    <AiFillLinkedin/>
                    <AiFillInstagram/>
                   </Flexx>
                
                <div className='w-3/12'>
                    <p className='font-pop font-normal text-sm text-blak'>2020 Orebi Minimal eCommerce Figma Template by Adveits</p>
                </div>
            </Flexx>
        </Container>
    </section>
   </>
  )
}

export default Footer 