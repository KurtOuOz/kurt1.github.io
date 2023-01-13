import React from 'react'

const Plant = () => {
    return (
        <div className='max-w-[1400px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4'>
            {/* left side */}
            <div className='grid grid-cols-2 grid-rows-6 h-[80vh]'>
                <img className='row-span-3 object-cover w-full h-full p-2' 
                src='https://scontent.fkhh1-1.fna.fbcdn.net/v/t1.15752-9/324158628_1210072593048521_2579432567129093497_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=ae9488&_nc_ohc=LAeMVR8mXV8AX_mcg07&_nc_ht=scontent.fkhh1-1.fna&oh=03_AdR7-ZcnfqqvuEicjIa-DrNCdmjRpHoEX5K7fKFjmryPKA&oe=63E72F2D' alt=''/>
                <img className='row-span-2 object-cover w-full h-full p-2' 
                src='https://scontent.fkhh1-1.fna.fbcdn.net/v/t1.15752-9/324632695_470008448468591_8502061322619332453_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=ae9488&_nc_ohc=9JF1JEy9nVoAX_clfdA&_nc_oc=AQm67v5UByWSugEeIZnZ8gcnrjK6SR-PInUyz69wNtWuHpfCAF9r9J1YhShiiKzJVZQ&_nc_ht=scontent.fkhh1-1.fna&oh=03_AdScCd-OVb6XBdGqdz4wQl18_NF2q5zDOYVDtfh7XCgBDg&oe=63E73BFD' alt='' />
                <img className='row-span-2 object-cover w-full h-full p-2'
                src='https://scontent.fkhh1-1.fna.fbcdn.net/v/t1.15752-9/324803842_709244080608105_762276727165034174_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=ae9488&_nc_ohc=RkC8unbeUEIAX-o-Vo_&_nc_ht=scontent.fkhh1-1.fna&oh=03_AdQQekOnMzIFbCDva_MxIkAEztQMb0IC_P9hEjlwpTuR2Q&oe=63E720CD' alt='' />
                <img className='row-span-3 object-cover w-full h-full p-2'
                src='https://scontent.fkhh1-1.fna.fbcdn.net/v/t1.15752-9/325039549_940797713554193_5736185462663917864_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=ae9488&_nc_ohc=mhfjV2wW_28AX9EVM7H&_nc_ht=scontent.fkhh1-1.fna&oh=03_AdQVKnW_4QpYc8mgwtEcjWiI9jqtON3pjMDCYc8BZAVuUQ&oe=63E74613https://scontent.fkhh1-1.fna.fbcdn.net/v/t1.15752-9/325039549_940797713554193_5736185462663917864_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=ae9488&_nc_ohc=mhfjV2wW_28AX9EVM7H&_nc_ht=scontent.fkhh1-1.fna&oh=03_AdQVKnW_4QpYc8mgwtEcjWiI9jqtON3pjMDCYc8BZAVuUQ&oe=63E74613' alt='' />
                <img className='row-span-2 object-cover w-full h-full p-2' 
                src='https://scontent.fkhh1-2.fna.fbcdn.net/v/t1.15752-9/322030034_907718220499951_8153907545633823830_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=ae9488&_nc_ohc=eRGnzKLMHAMAX9k5jo4&_nc_ht=scontent.fkhh1-2.fna&oh=03_AdQ_-DldIoKjLwDNge31Qx1uKXJHOk0prhz9BisxVfUrQQ&oe=63E71893' alt='' />
            </div>
            {/* Right side */}
            <div className='flex flex-col h-full justify-center'>
                <h3 className='text-5xl md:text-6xl font-bold'>各種好看的亡美照</h3>
                <p className='text-2xl py-6'>還不知道要怎麼開始嗎?推薦您</p>
                <p className='pb-6'>安平老街位於安平古堡東邊，為三百年前荷蘭人於台南安平地區所建的第一條街道，有「台灣街」及「石板街」的稱號，又為「開台第一街」及「延平老街」，延平街上所興建的房子多以土角厝、矮紅磚屋以及西式洋樓為主，其中洋樓的部份多以白粉牆及洗石子牆面，而欄杆、柱頭和屋簷上所裝飾的浮雕皆為手工打造，延平街在規劃時承襲清代台灣都市的規劃</p>
            <div>
                <button className='border-black mr-4 hover:shadow-xl'>看更多</button>
                <button className='bg-black text-white border-black hover:shadow-xl'>預定你的行程</button>              
            </div>
            </div>
        </div>
    )
}

export default Plant
