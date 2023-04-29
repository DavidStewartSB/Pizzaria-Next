import {FC} from 'react'
import Image from 'next/image'

interface AboutProps {}

const AboutPizza: FC<AboutProps> = ({}) => {
    return (
        <div>
            <Image loading="lazy"  
            src={'/images/shape_10.png'}
            alt=''
            width={185}
            height={174}
            className='absolute top-0 left-0'
            /> 
            <Image loading="lazy"  
            src={'/images/shape_12.png'}
            alt=''
            width={108}
            height={120}
            className='absolute bottom-0 left-0'
            /> 
            <Image loading="lazy"
            src={'/images/shape_16.png'}
            alt=''
            width={169}
            height={363}
            className='absolute z-[0] right-[0] bottom-[0] opacity-[.2]'
            />
            <Image loading="lazy"
            src={'/images/shape_14.png'}
            alt=''
            width={52}
            height={112}
            className='absolute z-[0] left-[86%] top-[15%]'
            />
            <div className='container mx-auto text-black'>
                <div className="grid lg:grid-cols-2 gap-6">
                    <div className='relative flex justify-center'>
                        <Image loading="lazy"
                        src={'/images/best_pizza_2.png'}
                        alt='Melhor Pizza'
                        width={526}
                        height={358}
                        className='absolute z-[1]'
                        />
                        <Image loading="lazy"
                        src={'/images/shape_17.png'}
                        alt=''
                        width={352}
                        height={314}
                        className='absolute z-[0] left-[18%] top-[40%]'
                        />
                        <Image loading="lazy"
                        src={'/images/shape_13.png'}
                        alt=''
                        width={160}
                        height={134}
                        className='absolute z-[0] left-[58%] top-[55%] opacity-[.2]'
                        />
                        <Image loading="lazy"
                        src={'/images/shape_11.png'}
                        alt=''
                        width={157}
                        height={63}
                        className='absolute z-[0] left-[70%] top-[4%]'
                        />
                    </div>
                    <div  className='relative'>
                            <div className='w-[450px] flex flex-center flex-col'>
                                <h2 className='text-orange-1 text-[160px] leading-[160px] font-bold font-Delius uppercase' >
                                    <span className='font-normal text-[40%] text-black block  leading-[0.85em]'>The best</span>
                                    Pizza
                                    <span className='font-normal block text-black text-[40%] leading-[0.85em] pl-[25%]'>Arround</span>
                                </h2>
                            <Image loading="lazy" 
                            alt="Separador" 
                            src={'/images/section_delimiter.png'}
                            width={212}
                            height={24}
                            className='self-center my-8' 
                            />
                            </div>
                        
                        <p className='w-[610px] text-[#616161] text-[16px] font-normal'>
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.
                        </p>
                        <Image loading="lazy"
                        src={'/images/shape_15.png'}
                        alt=''
                        width={73}
                        height={95}
                        className='absolute z-[0] left-[30%] bottom-[-20%]'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutPizza