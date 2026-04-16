import React, { use } from 'react';
import AllFriendsMap from '../AllFriendsMap/AllFriendsMap';



const allFriendsPromise = fetch("/Data.json").then(res=> res.json());



const AllFriends = () => {
    const allFriends = use(allFriendsPromise);
    return (
        <div className='bg-base-200'>

            <div className='w-9/12 mx-auto pb-15'>
                <h3 className='text-2xl font-bold opacity-90 '>Your Friends </h3>
                <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-7'>
                    {
                        allFriends.map(friend => <AllFriendsMap friend={friend} key={friend.id}></AllFriendsMap>)
                    }
                </div>
            </div>

        </div>
    );
};

export default AllFriends;