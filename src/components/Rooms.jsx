import React from 'react'

const Rooms = () => {
    return (
        <div className='max-w-[1400px] h-[500px] bg-blue-100 mx-auto my-20 pt-16 lg:mb-[20%] md:mb-[35%] px-4 grid lg:grid-cols-3 gap-4'>
            <div className='lg:top-20 relative lg:col-span-1 col-span-2'>
                <h3 className='text-2xl font-bold'>台南高級大飯店</h3>
                <p className='pt-4'>
                    有觀光旅遊櫃台、全面禁菸客房、健身中心、全館WiFi,以及共用休息室。這間住宿設有 24 小時接待櫃檯，也有餐廳。這間飯店設有桑拿和客房服務。 所有客房均提供空調、衛星頻道平面電視、冰箱、電熱水壺、沖洗座、免費盥洗用品和書桌
                </p>
            </div>

            <div className='grid grid-cols-2 col-span-2 gap-2'>
                <img className='object-cover w-full h-full' 
                src='https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' 
                alt=''/>
                <img className='row-span-2 object-cover w-full h-full'  
                src='https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' 
                alt=''/>
                <img className='object-cover w-full h-full'  
                    src='https://images.pexels.com/photos/210604/pexels-photo-210604.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' 
                alt=''/>
            </div>
        </div>
    )
}

export default Rooms
