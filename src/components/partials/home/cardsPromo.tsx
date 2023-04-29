import { FC } from 'react'
import Image from 'next/image'

interface CardsProps {}

const CardPromo: FC<CardsProps> = ({}) => {
    return (
        <div className='cardsPromo'>
            <div className='cardsPromo__child' >
                <Image 
                src={'/images/promo_order_1.jpg'}
                alt='Promoção pizza 1'
                width={636}
                height={329}
                className='cardsPromo__child--images self-end'
                />
                <div className="cardsPromo__child--content">
                    <h3>Mexican <br className='hidden lg:block' /> Green <br className='block lg:hidden' /> Wave</h3>
                    <button className='btn-cta'>
                    <i className="fa-solid fa-cart-shopping pr-3"></i>Order now
                    </button>
                </div>
            </div>

            <div className='cardsPromo__child'>
            <Image 
                src={'/images/promo_order_3.jpg'}
                alt='Promoção pizza 1'
                width={636}
                height={329}
                className='cardsProps__child--images'
                />
                <div className="cardsPromo__child--content ">
                    <h3>Mexican <br className='hidden lg:block' /> Green <br className='block lg:hidden'/> Wave</h3>
                    <button className='btn-cta'>
                    <i className="fa-solid fa-cart-shopping pr-3"></i>Order now
                    </button>
                </div>

            </div>

            <Image 
            src={'/images/promo_leaf_bg.png'}
            alt={'Pizzaria'}
            width={290}
            height={100}
            className='absolute top-[70%] right-[-7rem] lg:top-[70%] lg:right-0 z-[-1]'
            />
        </div>
    )

}

export default CardPromo