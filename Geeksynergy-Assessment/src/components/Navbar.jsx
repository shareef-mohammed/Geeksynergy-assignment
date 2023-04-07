import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Navbar = ({signup, login}) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const navigate = useNavigate()
  function logout() {
    localStorage.removeItem('data')
    navigate('/login')
  }
  return (
    <div className='fixed w-full h-16 bg-blue-300 top-0 flex justify-between items-center'>
      <p className='text-white text-xl font-semibold ml-10'>MovieList</p>        
      <div>
      <button onClick={toggleDropdown} className='mr-12 text-white text-lg font-medium' >Company Info</button>
      {isOpen && (
        <div className='absolute top-16 right-4 border shadow-lg '>
          <ul className='mx-4 my-3'>
            <li className='pt-2 border-b'>
              <p className='font-medium'>Company: <span className='font-normal'>Geeksynergy Technologies Pvt Ltd</span></p>
            </li>
            <li className='pt-2 border-b'>
              <p className='font-medium'>Address: <span className='font-normal'>Sanjayanagar, Bengaluru-56</span></p>
            </li>
            <li className='pt-2 border-b'>
              <p className='font-medium'>phone: <span className='font-normal'>xxxxxxxxx09</span></p>
            </li>
            <li className='pt-2 border-b'>
              <p className='font-medium'>Email: <span className='font-normal'>xxxxxx@gamil.com</span></p>
            </li>
          </ul>
        </div>
      )}
      {!signup && !login &&<button className='mr-12 text-white text-lg font-medium' onClick={logout}>Logout</button>}
    </div>

    </div>
  )
}

export default Navbar