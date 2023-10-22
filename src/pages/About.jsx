import React from 'react'
import { useSelector } from 'react-redux'
import Pageheading from '../components/Pageheading'
import Flexx from '../components/Flexx'
import Container from '../components/Container'
import Image from '../components/Image'
import product1 from '../assets/product1.png'
import Button from '../components/Button'
import about1 from '../assets/about1.png'
import Aboutpart from '../components/aboutpart'

const About = () => {
    let pagename =useSelector((state=>state.Breadcrum.previousname))
  return (
  <Container>
    <Pageheading text="About" className="mt-32"/>
        <Flexx> {pagename} /
        <p className='first-letter:uppercase ml-1'>{window.location.pathname.replace("/", " ").replace("-", " ")}</p>
        </Flexx>

        <Flexx className="mt-32 gap-10">
            <div className='relative w-1/2'>
                <Image src={product1} className="w-full "/>
                <Button text="Our Brands" className="absolute bottom-20 left-1/2 -translate-x-2/4"/>
            </div>
            <div className='relative w-1/2'>
                <Image src={about1} className="w-full"/>
                <Button text="Our Brands" className="absolute bottom-20 left-1/2 -translate-x-2/4"/>
            </div>
        </Flexx>

        <h3 className='font-pop font-noraml text-[39px] my-32'>Orebi is one of the world’s leading ecommerce brands and is internationally recognized for celebrating the essence of classic Worldwide cool looking style.</h3>

        <Flexx className="gap-10">
            <div>
            <Aboutpart text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an   printer took a galley of type and scrambled it to make a type specimen book." heading="Our Vision" />
            </div>
       <div>
       <Aboutpart text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic." heading="Our Story"/>
       </div>
            <div>
            <Aboutpart text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley." heading="Our Brands"/>
            </div>
        </Flexx>
  </Container>
    
  )
}

export default About