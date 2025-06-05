import { ArrowRightCircleIcon } from '@heroicons/react/24/solid'
import { ComputerDesktopIcon } from '@heroicons/react/24/outline'
import { ServerIcon } from '@heroicons/react/24/outline'
import { DevicePhoneMobileIcon } from '@heroicons/react/24/outline'
import { TypeAnimation } from 'react-type-animation'

export default function () {
    return(
        <div id="about" className="max-w-2xl px-4 md:px-0 mx-auto justify-center flex flex-col">
            <div className="my-4">
                <p className="">Hi, my name is</p>
            </div>
            <div className=" mb-4">
                <p className="text-white text-5xl">PHAM CHI THAT.</p>
            </div>
            <div className="mb-4">
                <TypeAnimation
                    className='text-white/80 text-5xl cursor-pointer'
                    sequence={['Welcome to my web portfolio.',1000,'',500]} 
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                />
            </div>
            <div className=" mb-4">
                <p className="text-white/60 text-sm">I’m a third-year Software Engineering student at Can Tho University of Technology (CTUT), with a strong interest in web development. I’m focusing on ReactJS for frontend and Laravel for backend, aiming to become a full-stack developer passionate about building modern, responsive web applications.</p>
            </div>
            <div className='my-6'>
                <button className="border-2 p-2 rounded flex items-center resume-button cursor-pointer">         
                Check my résume
                <ArrowRightCircleIcon className='h-5 w-5 ml-2'/>
                </button>
            </div>
            <div className='flex items-center justify-between text-white/80'>
                <ComputerDesktopIcon className='w-20 h-20' strokeWidth={0.6}/>
                <div className='animate-pulse w-20 sm:w-50 h-[2px] bg-white'></div>
                <DevicePhoneMobileIcon className='w-20 h-20' strokeWidth={0.6}/>
                <div className='animate-pulse w-20 sm:w-50 h-[2px] bg-white'></div>
                <ServerIcon className='w-20 h-20' strokeWidth={0.6}/>
            </div>
            <div className='flex justify-between'>
                <p className='font-bold text-xs md:text-sm'>Web development</p>
                <p className='font-bold text-xs md:text-sm'>App development</p>
                <p className='font-bold text-xs md:text-sm'>Server management</p>
            </div>
        </div>
    )
    
}