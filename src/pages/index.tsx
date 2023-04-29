import Nav from '@/components/Nav'
import CardPromo from '@/components/partials/home/cardsPromo'
import Hero from '@/components/partials/home/hero'
import AboutPizza from '@/components/partials/home/about'
import SlidesProducts from '@/components/partials/home/slideProducts'
import MenuPrices from '@/components/partials/home/menuPrice'

export default function Home() {
  return (
    <>
    <main >
    <header className='relative mx-auto'>
      
    </header>
      <section className=" h-auto bg-[#121619]">
        <Hero />
      </section>

      <section className='container mx-auto'>
        <CardPromo />
      </section>

      <section className='relative bg-[#FFF8EF] h-auto py-20'>
        <AboutPizza />
      </section>

      <section className='container mx-auto'>
        <SlidesProducts />
      </section>

      <section className='bg-food-menu relative'>
        <MenuPrices />
      </section>
    </main>
    </>
  )
}
