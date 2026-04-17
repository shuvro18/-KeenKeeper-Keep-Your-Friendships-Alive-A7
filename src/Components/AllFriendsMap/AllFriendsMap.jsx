import React from 'react';
import { NavLink } from 'react-router';

const AllFriendsMap = ({friend}) => {
    
    return (
        <NavLink to={`/details/${friend.id}`}>
            <div className='bg-white rounded-xl p-6'>
                <img className='rounded-full mx-auto' src={friend.picture} alt="" />
                <h3 className='text-xl font-bold text-neutral/85 text-center'>{friend.name}</h3>
                <p className='text-sm text-center text-neutral/50 pt-2'>{friend.days_since_contact}d ago</p>
                <div className='flex justify-center py-2 gap-2'>
                    {
                        friend.tags.map((element,ind)=><div className="badge badge-soft badge-success bg-green-200 text-black opacity-80" key={ind}>element</div>)
                    }
                </div>
                <div className='flex justify-center'>
                    <div className={`text-white ${friend.status === "on-track" ? "badge bg-[#244D3F]": friend.status === "overdue" ? "badge badge-secondary" : "badge badge-warning"}`}>{friend.status}</div>
                </div>
            </div>
        </NavLink>
    );
};

export default AllFriendsMap;