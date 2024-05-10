import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/bundle';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';

const Slider = () => {
    return (
        <div className='max-h-[600px] container mx-auto'>
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
                        <img src="https://i.ibb.co/ygZmrFz/s222.jpg" alt="Your Image" className="w-full max-h-[550px]" />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className='lg:w-3/4 w-5/6' >
                                <p className=" text-yellow-600 lg:text-6xl md:text-4xl text-2xl font-extrabold flex justify-center items-center mb-4"> Portrait Drawing</p>
                                <p className='text-center text-white font-bold lg:text-xl flex justify-center items-center mb-4'>Drawing a portrait involves capturing the likeness, character, and essence of a person's face through artistic expression. </p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative">
                        <img src="https://i.ibb.co/6ZCxKYY/s111.jpg" alt="Your Image" className="w-full max-h-[550px]" />
                        <div className="absolute inset-0 flex items-center justify-center">
                            {/* text-[#1DD100] */}
                            <div className='lg:w-3/4 w-5/6'>
                                <p className=" text-cyan-600 lg:text-6xl md:text-4xl text-2xl font-extrabold flex justify-center items-center mb-4">Craft Landscape</p>
                                <p className='text-center text-white font-bold lg:text-xl flex justify-center items-center mb-4'>Picture a serene landscape, where nature's brushstrokes paint a masterpiece of tranquility. Rolling hills stretch out like the waves of an endless sea.</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>



                <SwiperSlide>
                    <div className="relative">
                        <img src="https://i.ibb.co/KWydTVw/s333.jpg" alt="Your Image" className="w-full max-h-[550px]" />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className='lg:w-3/4 w-5/6'>
                                <p className=" text-yellow-600 lg:text-6xl md:text-4xl text-2xl font-extrabold flex justify-center items-center mb-4">  Water-colour Painting</p>
                                <p className='text-center text-white font-bold lg:text-xl flex justify-center items-center mb-4'>Watercolor painting is a versatile and expressive medium that involves using pigments suspended in a water-based solution to create art</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="relative">
                        <img src="https://i.ibb.co/ygZmrFz/s222.jpg" alt="Your Image" className="w-full max-h-[550px]" />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className='lg:w-3/4 w-5/6 '>
                                <p className=" text-cyan-600 lg:text-6xl md:text-4xl text-2xl font-extrabold flex justify-center items-center mb-4"> Cartoon Drawing</p>
                                <p className='text-center text-white font-bold lg:text-xl flex justify-center items-center mb-4'>Creating cartoon drawings involves simplifying complex subjects into exaggerated and often humorous representations. </p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Slider;