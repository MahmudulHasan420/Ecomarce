import React from 'react'
import { useSelector } from 'react-redux'
import Container from '../components/Container'
import Pageheading from '../components/Pageheading'
import Flexx from '../components/Flexx'
import SubHeading from '../components/SubHeading'
import Input from '../components/Input'
import Button from '../components/Button'


const Login = () => {
    let pagename =useSelector((state=>state.Breadcrum.previousname))
  return (
   <Container>
    <Pageheading text="Login" className="mt-32"/>

    <Flexx>
        {pagename} /
        <p className='first-letter:uppercase ml-1'>{window.location.pathname.replace("/", " ").replace("-", " ")}</p>
    </Flexx>

    <p className='font-pop font-normal text-base text-lightBlack mt-32 max-w-643 '>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</p>
    <div className='w-full h-1 bg-ash mb-14 mt-14'></div>

    <SubHeading text="Returning Customer"/>

    <Flexx className="flex-wrap justify-between mt-10 mb-16">
    <div className='w-48%'>
      <Input placeholder="company@domain.com" title="Email address" type="email"/>
      </div>
      <div className='w-48%'>
      <Input placeholder="Password" title="Password" type="password"/>
      </div>
    </Flexx>

    <button className="font-pop font-bold text-black text-sm bg-white py-4 px-12 mb-36 border border-solid border-black" >Log in</button>
    <div className='w-full h-1 bg-ash mb-14 mt-14'></div>
    <SubHeading text="New Customer"/>
    <p className='font-pop font-normal text-base text-lightBlack mt-32 max-w-643 mb-12' >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</p>

    <Button text="Continue" className="mb-32"/>


   </Container>
  )
}

export default Login