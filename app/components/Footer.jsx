import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = ({isDarkMode}) => {
  return (
    <div className='mt-20'>
        <div className='text-center'>
            <Image src={isDarkMode?assets.logo_dark :assets.logo} alt=''className='w-36 mx-auto mb-2'/>
            <div className='flex w-max items-center gap-2 mx-auto'>
                 <Image src={isDarkMode? assets.mail_icon_dark : assets.mail_icon} alt=''className='w-6'/>
                 lester05delrosario@gmail.com
            </div>

            </div>

            <div className='text-center sm:flex items-center justify-between border-t
            border-gray-400 mx-[10%] mt-12 py-6'>
                <p>© Lester Del Rosario. All rights reserved.</p>
                <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
                    <li><a target='_blank' href="https://github.com/Lester1105">Github</a></li>
                    <li><a target='_blank' href="https://www.linkedin.com/in/lester-del-rosario-a83846a5/">LinkedIn</a></li>
                    <li><a target='_blank' href="https://www.facebook.com/lester.delrosario.94/">Facebook</a></li>
                </ul>
            </div>
    </div>
  )
}

export default Footer