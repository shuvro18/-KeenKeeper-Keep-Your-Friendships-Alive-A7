import React, { Suspense } from 'react';
import Banner from '../Bannar/Banner';
import AllFriends from '../AllFriends/AllFriends';

const HomePage = () => {
    return (
        <div>
            <Banner></Banner>
            <Suspense fallback={<div className='flex justify-center p-20 bg-base-200'><span className="loading loading-spinner text-secondary"></span></div>}>
                <AllFriends></AllFriends>
            </Suspense>
        </div>
    );
};

export default HomePage;