import { TaboutDetail } from "../type"

function AboutDetail({ title, desc, id }: TaboutDetail) {
  return (
    <div className='lg:grid hidden grid-cols-6 items-start gap-8'>
      <span className='bg-bgBright col-span-1 px-8 py-3 rounded-full text-lg text-center font-semibold text-clLightGray'>0{id}</span>
      <div className='col-span-5 flex flex-col gap-2 pt-3'>
        <h3 className='text-clDarkBlue font-bold text-xl'>{title}</h3>
        <p className='px-4 lg:px-0 font-medium text-clGrayish text-lg'>
          {desc}
        </p>
      </div>
    </div>
  )
}

export default AboutDetail
