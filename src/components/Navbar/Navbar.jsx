import 'react'
import Logo from '../../assets/logo.png'
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from 'react-icons/fa6';
import  { FaCaretDown } from 'react-icons/fa6';

const Menu = [
  {
    id:1,
    name: "Home",
    link: "#"
  },
  {
    id:2,
    name: "Games",
    link: "/#games"
  },
  {
    id:3,
    name: "Gaming Laptops",
    link: "/#laptops"
  },
  {
    id:4,
    name: "Game Consoles",
    link: "/#consoles"
  },
  {
    id:5,
    name: "Accessories",
    link: "/#accessories"
  }
]
const DropDownLinks = [
  {
    id:1,
    name: "Who is Electro Gaming?",
    link: "#about"
  },
  {
    id:2,
    name: "Contact Us",
    link: "#contact"
  }
]

const Navbar = () => {
  return (
    <div className="shadow-md bg-gray-800">
      {/* upper Navbar */}
      <div className="bg-gray-800 py-0">
        <div className="container flex justify-between items-center">
          <div className="text-slate-100">
            <a href="#" className="font-bold text-2xl sm:text-3xl flex gap-2 items-center">
              <img src={Logo} alt="Logo" 
                className="w-16 sm:w-20 lg:w-24 uppercase"
              />
              Electro Gaming
            </a>
          </div>
          {/* Search bar and order button */}
          <div className='flex justify-between items-center gap-4'>
            {/* Search bar */}
            <div className="relative group hidden sm:block">
              <input 
                type="text" 
                placeholder="Search" 
                className="w-[200px] sm:w-[200px] 
                  group-hover:w-[300px] transition-all 
                  duration-300 rounded-full border
                  border-gray-300 px-2 py-1 
                  focus:outline-none focus:border-1 
                  focus:border-primary"
              />
              <IoMdSearch className="text-gray-500 group-hover:text-gray-800 absolute top-1/2 -translate-y-1/2 right-3" />
            </div>
            {/* order button */}
            <button 
              onClick={() => alert("Ordering not availbe yet")}
              className="bg-gradient-to-r from-gray-500 to-gray-700 transition-all duration-200 
              text-slate-200 py-1 px-4 rounded-full flex
              items-center gap-3 group"
            >
              <span className="group-hover:block hidden transition-all duration-200">
                Order
              </span>
              <FaCartShopping className="text-xl text-slate-200 drop-shadow-sm cursor-pointer">

              </FaCartShopping>
            </button>
          </div>
        </div>
      </div>
      {/* lower Navbar */}
      <div className='flex justify-center bg-slate-200 text-slate-400'>
        <ul className='sm:flex hidden items-center '>
          {
            Menu.map((data) => (
              <li key={data.id}>
                <a href={data.link}
                className="inline-block px-6 hover:text-slate-900 font-bold duration-200">{data.name}</a>
              </li>
            ))
          }
          {/* Simple Dropdown Links */}
          <li className='group relative cursor-pointer'>
            <a href="#" className='flex items-center gap-[2px] px-6 py-2 font-bold group-hover:text-slate-900'>
              About Us
              <span>
                <FaCaretDown className='transition-all duration-200 group-hover:rotate-180'/>
              </span>
            </a>
            <div className='absolute z-[9999] hidden group-hover:block w-[190px] rounded-md 
              bg-slate-100 p-2 text-slate-500 shadow-md'>
              <ul>
                {DropDownLinks.map((data) => (
                  <li key={data.id}>
                    <a href={data.link}
                      className='inline-block w-full rounded-md p-2 hover:text-slate-900' 
                    >{data.name}</a>
                  </li>
                ))
                }
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
