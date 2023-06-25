import React from 'react';

const ContentSide = () => {
  return (
    <div className='h-full w-[500px] border-l p-6 flex flex-col gap-4 pt-28'>
      <div>
        <span className='font-semibold'>Release date: </span>
        <span>July 9, 1999</span>
      </div>
      <div>
        <span className='font-semibold'>Language: </span>
        <span>English</span>
      </div>
      <div>
        <span className='font-semibold'>Box office: </span>
        <span>$235.5 million</span>
      </div>
      <div>
        <span className='font-semibold'>Content Type: </span>
        <span>Movie</span>
      </div>
      <div>
        <span className='font-semibold'>Season: </span>
        <span>0</span>
      </div>
      <div className='pr-12'>
        <div className='text-3xl flex gap-6 items-center'>
          <div>🤮</div>
          <div className='h-[25px] w-full rounded-lg border border-black'>
            <div style={{width:`25%`}} className='bg-orange-400 h-full rounded-lg'></div>
          </div>
        </div>
        <div className='text-3xl flex gap-6 items-center'>
          <div>🙄</div>
          <div className='h-[25px] w-full rounded-lg border border-black'>
            <div style={{width:`5%`}} className='bg-orange-400 h-full rounded-lg'></div>
          </div>
        </div>
        <div className='text-3xl flex gap-6 items-center'>
          <div>😐</div>
          <div className='h-[25px] w-full rounded-lg border border-black'>
            <div style={{width:`50%`}} className='bg-orange-400 h-full rounded-lg'></div>
          </div>
        </div>
        <div className='text-3xl flex gap-6 items-center'>
          <div>🙂</div>
          <div className='h-[25px] w-full rounded-lg border border-black'>
            <div style={{width:`0%`}} className='bg-orange-400 h-full rounded-lg'></div>
          </div>
        </div>
        <div className='text-3xl flex gap-6 items-center'>
          <div>😃</div>
          <div className='h-[25px] w-full rounded-lg border border-black'>
            <div style={{width:`20%`}} className='bg-orange-400 h-full rounded-lg'></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentSide;