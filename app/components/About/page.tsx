import React from 'react'

const About = () => {
  return (
      <section className="py-12 bg-white sm:py-16 lg:py-20 xl:py-24">
          <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
              <div className="relative max-w-5xl mx-auto overflow-hidden bg-gray-200 rounded-3xl">
                  <div className="absolute bottom-0 right-0 -mr-10">
                      <img className="w-full" src="https://landingfoliocom.imgix.net/store/collection/saasui/images/cta/2/ring-pattern.svg" alt="" />
                  </div>

                  <div className="relative flex flex-col items-center lg:flex-row lg:items-end">
                      <div className="px-6 py-12 text-center sm:p-12 lg:py-16 xl:p-20 lg:text-left">
                          <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">About Us</h2>
                          <p className="mt-4 text-base font-normal leading-7 text-gray-600 lg:text-lg lg:mt-6 lg:leading-8">Clarity gives you the blocks & components you need to create a truly professional website, landing page or admin panel for your SaaS.Clarity gives you the blocks & components you need to create a truly professional website, landing page or admin panel for your SaaS.</p>
                          <div className="flex flex-col items-stretch mt-8 space-y-4 sm:flex-row sm:justify-center lg:justify-start sm:space-y-0 sm:items-center sm:space-x-4">
                              <a
                                  href="#"
                                  title=""
                                  className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white transition-all duration-200 bg-[#292e76] border border-transparent rounded-full shadow-sm hover:bg-[#353c98] focus:outline-none"
                                  role="button"
                              >
                                 More about us
                              </a>

                              <a
                                  href="#"
                                  title=""
                                  className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-gray-900 transition-all duration-200 border border-gray-900 rounded-full shadow-sm hover:text-white hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                                  role="button"
                              >
                                  Contact Us
                              </a>
                          </div>
                      </div>

                      <div className="mt-4 shrink-0 lg:px-4 lg:mt-0">
                          <img className="w-full max-w-sm origin-bottom scale-110" src="https://landingfoliocom.imgix.net/store/collection/saasui/images/cta/2/cta-2.png" alt="" />
                      </div>
                  </div>
              </div>
          </div>
      </section>
  )
}

export default About