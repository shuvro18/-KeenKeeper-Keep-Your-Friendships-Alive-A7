import React, { useContext } from 'react';
import { friendContext } from '../FriendContext/Context';

const Timeline = () => {

    const {button}= useContext(friendContext);
    
    
    

    return (
        <div>
            {
                button.map((element,index)=>)
            }
        </div>
    );
};

export default Timeline;