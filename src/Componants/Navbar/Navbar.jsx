import React, { useState } from 'react';
// import Background_slider from './Background_slider';
import { IoMdMail } from "react-icons/io";
import { MdPermContactCalendar } from "react-icons/md";
import { IoMdTime } from "react-icons/io";
import { IoMenuOutline } from "react-icons/io5";
import { FaSquareWhatsapp } from "react-icons/fa6";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { createTheme } from '@mui/material/styles';
import {
  AiFillInstagram,
  AiFillFacebook,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";



function Navbar() {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [minimenu, setMinimenu] = useState(false)
  const handleminimenu = ()=>{
    setMinimenu(true)
  }
  const handleminimenus = ()=>{
    setMinimenu(false)
  }
  

  return (
    <div>
      <nav className='w-full h-32 bg-transparent flex flex-col max-[714px]:h-16'>
        <div className="navbar1 w-full h-16 bg-transparent md:flex hidden justify-around items-center border-b-2 rounded-b-md">
          <div className="office_info max-w-lg h-full bg-transparent flex justify-around items-center p-2 max-[714px]:hidden">
            <div className="mail text-white flex w-24 h-full flex-wrap items-center justify-center gap-1 m-6">
              <IoMdMail />
              <h4>Mail</h4>
              <p>jiya_ji@yahoo.com</p>
            </div>
            <div className="contact text-white flex w-24 h-full flex-wrap items-center justify-center gap-1 m-6">
              <MdPermContactCalendar />
              <h4>Contact</h4>
              <p>+919822069723</p>
            </div>
            <div className="office_time text-white flex w-52 h-full flex-wrap items-center justify-center gap-1 m-6">
              <IoMdTime />
              <h4>Office Time</h4>
              <p>9:00 AM - 7:00 PM</p>
            </div>
          </div>
          <div className="office_social max-w-md md:flex hidden gap-2">
            <AiFillInstagram className='w-10 h-10 fill-[#C13584]' />
            <AiFillFacebook className='w-10 h-10 fill-[#316FF6]' />
            <AiFillLinkedin className='w-10 h-10 fill-[#0072b1]' />
            <AiFillTwitterCircle className='w-10 h-10 fill-[#08a0e9]' />
            <FaSquareWhatsapp className='w-10 h-10 fill-[#075E54]' />
          </div>
        </div>
        <div className="navbar2 w-full h-16 bg-transparent flex items-center justify-end text-center">
          <div className="max-w-2xl h-full md:flex hidden md:mr-[150px]">
            <ul className='md:flex w-full h-full justify-center items-center text-[21px] font-serif text-orange-600 uppercase'>
              <li className='px-3'>
                <a href="">Home</a>
              </li>
              <li className='px-3'>
                <a href="">About</a>
              </li>
              <li className='px-3' id='services'> 
                <a href="">Services</a>
              </li>
              <ul className=' hidden flex-col top-32 md:right-[18rem] absolute z-10 p-7 rounded-lg gap-4'>
                      <li><a href=""> Constructions </a></li>
                      <li><a href=""> Consultancy</a></li>
                      <li><a href=""> Trunkey solutions </a></li>
                      <li><a href=""> Project Management </a></li>
                    </ul>
              <li className='px-3'>
                <a href="">Project</a>
              </li>
              <li className='px-3'>
                <a href="">contact</a>
              </li>
            </ul>
          </div>
          <div className="menuicon w-20 h-full md:hidden flex items-center transition ease-in-out delay-150 fill-white">
            <div>
              <IoMenuOutline onClick={handleClick} className='z-20 bg-transparent cursor-pointer menu w-20 h-9 text-white text-[40px]' id="basic-button" />
              <Menu anchorEl={anchorEl} open={open} onClose={handleClose} PaperProps={{ style:{backgroundColor: 'transparent', color: "orange", width: '400px', left: '0px', display: 'flex', justifyContent: 'center', textAlign: 'center' }}}>
                <MenuItem sx={{ fontSize: '20px', textTransform: 'uppercase' }} onClick={handleClose} href=''>Home</MenuItem>
                <MenuItem sx={{ fontSize: '20px', textTransform: 'uppercase' }} onClick={handleClose} href=''>About</MenuItem>
                <MenuItem sx={{ fontSize: '20px', textTransform: 'uppercase' }} onClick={handleClose} href=''>Services</MenuItem>
                <MenuItem sx={{ fontSize: '20px', textTransform: 'uppercase' }} onClick={handleClose} href=''>Project</MenuItem>
                <MenuItem sx={{ fontSize: '20px', textTransform: 'uppercase' }} onClick={handleClose} href=''>contact</MenuItem>
              </Menu>
            </div>
          </div>
        </div>
      </nav>
      {/* <Background_slider className='bg-red-800' /> */}
    </div>
  )
}

export default Navbar