import Nav from '@/component/shared/nav/Nav';
import ListCard from '@/component/yourList/listCard/ListCard';
import React from 'react';
import {FiFilter} from 'react-icons/fi'

const page = () => {
  return (
    <div className="h-screen w-full overflow-hidden">
      <Nav />
      <div className='py-24 px-6 flex flex-col gap-12 items-center h-full overflow-auto'>
        <form className='flex gap-6'>
        <select className='p-2 text-lg font-normal rounded-lg' name="categories" id="categories">
          <option value="all">All</option>
          <option value="all">Movies</option>
          <option value="all">Anime</option>
          <option value="all">TV Show</option>
        </select>
        <button className='flex items-center gap-4 p-2 bg-sky-300 rounded-lg'><span>Filter</span> <FiFilter/></button>
        </form>
        <div className='w-full flex flex-col gap-6'>
          <h3 className='text-lg font-medium bg-sky-300/50 p-2 rounded-lg flex justify-between'><span>Anime</span><span>70</span></h3>
          <div className='flex flex-col gap-6 w-full'>
            <ListCard/>
            <ListCard/>
            <ListCard/>
            <ListCard/>
            <ListCard/>
            <ListCard/>
            <ListCard/>
            <ListCard/>
            <ListCard/>
            <ListCard/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;