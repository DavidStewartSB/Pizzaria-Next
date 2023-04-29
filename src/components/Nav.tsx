import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import {
  ArrowPathIcon,
  Bars3Icon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  Bars3CenterLeftIcon,
  ShoppingBagIcon,
  UserIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'


function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      <nav className="bg-[#121619]  lg:bg-transparent z-[30] mx-auto flex max-w-7xl items-center justify-between px-2 py-4 lg:p-6 lg:px-0 lg:absolute lg:left-[0%] lg:right-[5%]" aria-label="Global">
        <div className="flex ">
          <a href="#" className="lg:-m-1.5 lg:p-1.5 lg:mr-10">
            <Image 
            src="/icons/logo.png"
            alt="logo Pizzaria"
            className="h-[35px] w-[110px] lg:h-14 lg:w-auto "
            width={106}
            height={56}
            />
          </a>
          <Popover.Group className="hidden lg:flex lg:gap-x-6 lg:pr-5 lg:self-center lg:w-[30%]">
                <a href="#" className="text-md font-bold leading-6 hover:text-orange-400">
                  Home
                </a>

                <a href="#" className="text-md font-bold leading-6 hover:text-orange-400">
                  Features
                </a>
                <a href="#" className="text-md font-bold leading-6 hover:text-orange-400">
                  Marketplace
                </a>
                <a href="#" className="text-md font-bold leading-6 hover:text-orange-400">
                  Company
                </a>
            </Popover.Group>
        </div>
        {/* Hamburguer Icon */}
        <div className="flex lg:hidden"> 
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
        <UserIcon className="h-[20px] w-[20px] text-white" aria-hidden="true" />
        <ShoppingBagIcon className="h-[20px] w-[20px] text-white mx-4" aria-hidden="true" />
        <Bars3CenterLeftIcon className="h-9 w-9 text-white" aria-hidden="true" />
          </button>
        </div>
        <div className='hidden lg:flex lg:w-[420px]'>
            <ul className='flex items-center lg:gap-x-14 lg:self-center w-[40%]'>
                <li className='relative pt-5'>
                <a href="" className='hover:text-orange-500 text-xl absolute bottom-0 transition-all translate-y-1 hover:-translate-y-2'>
                        <i className="fa-brands fa-facebook-f"></i>
                    </a>
                </li>
                <li className='relative pt-5'>
                <a href="" className='hover:text-orange-500 text-xl absolute bottom-0 transition-all translate-y-1 hover:-translate-y-2'>
                        <i className="fa-brands fa-twitter"></i>
                    </a>
                </li>
                <li className="relative pt-5">
                    <a href="" className='hover:text-orange-500 text-xl absolute bottom-0 transition-all translate-y-1 hover:-translate-y-2'>
                    <i className="fa-brands fa-pinterest"></i>
                    </a>
                </li>
                <li className='relative pt-5'>
                <a href="" className='hover:text-orange-500 text-xl absolute bottom-0 transition-all translate-y-1 hover:-translate-y-2'>
                        <i className="fa-brands fa-instagram"></i>
                        </a>
                    </li>
            </ul>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-20 items-center">
          <a href="#" className="text-md font-bold leading-6 hover:text-orange-400">
            Login
          </a>

          <i className="fa-solid fa-bag-shopping"></i>
        </div>
        </div>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Features
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Marketplace
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Company
                </a>
              </div>
              <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Log in
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
      </>
  )
}