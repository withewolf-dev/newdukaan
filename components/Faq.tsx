import { useState } from 'react'

const Faqs = () => {
  return (
    <div className="bg-gray-50 px-44 pt-14 pb-14">
      <p className="font-galSemibold text-4xl text-black-12">FAQs</p>
      <div className="mt-10">
        <Accordion
          title={'How to sell furniture'}
          description={
            'All you have to do is download and install the Dukaan app, set up your store, add your products, and enter the product details with their images and prices. Enter your bank details. Then, share your store link with your customers so that they can order furniture from your store. Use the Shiprocket or Dunzo plugins to ship your products.'
          }
        />
        <Accordion
          title={'How to accept payment on my order'}
          description={
            'When you set up your store, go to Manage → Online Payments, and enter your bank details. Once you share your store link with your customers, you will receive payments as and when your customers place orders.'
          }
        />
        <Accordion
          title={'Where can I sell furniture'}
          description={
            'There are many places you can sell your furniture online, including online marketplaces, forums and groups.However, the best way to sell furniture online is by creating your own online store. By doing this, you can get the following benefits:'
          }
        />
      </div>
    </div>
  )
}

export default Faqs

const Accordion = ({ title, description }) => {
  const [toggle, settoggle] = useState(false)
  const handletoggle = () => {
    settoggle(!toggle)
  }
  return (
    <div className="my-2 w-full rounded-md border border-gray-200 bg-white px-6 py-5">
      {!toggle && (
        <div className="flex justify-between">
          <p className=" font-galSemibold text-black-30 ">{title}</p>
          <span onClick={handletoggle} className="cursor-pointer">
            <img src="/plusIcon.svg" />
          </span>
        </div>
      )}
      {toggle && (
        <>
          <div className="flex justify-between">
            <h6 className=" font-galSemibold text-base text-black-30 ">
              {title}
            </h6>
            <span onClick={handletoggle} className="cursor-pointer">
              <img src="/minus.svg" />
            </span>
          </div>
          <p className="mt-4 font-galRegular text-sm text-black-30">
            {description}
          </p>
        </>
      )}
    </div>
  )
}
