import Link from 'next/link';
import React from 'react';

const ListCard = () => {
  return (
    <Link href={'/content'} className='flex items-center gap-12 bg-slate-200/50 rounded-lg'>
      <div style={{backgroundImage:`url(https://www.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/e58b1061aca9b7b9abee301049b47581.jpe)`}} className='w-[200px] h-[110px] bg-cover bg-center rounded-lg'></div>
      <div className='w-full flex justify-between items-center'>
        <div>
        <h3 className='font-semibold'>Rent a girlfriend</h3>
        <div className='flex items-center'><span className='text-2xl'>😐</span> <span>70%</span></div>
        </div>
        <div className='flex items-center gap-2'><span>You felt </span> <span className='text-2xl'>🙂</span></div>
      </div>
    </Link>
  );
};

export default ListCard;