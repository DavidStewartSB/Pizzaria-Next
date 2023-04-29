import { FC } from 'react'

interface MenuPricesProps {}

const MenuPrices: FC<MenuPricesProps> = ({}) => {
    return (
        <div className="absolute inset-0 bg-gradient-to-l from-opacity-20 to-opacity-40">
            <div className='container mx-auto gap-6'>
                <div className='flex'>
                    <div></div>
                    <div className='text-center'>
                        <h3 className='capitalize'>freshly made</h3>
                        <h2>
                            <span className='block text-orange-1 font-Rubik'>Pizza</span> menu
                        </h2>
                    </div>
                    <div></div>
                </div>
            </div>
        </div>
    )
}

export default MenuPrices