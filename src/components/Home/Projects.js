import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { Autoplay, FreeMode, Pagination } from 'swiper/modules';
import { projects } from '../../data/projects ';
import { FaAngleRight } from "react-icons/fa";

const Projects = () => {
  return (
    <div className='py-2 px-3'>
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
        freeMode={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[FreeMode, Autoplay]}
        className='w-full'
      >
        {projects.map(project => (
          <SwiperSlide key={project.id}>
            <Card className="w-full max-w-sm rounded-lg overflow-hidden shadow-lg border-[1px] border-richblack-300 ">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-48 object-cover "
              />
              <CardContent className="p-6 space-y-4 bg-richblack-800">
                <div>
                  <CardTitle className="text-xl font-semibold">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {project.description}
                  </CardDescription>
                </div>
                <Link
                  href={project.link}
                  className="inline-flex h-9 items-center bg-richblack-600 justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-richblack-5 border-[1px] border-richblack-200  shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  prefetch={false}
                >
                  View Project <FaAngleRight className='text-richblack-5' size={20}/>
                </Link>
              </CardContent>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

const Card = ({ children, className }) => (
  <div className={className}>
    {children}
  </div>
);

const CardContent = ({ children, className }) => (
  <div className={className}>
    {children}
  </div>
);

const CardTitle = ({ children, className }) => (
  <h3 className={className}>
    {children}
  </h3>
);

const CardDescription = ({ children, className }) => (
  <p className={className}>
    {children}
  </p>
);

const Link = ({ href, children, className, prefetch }) => (
  <a href={href} className={className}>
    {children}
  </a>
);


export default Projects