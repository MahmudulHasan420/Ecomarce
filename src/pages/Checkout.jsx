import React from 'react'
import Pageheading from '../components/Pageheading'
import Container from '../components/Container'
import { useSelector } from 'react-redux'
import Input from '../components/Input'
import Flexx from '../components/Flexx'
import SubHeading from '../components/SubHeading'

const Checkout = () => {
  let pagename =useSelector((state=>state.Breadcrum.previousname))
  return (

    <Container>
        <Pageheading text="Checkout" className="mt-32"/>
        <Flexx> {pagename} /
        <p className='first-letter:uppercase ml-1'>{window.location.pathname.replace("/", " ").replace("-", " ")}</p>
        </Flexx>

        <p className='font-pop font-normal text-base my-32'>Have a coupon? Click here to enter your code</p>

        <SubHeading text="Billing Details" className="mb-10"/>

        <Flexx className="justify-between ">
          <div className='w-48%'>
            <Input placeholder="First Name" title="First Name *" type="text"/>
          </div>
          <div className='w-48%'>
            <Input placeholder="Last Name" title="Last Name *" type="text"/>
          </div>
        </Flexx>
        
            <Input placeholder="Company Name" title="Companye Name (optional)" type="text"/>
            <Input placeholder="Please select" title="Country *" type="text"/>
            <Input placeholder="House number and street name" title="Street Address *" type="text"/>
            <Input placeholder="Apartment, suite, unit etc. (optional)" type="text"/>
            <Input placeholder="Town/City" title="Town/City *" type="text"/>
            <Input placeholder="County" title="County (optional)" type="text"/>
            <Input placeholder="Post Code" title="Post Code *" type="text"/>
            <Input placeholder="Phone" title="Phone *" type="text"/>
            <Input placeholder="Email" title="Email Address *" type="email"/>
          


    </Container>
    
  )
}

export default Checkout