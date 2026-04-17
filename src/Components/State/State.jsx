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
        <div className='bg-base-200'>
            <div className='flex justify-center items-center py-20'>

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
        </div>
    );
};

export default State;