import React from 'react'

const Contact = () => {
    return (
        <div className="py-12 bg-gray-50 sm:py-16 lg:py-20 xl:py-24">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-12 lg:gap-x-16 xl:gap-x-36">
                    <div className="flex flex-col self-stretch justify-between">
                        <div className="flex-1">
                            <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">Contact Us</h2>
                            <p className="mt-4 text-base font-normal leading-7 text-gray-600 lg:text-lg lg:mt-6 lg:leading-8">Clarity gives you the blocks & components you need to create a truly professional website.</p>


                            <div className="grid grid-cols-1  mt-12 lg:mt-8 gap-10 sm:grid-cols-2 ">
                                <div>
                                    <h3 className="text-xs font-medium tracking-widest text-[#3f47af] uppercase">USA OFFICE Hours</h3>
                                    <p className="mt-5 text-base font-medium text-gray-900">
                                        Monday-Friday<br />
                                        8:00 am to 5:00 pm
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-xs font-medium tracking-widest text-[#292e76] uppercase">Our Address</h3>
                                    <p className="mt-5 text-base font-medium text-gray-900">8502 Preston Rd. Ingle, <br />Maine 98380, USA</p>
                                </div>

                                <div>
                                    <h3 className="text-xs font-medium tracking-widest text-[#292e76] uppercase">Canada Office Hours</h3>
                                    <p className="mt-5 text-base font-medium text-gray-900">8502 Preston Rd. Ingle, <br />Maine 98380, USA</p>
                                </div>

                                <div>
                                    <h3 className="text-xs font-medium tracking-widest text-[#292e76] uppercase">Get In Touch</h3>
                                    <p className="mt-5 text-base font-medium text-gray-900">
                                        +1-246-888-0653<br />
                                        +1-222-632-0194
                                    </p>
                                </div>
                                </div>
                        </div>
                    </div>

                    <div className="bg-white shadow-xl rounded-2xl">
                        <div className="p-6 sm:p-10">
                            <form action="#" method="POST" className="space-y-6">
                                <div>
                                    <label htmlFor="fullName" className="text-base font-medium text-gray-900"> Your name </label>
                                    <div className="mt-2">
                                        <input type="text" name="fullName" id="fullName" placeholder="Enter your full name" className="block w-full px-4 py-4 text-base text-gray-900 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-[#292e76] focus:ring-1 focus:ring-[#292e76]" />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="phone" className="text-base font-medium text-gray-900"> Phone Number</label>
                                    <div className="mt-2">
                                        <input type="text" name="phone" id="phone" placeholder="Enter your phone number" className="block w-full px-4 py-4 text-base text-gray-900 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-[#292e76] focus:ring-1 focus:ring-[#292e76]" />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="email" className="text-base font-medium text-gray-900"> Email address </label>
                                    <div className="mt-2">
                                        <input type="email" name="email" id="email" placeholder="Enter your email" className="block w-full px-4 py-4 text-base text-gray-900 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-[#292e76] focus:ring-1 focus:ring-[#292e76]" />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="message" className="text-base font-medium text-gray-900"> Write your message </label>
                                    <div className="mt-2">
                                        <textarea
                                            name="email"
                                            id="email"
                                            placeholder="Write us your question here..."
                                            className="block w-full px-4 py-4 text-base text-gray-900 bg-white border border-gray-200 resize-y rounded-xl focus:outline-none focus:border-[#292e76] focus:ring-1 focus:ring-[#292e76]"
                                        ></textarea>
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    className="inline-flex items-center justify-center px-12 py-4 text-base font-medium text-white transition-all duration-200 bg-[#292e76] border border-transparent rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-700"
                                >
                                    Send message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact