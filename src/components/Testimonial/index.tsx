import { useRef, useState } from "react"
import { testimonials } from "../../data"
import Card from "../CardTestimonial"


function Testomonials() {

    return (
        <div className="flex flex-col gap-10 relative w-full pb-3">
            <h2 className="text-3xl font-bold text-center">What they’ve said</h2>
            <div className="flex flex-col items-start gap-8">
                <div className="relative flex items-center">
                    <div id="slide" className="w-full h-full overflow-x-scroll scroll scrollbar whitespace-nowrap scroll-smooth">
                        {testimonials.map(({ id, fullname, desc, img }) => (
                            <Card key={id} fullname={fullname} desc={desc} img={img} />
                        ))}
                    </div>
                </div>
                <button className="bg-bgBright mx-auto text-clLightGray font-bold px-8 py-3 rounded-full shadow-2xl mt-6 hover:bg-red-400 duration-300">Get Started</button>
            </div>
        </div>
    )
}

export default Testomonials
