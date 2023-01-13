import React from 'react'

const Hero = () => {
    return (
        <div className='w-full h-screen'>
            <img className='top-0 left-0 w-full h-screen object-cover' 
                src="https://s.yimg.com/os/creatr-uploaded-images/2020-06/3f611de1-bace-11ea-bece-17d23dd41463" alt="" />
            <div className='bg-black/20 absolute top-0 left-0 w-full h-screen'/>
            <div className='absolute top-0 w-full h-full flex flex-col justify-center text-white'>
                <div className='md:left-[10%] max-w-[1100px] m-auto absolute p-4'>
                    <p>台南市</p>
                    <h1 className='font-bold text-5xl md:text-7xl drop-shadow-2xl'>歡迎跟著家人朋友一起來旅遊</h1>
                    <p className='max-w-[600px] drop-shadow-2xl py-2 text-xl'>現以傳統小吃、古蹟文化、夜市商圈、旅遊度假、山川田園、溫泉戲水吸引觀光人潮,並以宜居樂活城市著稱。幸福城市競爭力為六都第二名。臺南在全球化及世界城市研究網絡GaWC發表的2020年世界級城市名冊中被定義和歸屬於,自給自足等級的國際城市</p>
                    <button className='bg-white text-black'>馬上訂房</button>
                </div>
            </div>
        </div>
    )
}

export default Hero
