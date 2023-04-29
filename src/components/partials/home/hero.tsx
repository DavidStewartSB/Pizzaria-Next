import Image from 'next/image'
import {type FC } from 'react'

interface HeroProps {}

const Hero: FC<HeroProps> = ({}) => {
    return (
        <div className="relative lg:h-[900px] z-[0] ">
  <div className="before:top-[0px] before:left-[0px] before:opacity-[.3] before:w-full before:h-full before:z-[-1] before:absolute before:bg-hero-pattern">
  </div>
  <div className='container mx-auto px-10 lg:grid py-20 lg:grid-cols-2 gap-5 h-full md:py-10 lg:py-0'>
    <div className='flex justify-center items-center flex-col lg:ml-10 lg:w-[636px] pb-10 lg:pb-0 '>
      <h1 className='text-[40px] text-center lg:text-start lg:text-[100px] font-extrabold self-center lg:leading-[100px] font-Rubik'>
        Enjoy Your Pizza In Town
      </h1>
      <button className='btn-cta'>
        <i className="fa-solid fa-cart-shopping pr-3"></i>Order now
      </button>
    </div>
    <div className='flex justify-center self-center relative '>
      <Image loading="lazy"
        src={'/images/hero_pizza.png'}
        alt="Hero Pizza"
        width={615}
        height={575}
        className='w-96 lg:w-auto z-[10]'
      />
      <Image loading="lazy"
        className='absolute z-[1] left-[163px] top-[60px] h-[116px] w-[173px] lg:w-auto lg:h-auto lg:top-[97px] lg:left-[88px]'
        src={'/images/scroll_pizza_1.png'}
        alt="Hero Pizza"
        width={296}
        height={197}
      />
      <Image loading="lazy"
        className='absolute  z-[1] h-[127px] w-[187px] top-[185px] left-[144px] lg:w-auto lg:h-auto lg:top-[300px] lg:left-[40px]'
        src={'/images/scroll_pizza_2.png'}
        alt="Hero Pizza"
        width={296}
        height={197}
      />
    </div>
  </div>
</div>
    )
}

export default Hero