import React from 'react'
import './Headline.css'

const Headline = ({ headText, text }) => {
    const textStyle = {
        textShadow: '7px 1px 19px #F299AF',
    }

    return (
        <div className="flex items-center justify-center ">
            <div className="relative text-center">
                <h1 className="main-in text-[8vw] font-bold text-transparent uppercase bg-clip-text bg-gradient-to-r from-gray-700 to-gray-900">
                    {headText}
                </h1>
                <h2 style={textStyle} className="absolute -z-1 inset-0 flex items-center justify-center text-[2.5vw] tracking-[.30em] font-bold uppercase text-transparent bg-clip-text bg-gradient-to-r from-[#ade3fd] via-[#c199ff] to-[#e698c3]">
                    {text}
                </h2>
            </div>
        </div>
    )
}

export default Headline
