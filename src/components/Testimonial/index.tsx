import { useState } from "react"
import { testimonials } from "../../data"
import Card from "../CardTestimonial"


function Testomonials() {
    const [currentIndex, setCurrentIndex] = useState(0)
    return (
        <div className="flex flex-col gap-10 relative w-full mb-52">
            <h2 className="text-3xl font-bold text-center">What they’ve said</h2>
            <div className="lg:flex hidden flex-col items-start gap-8">
                <div className="relative flex items-center">
                    <div id="slide" className="w-full h-full overflow-x-scroll scroll scrollbar whitespace-nowrap scroll-smooth">
                        {testimonials.map(({ id, fullname, desc, img }) => (
                            <Card key={id} fullname={fullname} desc={desc} img={img} />
                        ))}
                    </div>
                </div>
                <button className="bg-bgBright hover:shadow-xl mx-auto text-clLightGray font-bold px-8 py-3 rounded-full shadow-2xl mt-6 hover:bg-red-400 duration-300">Get Started</button>
            </div>
            <div className="lg:hidden flex flex-col gap-6 px-4">
                <div className="flex flex-col gap-4">
                    <Card fullname={testimonials[currentIndex].fullname} desc={testimonials[currentIndex].desc} img={testimonials[currentIndex].img}/>
                    <div className="flex justify-center gap-2">
                        {testimonials.map((_, i)=>(
                            <div key={i} onClick={()=> setCurrentIndex(i)}  className={`border ${currentIndex == i ? 'bg-red-color':''} cursor-pointer border-red-color h-3 w-3 rounded-full`}/>
                        ))}
                    </div>
                </div>
                <button className="bg-bgBright hover:shadow-xl mx-auto text-clLightGray font-bold px-8 py-3 rounded-full shadow-2xl mt-6 hover:bg-red-400 duration-300">Get Started</button>
            </div>
        </div>
    )
}

export default Testomonials
