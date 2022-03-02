import type { NextPage } from 'next'
import About from '../components/About'
import Banner from '../components/Banner'
import Faqs from '../components/Faq'
import Footer from '../components/Footer'
import MidSection from '../components/MidSetion'

const Home: NextPage = () => {
  return (
    <div>
      <header className="sticky top-0 h-20 bg-white px-44 py-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img src="/dukaan.svg" />
            <span className="ml-14 mt-2 cursor-pointer font-galRegular text-black-12 hover:underline">
              Pricing
            </span>
          </div>
          <div className=" items-center">
            <span className="mr-8 mt-2 cursor-pointer font-galRegular text-black-12 hover:underline">
              Sign in
            </span>
            <button className="rounded-md bg-dukaan-blue px-6 py-3 font-galSemibold text-white">
              Start free trial
            </button>
          </div>
        </div>
      </header>
      <div className="mt-24 px-44 pb-12">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="mt-16 font-galSemibold text-dukaan-blue">
              {' '}
              SELL FURNITURE ONLINE LIKE A PRO
            </p>
            <p className="mt-4 font-galSemibold text-4xl text-black-12">
              Start your own store & sell furniture online
            </p>
            <p className="mt-6 mb-6 font-galRegular text-base text-black-30">
              Have trouble selling furniture to your customers? Create a store
              in 30 seconds and sell furniture online now.
            </p>
            <button className="rounded-md bg-dukaan-blue px-8 py-3 font-galSemibold text-white">
              Start 14 day free trial
            </button>
          </div>
          <div>
            <img src="https://mydukaan.io/_next/static/images/furniture-banner-68e41522bbdb849f7fad82e0b16c8eb7.jpg" />
          </div>
        </div>
        {/* <div className="flex ">
          <div className=" w-1/2 pr-28">
            <p className="mt-16 font-galSemibold text-dukaan-blue">
              {' '}
              SELL FURNITURE ONLINE LIKE A PRO
            </p>
            <p className="mt-4 font-galSemibold text-4xl text-black-12">
              Start your own store & sell furniture online
            </p>
            <p className="mt-6 mb-6 font-galRegular text-base text-black-30">
              Have trouble selling furniture to your customers? Create a store
              in 30 seconds and sell furniture online now.
            </p>
            <button className="rounded-md bg-dukaan-blue px-8 py-3 font-galSemibold text-white">
              Start 14 day free trial
            </button>
          </div>
          <div className="w-1/2">
            <img src="https://mydukaan.io/_next/static/images/furniture-banner-68e41522bbdb849f7fad82e0b16c8eb7.jpg" />
          </div>
        </div> */}
      </div>
      <MidSection />
      <About />
      <Faqs />
      <Banner />
      <Footer />
    </div>
  )
}

export default Home
