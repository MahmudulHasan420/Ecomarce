import React, { useEffect, useState } from 'react'
import Container from '../components/Container'
import Flexx from '../components/Flexx'
import Product from '../components/Product'
import axios from 'axios'
import SubHeading from '../components/SubHeading'
import Slider from "react-slick";
import bag from '../assets/product1.png'
import PreveArrows from '../components/PreveArrows'
import NextArrows from '../components/NextArrows'
import Image from '../components/Image'
import clock from '../assets/clock.png'
import offer1 from '../assets/offer1.png'
import offer2 from '../assets/offer2.png'
import offer3 from '../assets/offer3.png'
import Facility from '../components/Facility'
import banner from '../assets/banner.png'




  

const Home = () => {

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow : <PreveArrows class =" absolute top-1/2 left-0 -translate-x-3/4 -translate-y-3/4 z-10"/>,
    nextArrow : <NextArrows class =" absolute top-1/2 right-0 translate-x-3/4  -translate-y-3/4 z-10"/>,
  };

  const bannersettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay : true,
    arrows : false,

  };

 let  [productList ,setproductList] = useState([])

    // useEffect(()=>{
    //   async function allProduct(){
    //     let data = await axios.get("http://localhost:1337/api/products?populate=*")

    //     setproductList(data.data.data)
    //     console.log(data.data.data);
        

    //   }
    //   allProduct()

    // },[])

  return (

    <>
     <div>
        <Slider {...bannersettings}>
          <div>
          <Image src={banner}/>
          </div>
          <div>
          <Image src={banner}/>
          </div>
          <div>
          <Image src={banner}/>
          </div>



        </Slider>
      </div>


        <Container>

          <Flexx className=" justify-between mb-170px mt-7">
            <Facility text="Two years warranty"/>
            <Facility text="Free shipping"/>
            <Facility text="Return policy in 30 days"/>
          </Flexx>
          <Flexx className="gap-4">
          <div className='1/2'>
          <Image src={offer1}/>

          </div>
          <div className='1/2'>
            <div className='mb-4'>
            <Image src={offer2}/>
            </div>
            <div>
            <Image src={offer3}/>

            </div>
          </div>
          
          </Flexx>
  

      <SubHeading text="New Arrivals" className="mb-12 mt-24"/>

      <div>
        <Slider {...settings}>
          <div>
          <Product heading="school bag" price="$44.00" src={bag}/>
          </div>
          <div>
          <Product heading="school bag" price="$44.00" src={bag}/>
          </div>
          <div>
          <Product heading="school bag" price="$44.00" src={bag}/>
          </div>
          <div>
          <Product heading="school bag" price="$44.00" src={bag}/>
          </div>
          <div>
          <Product heading="school bag" price="$44.00" src={bag}/>
          </div>
          <div>
          <Product heading="school bag" price="$44.00" src={bag}/>
          </div>
        </Slider>
      </div>
        {/* <Flexx className="mb-24">

          {productList.map((item)=>(

             <div className='w-23'>
             <Product heading={item.attributes.heading} price={item.attributes.price} image={item.attributes.image.data.attributes.url}/>
           </div>

          )     )}
        
        </Flexx> */}

<SubHeading text="Our Bestsellers" className="mb-12"/>

<div>
  <Slider {...settings}>
    <div>
    <Product heading="school bag" price="$44.00" src={bag}/>
    </div>
    <div>
    <Product heading="school bag" price="$44.00" src={bag}/>
    </div>
    <div>
    <Product heading="school bag" price="$44.00" src={bag}/>
    </div>
    <div>
    <Product heading="school bag" price="$44.00" src={bag}/>
    </div>
    <div>
    <Product heading="school bag" price="$44.00" src={bag}/>
    </div>
    <div>
    <Product heading="school bag" price="$44.00" src={bag}/>
    </div>
  </Slider>
</div>

<Image src={clock} className="mb-24"/>

<Flexx className="flex-wrap"> 
  
    <div className='w-1/4'>
    <Product heading="school bag" price="$44.00" src={bag} />
    </div>
    <div className='w-1/4'>
    <Product heading="school bag" price="$44.00" src={bag}/>
    </div>
    <div className='w-1/4'>
    <Product heading="school bag" price="$44.00" src={bag}/>
    </div>
    <div className='w-1/4'>
    <Product heading="school bag" price="$44.00" src={bag}/>
    </div>
    <div className='w-1/4'>
    <Product heading="school bag" price="$44.00" src={bag}/>
    </div>
    <div className='w-1/4'>
    <Product heading="school bag" price="$44.00" src={bag}/>
    </div>
    <div className='w-1/4'>
    <Product heading="school bag" price="$44.00" src={bag}/>
    </div>
    <div className='w-1/4'>
    <Product heading="school bag" price="$44.00" src={bag}/>
    </div>
</Flexx>
    </Container>
    
    </>
    

  )
}

export default Home