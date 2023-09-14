import React from 'react'
import Container from '../components/Container'
import { useSelector } from 'react-redux'
import Flexx from '../components/Flexx'
import Pageheading from '../components/Pageheading'
import SubHeading from '../components/SubHeading'
import Input from '../components/Input'
import Button from '../components/Button'
import location from '../assets/location.png'
import Image from '../components/Image'

const Contact = () => {
    let pagename =useSelector((state=>state.Breadcrum.previousname))
  return (
    <Container>
        <Pageheading className="mt-32" text="Contacts"/>
         <Flexx> {pagename} /
        <p className='first-letter:uppercase ml-1'>{window.location.pathname.replace("/", " ").replace("-", " ")}</p>
        </Flexx>

        <SubHeading className="mt-32"  text="Fill up a Form"/>

        <div className='w-48% mt-10'>
      <Input placeholder=" Your name here" title="Name" type="text"/>
      </div>
      <div className='w-48%'>
      <Input placeholder=" Your email here" title="Email" type="text"/>
      </div>
      <div className='w-48% '>
      <Input placeholder="Your message here" title="Message" type="text"/>
      </div>

      <Button text="Post" className="mt-8 mb-32"/>

      <div className='mb-32 w-3/4'>
      <Image src={location} alt="location"/>
      </div>


    </Container>
    
  )
}

export default Contact