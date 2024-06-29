import { useRef, useState } from 'react';
import mylogo from '../../assets/mylogo.jpg';
import Mobile from './Mobile';
import useOnClickOutside from '../../hooks/useOnClickOutside';
import Button from './Button';

const links = [
  { id: 1, title: 'Home', target: 'home' },
  { id: 2, title: 'Skills', target: 'skills' },
  { id: 3, title: 'Projects', target: 'projects' },
  { id: 4, title: 'Contact', target: 'contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);
  useOnClickOutside(ref, () => setIsOpen(false));

  const handleLinkClick = (target) => {
    const element = document.getElementById(target);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false); // Close the mobile menu if open
  };

  return (
    <div className='fixed md:fixed flex lg:relative bg-richblack-900 w-screen border-b-[1px] border-richblack-500 z-50 h-16 px-4 items-center justify-center'>
      <div className='flex w-11/12 max-w-maxContent items-center justify-between mx-4'>
        <a href="/" className='object-contain w-[160px] h-[50px] min-h-[20px]'>
          <img src={mylogo} alt='mylogo' />
        </a>

        {/* Links */}
        <div className="flex justify-between items-center gap-4">
          <ul className='hidden md:flex'>
            {links.map(link => (
              <li key={link.id}
                className='px-4 cursor-pointer capitalize text-richblack-200 text-xl font-normal hover:scale-105 duration-200 first-letter hover:text-transparent bg-clip-text bg-gradient-to-r from-[#ade3fd] via-[#c199ff] to-[#e698c3]'
                onClick={() => handleLinkClick(link.target)}>
                {link.title}
              </li>
            ))}
          </ul>

          {/* Resume button */}
          <div className='hidden md:flex'>
            <Button />
          </div>
        </div>

        {/* Mobile navbar */}
        <nav className={`inline-block lg:hidden md:hidden `} ref={ref}>
          <Mobile
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            handleLinkClick={handleLinkClick}
            links={links}
          />
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
