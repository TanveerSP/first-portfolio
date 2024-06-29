import React, { useState } from 'react';


const Contact = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here, e.g., send data to server
        console.log(formData); // For demonstration, you can log the form data
        // You can also reset the form after submission if needed
        setFormData({
            firstName: '',
            lastName: '',
            email: '',
            message: ''
        });
    };

    return (
        <div className='container mx-auto my-4 p-4'>
            <form onSubmit={handleSubmit} className="max-w-lg mx-auto">

                <div className="flex w-full flex-row gap-7 mb-4">
                    {/* first name */}
                    <div className='flex flex-col w-full'>
                        <label htmlFor="name" className=" text-md font-medium text-richblack-300">First Name</label>
                        <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            value={formData.name}
                            onChange={handleChange}
                            className='w-full bg-richblack-900 h-[3rem] border-b-[2px] border-b-[#c199ff]  px-3 shadow-sm focus:outline-none '
                            required
                        />

                    </div>
                    {/* last name */}
                    <div className='flex flex-col w-full'>
                        <label htmlFor="name" className=" text-md font-medium text-richblack-300">Last Name</label>
                        <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            value={formData.name}
                            onChange={handleChange}
                            className='w-full bg-richblack-900 h-[3rem] border-b-[2px] border-b-[#c199ff]  px-3 shadow-sm focus:outline-none '
                            required
                        />
                    </div>
                </div>

                <div className='flex w-full flex-col gap-7'>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-md font-medium text-richblack-300">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                           className='w-full bg-richblack-900 h-[3rem] border-b-[2px] border-b-[#c199ff]  px-3 shadow-sm focus:outline-none '
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="message" className="block text-md font-medium text-richblack-300">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows={4}
                            className='min-w-[250px] min-h-[150px] w-full bg-richblack-900 h-[3rem] border-b-[2px] border-b-[#c199ff]  px-3 shadow-sm focus:outline-none '
                            required
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="inline-block bg-gradient-to-r from-[#ade3fd] via-[#c199ff] to-[#e698c3] hover:scale-105 duration-200 text-richblack-900 py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    )
};

export default Contact