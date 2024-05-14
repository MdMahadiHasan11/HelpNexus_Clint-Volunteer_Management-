import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/bundle';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';

const Slider = () => {
    return (
        <div className='max-h-[600px]'>
            <Swiper
                navigation={true}
                pagination={
                    { clickable: true }
                }

                modules={[Navigation, Autoplay, Pagination]}
                // controller={{ control: controlledSwiper }}
                loop={true}
                autoplay={
                    { delay: 3000 }
                }
            >


                <SwiperSlide>
                    <div className="relative">
                        <img src="https://i.ibb.co/bPGTTBD/1708753498052.png" alt="Your Image" className="w-full max-h-[400px]" />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className='lg:w-3/4 w-5/6' >
                                <p className=" text-yellow-600 lg:text-6xl md:text-4xl text-2xl font-extrabold flex justify-center items-center mb-4"> React.js </p>
                                <p className='text-center text-white font-bold lg:text-xl flex justify-center items-center mb-4'>React.js is a popular JavaScript library for building user interfaces, particularly for single-page applications. </p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative">
                        <img src="https://i.ibb.co/QcB8N5Z/618fa90c201104b94458e1fb-64d4c62ef4a375d9ba140a1e-Behind-the-Scenes-of-High-Performing-React-Apps-An.jpg" alt="Your Image" className="w-full max-h-[400px]" />
                        <div className="absolute inset-0 flex items-center justify-center">
                            {/* text-[#1DD100] */}
                            <div className='lg:w-3/4 w-5/6'>
                                <p className=" text-yellow-600 lg:text-6xl md:text-4xl text-2xl font-extrabold flex justify-center items-center mb-4">Node.js</p>
                                <p className='text-center text-black font-bold lg:text-xl flex justify-center items-center mb-4'>Node.js is a powerful runtime environment that allows you to execute JavaScript code outside of a web browser.</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>



                <SwiperSlide>
                    <div className="relative">
                        <img src="https://i.ibb.co/TWdQkzH/which-development-job-is-right-for-you.jpg" alt="Your Image" className="w-full max-h-[400px]" />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className='lg:w-3/4 w-5/6'>
                                <p className=" text-yellow-600 lg:text-6xl md:text-4xl text-2xl font-extrabold flex justify-center items-center mb-4"> Express.js</p>
                                <p className='text-center text-white font-bold lg:text-xl flex justify-center items-center mb-4'>
                                    Express.js is a minimal and flexible Node.js web application framework that provides a robust set of features. </p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="relative">
                        <img src="https://i.ibb.co/s6gHF3w/mongodb-developers.jpg" alt="Your Image" className="w-full max-h-[400px]" />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className='lg:w-3/4 w-5/6 '>
                                <p className=" text-cyan-600 lg:text-6xl md:text-4xl text-2xl font-extrabold flex justify-center items-center mb-4"> MongoDB</p>
                                <p className='text-center text-black font-bold lg:text-xl flex justify-center items-center mb-4'> MongoDB stores data in flexible, JSON-like documents, which makes it easy to model and represent complex hierarchical relationships. </p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Slider;