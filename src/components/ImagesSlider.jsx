import React from 'react'
import { useState } from 'react';
import {BsChevronCompactLeft, BsChevronCompactRight} from 'react-icons/bs'
import {RxDotFilled} from "react-icons/rx"
const ImagesSlider = () => {
    const slides = [
        {
        url:'https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        title:'food1',
        },
        {
            url: 'https://scontent.fkhh1-2.fna.fbcdn.net/v/t1.15752-9/325127364_6102426613141261_2623320917428198318_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=ae9488&_nc_ohc=7ssmtnuGR6gAX9XxoJj&_nc_ht=scontent.fkhh1-2.fna&oh=03_AdSK8R-J6uStkgOvceHevWr8y-bEfY-B3P2rcZRRGTWtNQ&oe=63E86A2F',
            title: 'food2',
        },
        {
            url: 'https://scontent.fkhh1-2.fna.fbcdn.net/v/t1.15752-9/322202182_702610024641038_7884976509129336618_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=ae9488&_nc_ohc=mGYw6MG8XDoAX_vQSGw&_nc_ht=scontent.fkhh1-2.fna&oh=03_AdTEA7lGyr-W3bD5Twwui6VdHvIZkW61vZ8D3msbvsye1w&oe=63E866FF',
            title: 'food3',
        },
        {
            url: 'https://images.pexels.com/photos/262959/pexels-photo-262959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            title: 'food4',
        },
    ];

    const [currentIndex, setCurrentIndex] =useState(0)

    const preSlide = () => {
        const isFirstSlide = currentIndex ===0;
        const newIndex = isFirstSlide ? slides.length -1 : currentIndex -1 ;
        setCurrentIndex(newIndex);
    };
    
    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1
        const newIndex = isLastSlide ? 0 :currentIndex + 1
        setCurrentIndex(newIndex)
    }

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex)
    }

    return (<div className='max-w-[1400px] h-[580px] w-full m-auto py-16 px-4 relative group'>
                <div className='w-full h-full rounded-2xl bg-center bg-cover duration-500'   
                    style={{backgroundImage:`url(${slides[currentIndex].url})`}}
                    ></div>
                {/* Left Arrow */}
        <div className='absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 group-hover:bg-black/20 text-white cursor-pointer'>
            <BsChevronCompactLeft onClick={preSlide} size={30} />
                </div>
                {/* Right Arrow */}
        <div className='absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 group-hover:bg-black/20 text-white cursor-pointer'>
            <BsChevronCompactRight onClick={nextSlide} size={30} />
        </div>

            <div className='flex top-4 justify-center py-2'>
                {slides.map((slide,slideIndex)=>(
                    <div className='text-2xl cursor-pointer' key={slideIndex} onClick={()=> goToSlide(slideIndex)}>
                        <RxDotFilled />
                    </div>
                ))}                
            </div>
        </div>
    )
};

export default ImagesSlider
