import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom'

import {styles} from '../styles'
import {navLinks} from '../constants'
import {logo, menu, close} from '../assets'

const Navbar = () => {
  const [active, setActive] =useState('')
  const [toggle, setToggle] = useState(false)
  return (
    <nav className={`${styles.paddingX} w-full items-center py-5 fixed top-0 z-20 bg-primary `}> 
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link to='/'
         className='flex items-center gap-2'
         onClick={()=> {
          setActive('');
          window.screenTop(0,0)
         }}
         >
      {/* <img src={logo} alt="logo" className='w-9 h-9 object-contain' /> */}
      <p className='text-white text-[18px] font-bold cursor-pointer flex'><span></span> &nbsp;
       <span className='sm:block hidden'>| Bashir-dev</span></p>
        </Link>
        <ul className='list-none hidden sm:flex flex-row gap-10'>
           {navLinks?.map((link)=>(
             <li onClick={()=> setActive(link.title)} key={link.id}
             className={`${active === link.title ? "text-white" : "text-secondary"} hover:text-white text-[18px] font-medium cursor-pointer`}
             >
              <a href={`#${link.id}`}>{link.title}</a>
             </li>
           ))}
        </ul>

        {/* for mobile device  */}
          
          <div className='sm:hidden flex flex-1 justify-end items-center '>
             <img src={toggle ? close : menu} alt="menu" srcset="" 
              className='w-[28px] h-[28px] object-contain cursor-pointer'
              onClick={()=>  setToggle(!toggle)}
             />
           
           <div className={`${!toggle  ? 'hidden' : 'flex'} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
              <ul className='list-none flex justify-end items-start flex-col gap-4 transition-all'>
               {navLinks?.map((link)=>(
                 <li onClick={()=> {
                  setToggle(!toggle)
                  setActive(link.title)
                 }} key={link.id}
                   className={`${active === link.title ? "text-white" : "text-secondary"} hover:text-white font-poppins text-[16px] font-medium cursor-pointer`}
                 >
                  <a href={`#${link.id}`}>{link.title}</a>
                 </li>
               ))}
             </ul>
           </div>

          </div>

        {/* for mobile device end */}

      </div>
    </nav>
  );
};
// 38 min watch

export default Navbar;