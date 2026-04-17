import React, { useContext } from 'react';
import { friendContext } from '../FriendContext/Context';
import ShowFriendsTimeline from '../ShowFriendsTimeline/ShowFriendsTimeline';

const Timeline = () => {

    const { button } = useContext(friendContext);




    return (
        <div className='bg-base-200 p-15'>
            <div className='w-9/12 mx-auto'>
                <h2 className='font-bold text-3xl pt-9'>Timeline</h2>
                <div className="py-10">
                    <div className="dropdown  dropdown-start">
                        <div tabIndex={0} role="button" className="btn m-1">Filter Timeline  ⬇️</div>
                        <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                            <li onClick={()=>} ><a>Show All Calls</a></li>
                            <li><a>Show All Text</a></li>
                            <li><a>Show All Video(call)</a></li>
                        </ul>
                    </div>
                </div>
                <div className='flex flex-col gap-5'>
                    {
                        button.map((element, index) => <ShowFriendsTimeline key={index} element={element}></ShowFriendsTimeline>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Timeline;