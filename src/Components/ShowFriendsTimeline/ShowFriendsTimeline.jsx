import React from 'react';
import call from "../../assets/call.png"
import text from "../../assets/text.png"
import video from "../../assets/video.png"

const ShowFriendsTimeline = ({element}) => {
    
    
    return (
        <div>
            <div className='bg-white flex items-center gap-8 p-8'>
                <img src={element.action === "call" ? `${call}`: element.action === "text" ? `${text}` : `${video}` } />
                <div className='space-y-3'>
                    <p>
                        <span className='text-xl font-bold text-neutral/70'>Meetup </span>
                        <span className='text-sm text-neutral/50'> With {element.name}</span>
                    </p>
                    <h3 className='text-neutral/50 '>{element.next_due_date}</h3>
                </div>
            </div>
        </div>
    );
};

export default ShowFriendsTimeline;