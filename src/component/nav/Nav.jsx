import React from 'react';
import {CiUser,CiSearch} from 'react-icons/ci'

const Nav = () => {
  return (
    <div className='flex w-full justify-between p-6 sticky top-0 backdrop-blur-md'>
      <div className='text-2xl font-semibold'>Emojify</div>
      <div className='flex items-center gap-12'>
        <div>Top</div>
        <div>Your List</div>
        <div>
          <form className='flex items-center'>
          <input className='border border-r-0 outline-none px-3 p-1 border-black rounded-l-md' type="text" name="search" id="search" placeholder='Search' />
          <button className='border border-l-0 px-3 p-1 rounded-r-md border-black'><CiSearch size={24}/></button>
          </form>
          </div>
      </div>
      <div className='bg-gray-400/50 rounded-full p-2 cursor-pointer'>
        <CiUser size={24}/>
      </div>
    </div>
  );
};

export default Nav;