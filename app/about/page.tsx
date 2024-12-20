import { TextFade } from '@/components/UI/TextFadeUp'
import Image from 'next/image'
import Link from 'next/link'
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa'

const About = () => {
    return (
        <>
            <div className="relative h-full max-w-full bg-gray-100">
                {/* Background Image */}
                <Image
                    loading='lazy'
                    className="object-cover h-64 w-full"
                    alt="About Us Background"
                    src="https://images.pexels.com/photos/245208/pexels-photo-245208.jpeg?auto=compress&cs=tinysrgb&w=600"
                    height={100}
                    width={100}
                />

                {/* Overlay */}
                <div className="absolute inset-0 h-64 w-full bg-black/50"></div>
                {/* Content */}
                <div className="absolute inset-0 flex  h-64 w-full flex-col items-center justify-center text-white">
                    {/* Breadcrumbs */}
                    <div className="flex">
                        <Link href='/' className="text-xs md:text-base tracking-wide mb-3">Home&nbsp;</Link>/
                        <Link href='/about' className="text-xs md:text-base tracking-wide mb-2"> &nbsp;About Us</Link>
                    </div>

                    {/* Title */}
                    <TextFade direction='up'>
                        <h1 className="text-4xl md:text-5xl font-bold">ABOUT US</h1>
                    </TextFade>
                </div>

                <div className="relative flex-col  py-8 mx-32 mb-4">
                        <p className=" text-black text-justify">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores, amet facere. Rem quam repellat nisi! Quaerat qui, nemo odit iste natus sunt vero, accusantium itaque vitae nostrum placeat quibusdam rerum.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores, amet facere. Rem quam repellat nisi! Quaerat qui, nemo odit iste natus sunt vero, accusantium itaque vitae nostrum placeat quibusdam rerum.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores, amet facere. </p>
                     <div className="flex justify-between mt-6 ">
                        <div className="md:flex flex-col hidden">
                            <p className='text-[70px] text-[#51B7AE]  font-extrabold'>Authentic</p>
                            <p className='text-4xl text-[#51B7AE] font-bold -mb-4'>&nbsp;and</p>
                            <p className='text-[100px] text-[#51B7AE] font-extrabold'>Asthetic</p>
                            <FaQuoteLeft className='text-gray-500' size={30} />
                            <p className='text-gray-700 w-96 '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa provident deleniti deserunt, facilis quo quod minus blanditiis tempore facilis quo quod minus blanditiis tempore facilis quo quod minus blanditiis tempore
                                <FaQuoteRight className='text-gray-500 ' size={30} /></p>
                        </div>
                        <div className="">
                            <Image
                                loading='lazy' alt='' src='https://images.pexels.com/photos/245208/pexels-photo-245208.jpeg?auto=compress&cs=tinysrgb&w=600' height={600} width={600}></Image>
                        </div>
                    </div>
                    <div className="flex justify-between mt-6">
                        <div className="">
                            <Image
                                loading='lazy' alt='' src='https://plus.unsplash.com/premium_photo-1711044545225-bbf7c88571e9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGNvdXBsZSUyMG9sZHxlbnwwfHwwfHx8MA%3D%3D' height={700} width={700}></Image>
                        </div>
                        <div className="md:flex flex-col hidden justify-center">
                            <FaQuoteLeft className='text-gray-500' size={30} />
                            <p className='text-gray-700 w-96 my-4 '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa provident deleniti deserunt, facilis quo quod minus blanditiis tempore facilis quo quod minus blanditiis tempore facilis quo quod minus blanditiis tempore Ipsa provident deleniti deserunt, facilis quo quod minus blanditiis tempore facilis quo quod minus blanditiis tempore facilis quo quod minus blanditiis tempore
                            </p>
                            <FaQuoteRight className='text-gray-500 ' size={30} />
                        </div>
                    </div>
                    <div className="flex justify-between mt-6">
                        <div className="md:flex flex-col hidden justify-center">
                            <p className='text-gray-700 w-full text-justify'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa provident deleniti deserunt, facilis quo quod minus blanditiis tempore facilis quo quod minus blanditiis tempore facilis quo quod minus blanditiis temporeLorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa provident deleniti deserunt, facilis quo quod minus blanditiis tempore facilis quo quod minus blanditiis tempore facilis quo quod minus blanditiis temporeLorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa provident deleniti deserunt, facilis quo quod minus blanditiis tempore facilis quo quod minus blanditiis tempore facilis quo quod minus blanditiis tempore
                            </p>
                            <p className='text-gray-700 w-full text-justify'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa provident deleniti deserunt, facilis quo quod minus blanditiis tempore facilis quo quod minus blanditiis tempore facilis quo quod minus blanditiis temporeLorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa provident deleniti deserunt, facilis quo quod minus blanditiis tempore facilis quo quod minus blanditiis tempore facilis quo quod minus blanditiis temporeLorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa provident deleniti deserunt, facilis quo quod minus blanditiis tempore facilis quo quod minus blanditiis tempore facilis quo quod minus blanditiis tempore
                            </p>
                        </div>

                    </div>
                    <div className="flex flex-col justify-center items-center w-full mt-6">
                        <div className="">
                            <Image
                                loading='lazy' alt='' src='https://images.unsplash.com/photo-1533686309771-f00107cf6004?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' height={700} width={700}></Image>
                        </div>
                        <div className="md:flex flex-col hidden justify-center">
                            <FaQuoteLeft className='text-gray-500' size={30} />
                            <p className='text-gray-700 w-full my-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa provident deleniti deserunt, facilis quo quod minus blanditiis tempore facilis quo quod minus blanditiis tempore facilis quo quod minus blanditiis tempore Ipsa provident deleniti deserunt, facilis quo quod minus blanditiis tempore facilis quo quod minus blanditiis tempore facilis quo quod minus blanditiis tempore
                            </p>
                            <FaQuoteRight className='text-gray-500 ' size={30} />
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default About
