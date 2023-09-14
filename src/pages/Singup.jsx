import React from 'react'
import SubHeading from '../components/SubHeading'
import Container from '../components/Container'
import Flexx from '../components/Flexx'
import { useSelector } from 'react-redux'
import Pageheading from '../components/Pageheading'
import Input from '../components/Input'
import Button from '../components/Button'

const Singup = () => {

  let pagename =useSelector((state=>state.Breadcrum.previousname))
  return (
  <Container>
    <Pageheading text=" Sing up" className="mt-28"/>

      <Flexx> {pagename} /
        <p className='first-letter:uppercase ml-1'>{window.location.pathname.replace("/", " ").replace("-", " ")}</p>

      </Flexx>

      <p className='font-pop font-normal text-base text-lightBlack mt-32 max-w-643'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</p>

      <div className='w-full h-1 bg-ash mb-14 mt-14'></div>

      <SubHeading text="Your Personal Details"/>

      <Flexx className="flex-wrap justify-between mt-10 mb-16">
      <div className='w-48%'>
      <Input placeholder="First Name" title="First Name" type="text"/>
      </div>
      <div className='w-48%'>
      <Input placeholder="First Name" title="First Name" type="text"/>
      </div>
      <div className='w-48%'>
      <Input placeholder=" company@domain.com " title="Email address" type="email"/>
      </div>
      <div className='w-48%'>
      <Input placeholder="Your phone number" title="Telephone" type="number"/>
      </div>
      </Flexx>

      <div className='w-full h-1 bg-ash mb-14'></div>

      <SubHeading text="New Customer"/>

      <Flexx className="flex-wrap justify-between mb-32">
      <div className='w-48%'>
      <Input placeholder="4279 Zboncak Port Suite 6212" title="Address 1" type="text"/>
      </div>
      <div className='w-48%'>
      <Input placeholder="—" title="Address 1" type="text"/>
      </div>
      <div className='w-48%'>
      <Input placeholder="05228" title="Post Code" type="text"/>
      </div>
      <div className='w-48%'>
      <Input placeholder="Your phone number" title="Telephone" type="number"/>
      </div>
      <div className='w-48%'>
      <Input placeholder="Please select" title="Country" type="text"/>
      </div>
      <div className='w-48%'>
      <Input placeholder="Please select" title="Region/State" type="text"/>
      </div>
      </Flexx>

      <div className='w-full h-1 bg-ash mb-14'></div>

      <SubHeading text="Your Password"/>

      <Flexx className="flex-wrap justify-between mt-10 mb-16">
      <div className='w-48%'>
      <Input placeholder="Password" title="Password" type="Password"/>
      </div>
      <div className='w-48%'>
      <Input placeholder="Repeat Password" title="Repeat Password" type="Password"/>
      </div>
     
  
      </Flexx>

      <div className='w-full h-1 bg-ash mb-14'></div>
      <input id='test' type='checkbox' className='peer/test' hidden/>

      <label className='relative pl-8 inline-block before:w-4 before:h-4 before:border-2 before:border-lightBlack before:border-solid before:bg-white before:absolute before:top-1.5 before:left-0 before:content[""] after:w-3 after:h-3 after:peer-checked/test:border after:peer-checked/test:border-solid after:peer-checked/test:bg-lightBlack after:absolute after:top-2 after:left-0.5 after:content[""]'for="test">
      I have read and agree to the Privacy Policy
      </label>

     <Flexx className="gap-x-8 mt-6 mb-7">
     <p>Subscribe Newsletter</p>

<input id='Yes' type='checkbox' className='peer/Yes' hidden/>

<label className='relative pl-8 inline-block before:w-4 before:h-4 before:border-2 before:border-lightBlack before:border-solid before:bg-white before:absolute before:top-1.5 before:left-0 before:content[""] after:w-3 after:h-3 after:peer-checked/Yes:border after:peer-checked/Yes:border-solid after:peer-checked/Yes:bg-lightBlack after:absolute after:top-2 after:left-0.5 after:content[""]'for="Yes">
Yes
</label>

<input id='no' type='checkbox' className='peer/no' hidden/>

<label className='relative pl-8 inline-block before:w-4 before:h-4 before:border-2 before:border-lightBlack before:border-solid before:bg-white before:absolute before:top-1.5 before:left-0 before:content[""] after:w-3 after:h-3 after:peer-checked/no:border after:peer-checked/no:border-solid after:peer-checked/no:bg-lightBlack after:absolute after:top-2 after:left-0.5 after:content[""]'for="no">
No
</label>
     </Flexx>

     <Button text="Log in" className="mb-32"/>
   
     
    </Container>
  )
}

export default Singup