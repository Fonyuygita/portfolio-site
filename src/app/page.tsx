import HireMe from '@/components/HireMe'
import TransitionEffect from '@/components/Transition'
import Connect from '@/components/connect/Connect'
import Email from '@/components/email/Email'
import Intro from '@/components/intro/Intro'
import Mouse from '@/components/mouse/Mouse'
// import Summary from '@/components/summary/Summary'
import Image from 'next/image'

export default function Home() {
  return (
    <div className='home !mt-[8rem]'>
<TransitionEffect/>

      <Intro/>
      <Connect/>
      <Mouse/>
    
     
    </div>
  )
}
