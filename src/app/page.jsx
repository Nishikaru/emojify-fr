import CommingSoonCard from '@/component/commingSoon/commingSoonCard/CommingSoonCard'
import Nav from '@/component/nav/Nav'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <Nav/>
      <div className='py-24'>
        <div className='flex flex-col items-center'>
        <h3 className='text-3xl font-semibold'>Coming Soon</h3>
        </div> 
        <div className='flex flex-wrap gap-6 p-6'>
        <CommingSoonCard/>
        <CommingSoonCard/>
        </div>
      </div>
    </div>
  )
}
