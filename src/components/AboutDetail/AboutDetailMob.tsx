import { TaboutDetail } from '../type'

function AboutDetailMob({ id, title, desc }: TaboutDetail) {
    return (
        <div className='flex lg:hidden flex-col gap-4'>
            <div className='flex items-center gap-4 ml-4 lg:ml-0 bg-bgPalered lg:bg-transparent'>
                <span className='bg-bgBright px-6 py-2 rounded-full font-semibold text-clLightGray'>0{id}</span>
                <h3 className='text-clDarkBlue font-bold text-[1rem]'>{title}</h3>
            </div>
            <p className='px-4 lg:px-0 font-semibold text-clGrayish text-[.9rem]'>
                {desc}
            </p>
        </div>
    )
}

export default AboutDetailMob
