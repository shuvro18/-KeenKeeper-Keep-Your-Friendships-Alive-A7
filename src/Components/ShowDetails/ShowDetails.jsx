import React from 'react';
import { BiPhoneCall } from 'react-icons/bi';
import { CiBellOn } from 'react-icons/ci';
import { FiArchive } from 'react-icons/fi';
import { IoMdText } from 'react-icons/io';
import { IoVideocamOutline } from 'react-icons/io5';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { useLoaderData, useParams } from 'react-router';

const ShowDetails = () => {
    const { id } = useParams();
    const friends = useLoaderData();


    const findFriend = friends.find(friend => friend.id === parseInt(id))
    console.log(findFriend)
    return (
        <div className='bg-base-200'>
            <div className='w-9/12 mx-auto py-20'>
                <div className='grid grid-cols-1 md:grid-cols-5 gap-4'>

                    <div className='p-5 bg-white rounded-xl col-span-2 row-span-2'>
                        <div className='space-y-2'>
                            <img className='mx-auto rounded-full' src={findFriend.picture} alt="" />
                            <h3 className='text-center font-bold'>{findFriend.name}</h3>
                            <div className='flex justify-center'>
                                <p className={`text-white  ${findFriend.status === "on-track" ? "badge bg-[#244D3F]" : findFriend.status === "overdue" ? "badge badge-secondary" : "badge badge-warning"}`}>{findFriend.status}</p>
                            </div>
                        </div>
                        <div className='flex justify-center py-2 gap-2'>
                            {
                                findFriend.tags.map((element, ind) => <div className="badge badge-soft badge-success bg-green-200 text-black opacity-80" key={ind}> element </div>)
                            }
                        </div>
                        <p className='text-center text-sm text-neutral/50 mx-auto'>"{findFriend.bio}"</p>
                    </div>
                    <div className='shadow-xl flex flex-col justify-center items-center p-10 space-y-2.5 rounded-2xl bg-white'>
                        <p className='font-bold text-2xl text-neutral/70'>{findFriend.days_since_contact}</p>
                        <p className='text-neutral/50'>Days Since Contact</p>
                    </div>
                    <div className='shadow-xl flex flex-col justify-center items-center p-10 space-y-2.5 rounded-2xl bg-white'>
                        <p className='font-bold text-2xl text-neutral/70'>{findFriend.goal}</p>
                        <p className='text-neutral/50'>Goal (Days)</p>
                    </div>
                    <div className='shadow-xl flex flex-col justify-center items-center p-10 space-y-2.5 rounded-2xl bg-white col-span-3 md:col-span-1'>
                        <p className='font-bold text-2xl text-neutral/70'>{findFriend.next_due_date}</p>
                        <p className='text-neutral/50'>Next Due</p>
                    </div>

                    <div className='col-span-3 bg-white rounded-xl space-y-5'>
                        <div className='p-5 flex justify-between'>
                            <p className='text-xl font-bold text-neutral/50'>Relationship Goal</p>
                            <button className='btn'>Edit</button>
                        </div>
                        <p className='text-xl text-neutral/50 px-5'>Connect every
                            <span className='text-xl font-bold'> {findFriend.goal}</span>
                        </p>

                    </div>

                    <div className='bg-white rounded-xl col-span-3 md:col-span-2 lg:col-span-2 p-6'>
                        <div className='flex justify-center items-center gap-3'>
                            <CiBellOn className='text-xl' />
                            <p className='font-semibold'>Snooze 2 weeks</p>
                        </div>
                    </div>
                    <div className='col-span-3 bg-white rounded-2xl p-7 row-span-3'>
                        <p className='text-xl font-bold text-neutral/50'>Quick Check-In</p>
                        <div className='grid grid-cols-3 gap-4 '>
                            <div className=' flex flex-col justify-center items-center p-10 space-y-2.5 rounded-sm bg-base-200'>
                                <BiPhoneCall className='text-2xl' />
                                <p className='text-neutral/50'>Call</p>
                            </div>

                            <div className=' flex flex-col justify-center items-center p-10 space-y-2.5 rounded-2xl bg-base-200'>
                                <IoMdText  className='text-2xl' />
                                <p className='text-neutral/50'>Text</p>
                            </div>

                            <div className=' flex flex-col justify-center items-center p-10 space-y-2.5 rounded-2xl bg-base-200'>
                                <IoVideocamOutline className='text-2xl' />
                                <p className='text-neutral/50'>Video</p>
                            </div>

                        </div>
                    </div>

                    <div className='bg-white rounded-xl col-span-3 md:col-span-2 lg:col-span-2 p-6'>
                        <div className='flex justify-center items-center gap-3'>
                            <FiArchive className='text-xl' />
                            <p className='font-semibold'>Archive</p>
                        </div>
                    </div>
                    <div className='bg-white rounded-xl col-span-3 md:col-span-2 lg:col-span-2 p-6'>
                        <div className='flex justify-center items-center gap-3'>
                            <RiDeleteBin6Line className='text-xl text-secondary' />
                            <p className='font-semibold text-secondary'>Delete</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ShowDetails;