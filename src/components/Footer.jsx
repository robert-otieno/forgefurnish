
const Footer = () => {
  return (
    <footer className='bg-[#FAF7F5]'>
      <div className="w-11/12 md:w-4/5 mx-auto">
        <div className="font-cormorant">
          <div className="text-xl text-gray-600 pt-44 pb-28">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
              <div className="space-y-3">
                <div className="">
                  <a href="https://forgefurnish.com/">
                    <img src="https://bridge383.qodeinteractive.com/wp-content/uploads/2020/07/footer-logo.png" className="max-w-full h-auto" alt="m" width="165" height="21" />
                  </a>
                </div>
                <div className="italic"><h3 className="">Inspired by nature</h3></div>
                <div className="italic">
                  <h6>
                    <a href="https://www.facebook.com/ForgeFurnish/" target="_blank" rel="noopener">Fb</a> – 
                    <a href="https://www.instagram.com/forgefurnish/" target="_blank" rel="noopener">Ig</a> – 
                    <a href="https://twitter.com/ForgeFurnish" target="_blank" rel="noopener">Tw</a>
                  </h6>
                </div>
              </div>

              <div className="space-y-3">
                <div className="font-poppins text-gray-900 uppercase"><h5>Info</h5></div>
                <div className="italic"><p>A: Nairobi, Kenya</p></div>
                <div className="italic"><p>T: <a href="tel:+254715158933">0715 158 933</a>; <a href="tel:+254708962834">0708 962 834</a></p></div>
              </div>

              <div className="space-y-3">
                <div className="font-poppins text-gray-900 uppercase"><h5>Collab</h5></div>
                <div className="italic"><p>E: <a href="mailto:info@forgefurnish.com">info@forgefurnish.com</a></p></div>
                <div className="italic"><p>T: <a href="tel:+254715158933">0715 158 933</a></p></div>
              </div>

              <div className="space-y-3">
                <div className="font-poppins text-gray-900 uppercase"><h5>Subscribe</h5></div>
                <form className="flex">
                  <input type="email" name="email" className="outline-0 outline-none border-b border-gray-600 bg-transparent placeholder:italic" aria-invalid="false" placeholder="E-mail" />
                  <button className="-ml-9" type="submit"><svg className="w-12" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.72 7.72a.75.75 0 011.06 0l3.75 3.75a.75.75 0 010 1.06l-3.75 3.75a.75.75 0 11-1.06-1.06l2.47-2.47H3a.75.75 0 010-1.5h16.19l-2.47-2.47a.75.75 0 010-1.06z" clipRule="evenodd"></path></svg></button>
                </form>
                <div className="italic"><p className='mt-2'>*Sharing our vision and project</p></div>
              </div>
            </div>
          </div>
        </div>

        <div className="dark:bg-gray-900 pt-5 text-xl">
          <div className="mx-auto w-full bg-gray-300 h-[1px]"></div>
          <div className="my-2 md:my-4">
            <div className="text-center text-gray-600 italic font-cormorant md:text-left">
              <p>All rights reserved <a href="https://forgefurnish.com/" target="_blank" rel="noopener">© Forge & Furnish</a> {new Date().getFullYear()}</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer