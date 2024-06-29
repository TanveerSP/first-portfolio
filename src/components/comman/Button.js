import React from 'react'

const Button = () => {

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = process.env.PUBLIC_URL + '/TanveerResume.docx'; // Assuming the resume is in the public directory
        link.download = 'MyResume.pdf'; // This sets the filename for the downloaded file
        link.click();
    };

    return (
        <button
            onClick={handleDownload}
            className='relative w-[180px] text-center items-center rounded-lg py-3 px-8 text-richblack-900 font-semibold
                       bg-gradient-to-r from-[#ade3fd] via-[#c199ff] to-[#e698c3] hover:scale-105 duration-200'
        >
            <span className='mx-auto'>
                Hire Me
            </span>
        </button>
    )
}

export default Button