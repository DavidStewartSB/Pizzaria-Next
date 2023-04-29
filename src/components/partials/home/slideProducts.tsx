import { FC } from 'react'
var $ = require("jquery");
import Image from 'next/image'

import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import dynamic from "next/dynamic";
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});

interface SlidesProductsProps {}

const SlidesProducts: FC<SlidesProductsProps> = ({}) => {
    let prevSet = <img src={"/icons/sliders/prev.svg"} alt='' width={300} height={300}/>
    return (
        <div className='text-black my-10'>

            <div className='flex justify-center flex-col text-center my-5'>
                <h3 className=" text-orange-1 font-black text-3xl mb-5 font-Delius capitalize break-words">fresh Quality</h3>
                <h2 className='font-Rubik text-[44px] font-extrabold leading-[44px] break-words'>We offer People Best Way <br /> to Eat Best Food</h2>

                <Image loading="lazy" 
                            alt="Separador" 
                            src={'/images/section_delimiter.png'}
                            width={212}
                            height={24}
                            className='self-center my-8' 
                            />
            </div>
        <OwlCarousel 
        items={4}
        margin={40}
        autoWidth={true}
        stagePadding={0}
        navClass={[
            ` absolute bg-pizza-prev left-[-4rem] top-[45%] top-[-12px] bg-no-repeat w-12 h-12 bg-pizza-seta hover:opacity-[.3]`,
            'absolute bg-pizza-next h-12 w-12 bg-no-repeat top-[45%] right-[-3.5rem] hover:opacity-[.3]']}
        loop  className='text-black max-w-[1210px] mx-auto'>
            <div className="text-center item flex align-center  flex-col rounded-md border border-gray-200 tem w-[270px] h-[424px] bg-white hover:bg-[#FFFBF1]">
            <Image 
                src='/products/pizza_slide_1.png'
                alt="Produto 4"
                width={192}
                height={192}
                className='mx-auto max-h-[190px] max-w-[190px] mt-10'
                />

                <h4 className=' my-5 text-2xl font-bold'>Juice</h4>

                <p>Gourmet burger with arugula, feta cheese, quail eggs and...</p>
                <p className="mt-5 text-2xl text-orange-300 font-bold">R$ 59,99</p>
            </div>
            <div className="text-center item flex align-center  flex-col rounded-md border border-gray-200 tem w-[270px] h-[424px] bg-white hover:bg-[#FFFBF1]">
            <Image 
                src='/products/pizza_slide_3.png'
                alt="Produto 4"
                width={192}
                height={192}
                className='mx-auto max-h-[190px] max-w-[190px] mt-10'
                />

                <h4 className=' my-5 text-2xl font-bold'>Juice</h4>

                <p>Gourmet burger with arugula, feta cheese, quail eggs and...</p>

                <p className="mt-5 text-2xl text-orange-300 font-bold">R$ 59,99</p>
            </div>
            <div className="text-center item flex align-center  flex-col rounded-md border border-gray-200 tem w-[270px] h-[424px] bg-white hover:bg-[#FFFBF1]">
            <Image 
                src='/products/juice_1.png'
                alt="Produto 4"
                width={192}
                height={192}
                className='mx-auto max-h-[190px] max-w-[190px] mt-10'
                />

                <h4 className=' my-5 text-2xl font-bold'>Juice</h4>

                <p>Gourmet burger with arugula, feta cheese, quail eggs and...</p>

                <p className="mt-5 text-2xl text-orange-300 font-bold">R$ 59,99</p>
            </div>
            <div className="text-center item flex align-center  flex-col rounded-md border border-gray-200 tem w-[270px] h-[424px] bg-white hover:bg-[#FFFBF1]">
            <Image 
                src='/products/juice_2.png'
                alt="Produto 4"
                width={192}
                height={192}
                className='mx-auto max-h-[190px] max-w-[190px] mt-10'
                />

                <h4 className=' my-5 text-2xl font-bold'>Juice</h4>

                <p>Gourmet burger with arugula, feta cheese, quail eggs and...</p>

                <p className="mt-5 text-2xl text-orange-300 font-bold">R$ 59,99</p>
            </div>
        </OwlCarousel>
        </div>
    )
}

export default SlidesProducts