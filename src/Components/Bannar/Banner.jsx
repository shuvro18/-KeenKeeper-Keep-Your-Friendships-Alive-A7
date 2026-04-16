import React from 'react';

const Banner = () => {
    return (
        <div className='bg-base-200'>
            <div className='py-10 space-y-3 w-9/12 mx-auto'>
                <div className='text-center space-y-4 '>
                    <h2 className='text-3xl font-bold'>Friends to keep close in your life</h2>
                    <p className=' md:w-[50vh] mx-auto'>Your personal shelf of meaningful connections. Browse, tend, and nurture the
                        relationships that matter most.</p>
                </div>
                <div className='flex justify-center items-center'>
                    <button className='btn bg-[#244D3F] text-white'>+ Add a Friends</button>
                </div>
                <div className='grid grid-cols-4 gap-10 mt-5 mb-10 '>
                    <div className='shadow-xl flex flex-col justify-center items-center p-10 space-y-2.5 rounded-2xl bg-white'>
                        <p className='font-bold text-2xl text-neutral/70'>10</p>
                        <p className='text-neutral/50 text-sm'>Total Friends</p>
                    </div>
                    <div className='shadow-xl flex flex-col justify-center items-center p-10 space-y-2.5 rounded-2xl bg-white'>
                        <p className='font-bold text-2xl text-neutral/70'>3</p>
                        <p className='text-neutral/50 text-sm'>On Track</p>
                    </div>
                    <div className='shadow-xl flex flex-col justify-center items-center p-10 space-y-2.5 rounded-2xl bg-white'>
                        <p className='font-bold text-2xl text-neutral/70'>6</p>
                        <p className='text-neutral/50 text-sm'>Need Attention</p>
                    </div>
                    <div className='shadow-xl flex flex-col justify-center items-center p-10 space-y-2.5 rounded-2xl bg-white'>
                        <p className='font-bold text-2xl text-neutral/70'>12</p>
                        <p className='text-neutral/50 text-sm'>Interactions This Month</p>
                    </div>
                </div>
                <div className="divider "></div>
            </div>
        </div>
    );
};

export default Banner;