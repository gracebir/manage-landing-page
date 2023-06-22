import { aboutData } from '../../data'
import AboutDetail from '../AboutDetail/AboutDetail'
import AboutDetailMobile from '../AboutDetail/AboutDetailMob'

function About() {
  return (
    <div className='py-8 relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:container lg:mx-auto lg:py-36'>
      <div className='flex z-10 flex-col gap-6 col-span-1 lg:gap-8 items-center lg:items-start px-8'>
        <h2 className='font-bold text-4xl lg:text-5xl text-center lg:text-start text-clDarkBlue'>What’s different about Manage?</h2>
        <p className='text-center lg:text-start text-clGrayish lg:text-xl'>Manage provides all the functionality your team needs, without
          the complexity. Our software is tailor-made for modern digital
          product teams.</p>
      </div>
      <div className='bg-bgHero bg-contain lg:block hidden bg-no-repeat absolute w-1/2 min-h-screen -left-[600px] -bottom-[600px]'/>
      <div className='flex flex-col col-span-1 gap-10'>
        {aboutData.map((item) => (
          <AboutDetail id={item.id} title={item.title} desc={item.desc} />
        ))}

        {aboutData.map((item) => (
          <AboutDetailMobile id={item.id} title={item.title} desc={item.desc} />
        ))}
      </div>
    </div>
  )
}

export default About
