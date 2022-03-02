const Footer = () => {
  return (
    <div className="px-44 pt-20 pb-8">
      <div className="grid grid-cols-6 gap-8">
        <img src="/dukaan.svg" className="mr-48" />
        <div className="flex flex-col space-y-3">
          <a className="footer-text">Bussiness Tools</a>
          <a className="footer-text">Dukaan finder</a>

          <a className="footer-text">Dukaan for PC</a>

          <a className="footer-text">Dukaan delivery</a>

          <a className="footer-text">Dukaan plus</a>

          <a className="footer-text">Dukaan plugins</a>
        </div>
        <div className="flex flex-col space-y-3">
          <a className="footer-text">Help center</a>
          <a className="footer-text">Blog</a>

          <a className="footer-text">Banned items</a>
        </div>
        <div className="flex flex-col space-y-3">
          <a className="footer-text">About</a>
          <a className="footer-text">Privacy</a>

          <a className="footer-text">Terms</a>

          <a className="footer-text">Contact</a>

          <a className="footer-text">FAQ's</a>
        </div>
        <div className="flex flex-col space-y-3">
          <a className="footer-text">Jobs</a>
          <a className="footer-text">Branding</a>

          <a className="footer-text">Press inquiry</a>

          <a className="footer-text">Bug Bounty</a>
        </div>
        <div className="flex flex-col space-y-3">
          <a className="footer-text">Facebook</a>
          <a className="footer-text">Twitter</a>

          <a className="footer-text">Linkedin</a>
        </div>
      </div>
      {/* <div className="mt-8 h-[1px] bg-gray-200"></div> */}
      <hr className="mt-8 bg-gray-200" />
      <div className="mt-4 flex justify-between">
        <p className="font-galRegular text-xs text-black-30">
          Growthpond Technology Pvt Ltd. All rights reserved, 2022.
        </p>
        <div className="flex items-center">
          <p className="font-galRegular text-xs text-black-12">Made in</p>
          <img src="/india.svg" className="ml-2" />
        </div>
      </div>
    </div>
  )
}
export default Footer
