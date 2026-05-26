import react from 'react'
import mainImg from './assets/Data-extraction.png';
import document from './assets/document.png';
import interview from './assets/interview.png';
import recruitment from './assets/recruitment.png';

function LandingPage() {

    return(

        <>
        <nav>
            <div className='flex items-center justify-between p-4 border-b-2 border-gray-300 shadow-md'>
                <div className="text-2xl md:text-4xl font-bold text-[#2681B2FF]">Interview AI</div>
                <div className="flex gap-4 items-center">
                    <div><button className="bg-[#2681B2FF] text-white py-2 px-4 rounded-md text-sm md:text-lg cursor-pointer">Login</button></div>
                    <div><button className="bg-[#2681B2FF] text-white py-2 px-4 rounded-md text-sm md:text-lg cursor-pointer    ">Sign Up</button></div>
                </div>

            </div>
        </nav>

        <section>

            <div className="md:flex md:gap-8 md:items-center md:justify-center p-8 h-[500px] bg-[#eaeaea]">

                <div className='w-full md:w-[40%]'><img src={mainImg} alt="Main Image" className='w-full h-auto' /></div>
                <div>
                    <div className="text-xl text-center md:text-6xl font-bold text-gray-800">AI Interview Prep Made Easy</div>
                    <div className="p-[3px] md:p-1  mt-8 bg-gray-300"></div>
                    <div className="mt-2 md:mt-8 text-center"><button className="cursor-pointer bg-[#2681B2FF] md:w-[400px] md:text-2xl text-white py-2 px-4 rounded-md text-sm mt-2">Start Your Preparation</button></div>
                </div>
            </div>

            <div className="flex gap-4 md:gap-8 items-center justify-center p-8">
                <div className="p-[1px] md:p-[3px] w-[25%] md:w-[33%] bg-gray-300"></div>
                <div className="text-xl md:text-4xl font-bold text-gray-800">Our Features</div>
                <div className="p-[1px] md:p-[3px] w-[25%] md:w-[33%] bg-gray-300"></div>
            </div>

            <div className="flex items-center justify-around mt-8">
                <div className="text-center"><img src={document} alt="Document" className='w-[50px] md:w-[100px] h-[50px] md:h-[100px] mx-auto ' /><span className="text-sm md:text-lg text-bold text-gray-800 mt-2">Resume Analysis</span></div>
                <div className="text-center"><img src={interview} alt="Interview" className='w-[50px] md:w-[100px] h-[50px] md:h-[100px] mx-auto ' /><span className="text-sm md:text-lg text-bold text-gray-800 mt-2">Mock Interviews</span></div>
                <div className="text-center"><img src={recruitment} alt="Recruitment" className='w-[50px] md:w-[100px] h-[50px] md:h-[100px] mx-auto ' /><span className="text-sm md:text-lg text-bold text-gray-800 mt-2">Job Matching</span></div>
            </div>

            <div className="bg-[#eaeaea] p-8 mt-12">
            <div className="flex gap-4 md:gap-8 items-center justify-center ">
                <div className="p-[1px] md:p-[3px] w-[20%] md:w-[33%] bg-gray-300"></div>
                <div className="text-xl md:text-4xl font-bold text-gray-800">How It Works</div>
                <div className="p-[1px] md:p-[3px] w-[20%] md:w-[33%] bg-gray-300"></div>
            </div>

            <div className="md:flex items-center justify-center gap-16 mt-4 md:mt-12">

                <div className="flex items-center text-bold gap-2 text-sm md:text-lg md:p-0 p-2"><span className="bg-[#2681B2FF] text-white rounded-full md:w-8 md:h-8 w-6 h-6 flex items-center justify-center">1</span> Upload Your Resume</div>
                <div className="flex items-center text-bold gap-2 text-sm md:text-lg  md:p-0 p-2"><span className="bg-[#2681B2FF] text-white rounded-full md:w-8 md:h-8 w-6 h-6 flex items-center justify-center">2</span> Practice Mock Interviews</div>
                <div className="flex items-center text-bold gap-2 text-sm md:text-lg md:p-0 p-2   "><span className="bg-[#2681B2FF] text-white rounded-full md:w-8 md:h-8 w-6 h-6 flex items-center justify-center">3</span> Get Job Recommendations</div>

            </div>
            </div>

        </section> 
        </>
    )

}

export default LandingPage;

