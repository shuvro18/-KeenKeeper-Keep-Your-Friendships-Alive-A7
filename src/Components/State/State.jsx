import React, { useContext } from 'react';
import { friendContext } from '../FriendContext/Context';
import { Pie, PieChart, Tooltip } from 'recharts';

const State = () => {
    const { button } = useContext(friendContext);

    const callCount = button.filter(item => item.action === "call").length;
    const textCount = button.filter(item => item.action === "text").length;
    const videoCount = button.filter(item => item.action === "video").length;



    const data = [
        { name: 'Calls', value: callCount, fill: '#0088FE' },
        { name: 'Text', value: textCount, fill: '#00C49F' },
        { name: 'Video', value: videoCount, fill: '#FFBB28' },

    ];

    return (
        <div>
            <div className='bg-base-200 pb-10'>
                <h2 className="font-bold text-5xl w-9/12 mx-auto py-20">Friendship Analytics</h2>
                <div className=' bg-white  w-9/12 mx-auto '>
                    <h2 className='text-3xl font-semibold py-10 px-5'>By Interaction Type</h2>
                    <div className='flex justify-center items-center '>
                    
                        <PieChart style={{ width: '100%', maxWidth: '500px', maxHeight: '80vh', aspectRatio: 1 }} responsive>
                            <Pie
                                data={data}
                                innerRadius="80%"
                                outerRadius="100%"
                                // Corner radius is the rounded edge of each pie slice
                                cornerRadius="50%"
                                fill="#8884d8"
                                // padding angle is the gap between each pie slice
                                paddingAngle={5}
                                dataKey="value"
                                isAnimationActive={true}
                            />
                            <Tooltip></Tooltip>
                        </PieChart>
                    </div>
                    <div className="flex justify-center gap-5 py-7">
                        <p className='flex items-center gap-3'><span className='h-4 w-4 bg-[#0088FE] rounded-full text-neutral/0'>he</span> call</p>
                        <p className='flex items-center gap-3'><span className='h-4 w-4 bg-[#00C49F] rounded-full text-neutral/0'>he</span> text</p>
                        <p className='flex items-center gap-3'><span className='h-4 w-4 bg-[#FFBB28] rounded-full text-neutral/0'>he</span> video</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default State;