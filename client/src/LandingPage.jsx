import react from 'react'
import mainImg from './assets/Data-extraction.png'
function LandingPage() {

    return(

        <>
        <nav>
            <div className='flex items-center justify-between p-4 border-b-2 border-gray-300 shadow-md'>
                <div className="text-2xl md:text-4xl font-bold text-[#2681B2FF]">Interview AI</div>
                <div className="flex gap-4 items-center">
                    <div><button className="bg-[#2681B2FF] text-white py-2 px-4 rounded-md text-sm md:text-lg">Login</button></div>
                    <div><button className="bg-[#2681B2FF] text-white py-2 px-4 rounded-md text-sm md:text-lg">Sign Up</button></div>
                </div>

            </div>
        </nav>

        <section>

            <div className="md:flex md:gap-8 md:items-center md:justify-center p-8">

                <div className='w-full md:w-[40%]'><img src={mainImg} alt="Main Image" className='w-full h-auto' /></div>
                <div>
                    <div className="text-xl md:text-6xl font-bold text-gray-800">AI Interview Prep Made Easy</div>
                    <div className="p-1  mt-8 bg-gray-300"></div>
                    <div className="mt-2 md:mt-8 text-center"><button className="cursor-pointer bg-[#2681B2FF] md:w-[400px] md:text-2xl text-white py-2 px-4 rounded-md text-sm ">Start Your Preparation</button></div>
                </div>
            </div>
        </section>
        </>
    )

}

export default LandingPage;

