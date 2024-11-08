import React from 'react'
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Container from '../container';
import Link from 'next/link';

const soicalLinks = [
  { 
    id:1,
    icon:<FaInstagram/>,
    link:"https://www.instagram.com/vijyapana"
  },
  { 
    id:2,
    icon:<FaLinkedin/>,
    link:"https://www.linkedin.com/in/vijyapana-advertisements-1b119832b/"
  },
  
]
function Index() {
  return (<Container>
    <footer className='flex flex-col md:flex-row mt-24 pt-12 border-t-2 cursor-pointer'>
        <div className='w-full md:w-1/2 text-2xl'>
        <p className='text-center mb-4 '>Social Links</p>
        <div className='flex justify-center gap-x-16'>
          {soicalLinks.map((soc)=>{return <Link key={soc.id} href={soc.link}>{soc.icon}</Link>})}
    
    </div>
    </div>
    <div className='flex justify-center items-center mt-8 text-center md:w-1/2  md:mt-0 text-xl'>
        <h1>Write to us at: vijyapana@gmail.com</h1>
    </div>
    </footer>
    <footer className='border-t-2 mt-14 py-2 pb-4 flex flex-col items-center justify-between'>
      <p className='mt-2 leading-1 tracking-tighter text-justify high text-gray-400 text-xs'>© 2024 Vijyapana. All Rights Reserved. This website and its content, including text, images, graphics, and designs, are the property of Vijyapana and are protected by copyright, trademark, and other intellectual property laws. Unauthorized use, reproduction, or distribution of this material is strictly prohibited and may result in legal action. For permissions and inquiries, please contact vijyapana@gmail.com.</p>
      <p className='font-bold tracking-wide text-gray-500 text-xl  mt-4 flex items-center mx-auto  text-center'>Made with <small><FaHeart className='mx-1.5 text-red-500 inline'/></small> in India</p>
      
    </footer>
    </Container>
  )
}

export default Index
