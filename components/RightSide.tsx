import React, { useEffect, useState } from 'react'
interface ColorBoxProps {
    color: string;
}

const RightSide: React.FC<ColorBoxProps> = ({ color }) => {
    const [timeLeft, setTimeLeft] = useState({ minutes: 59, seconds: 0 });
    useEffect(() => {
        const intervalId = setInterval(() => {
          setTimeLeft(prevTime => {
            if (prevTime.seconds > 0) {
              return { ...prevTime, seconds: prevTime.seconds - 1 };
            } else if (prevTime.minutes > 0) {
              return { minutes: prevTime.minutes - 1, seconds: 59 };
            } else {
              return { minutes: 0, seconds: 0 };
            }
          });
        }, 1000);
    
        return () => clearInterval(intervalId);
      }, []);

    return (
        <div className='px-2 col-span-2 flex flex-col'>

            {/* Profile */}
            <div className='flex border-2 border-gray-600 rounded bg-sky-300 my-3'>
                <div className='h-28 w-24 my-2 mx-1 bg-white'> P </div>
                <div className='grid items-center'>
                    <div>
                        <span> Time Left: </span>
                        <span className='font-bold'> 
                            02:{timeLeft.minutes}:{timeLeft.seconds < 10 ? `0${timeLeft.seconds}` : timeLeft.seconds}
                        </span>
                    </div>
                    <span className='font-bold text-lg italic'> Ashish Kumar </span>
                </div>
            </div>

            {/* Question Pallete */}
            <div className="border-2 border-gray-600 rounded flex-grow bg-sky-300 ">
                <div className='bg-blue-500 text-white p-1 font-semibold'> Question Pallete </div>
                <div className='grid grid-cols-5'>
                    <div style={{ backgroundColor: color }} className={`queBtn`}> 1 </div>
                    <div className={`queBtn`}> 2 </div>
                    <div className={`queBtn`}> 3 </div>
                    <div className={`queBtn`}> 4 </div>
                    <div className={`queBtn`}> 5 </div>
                    <div className={`queBtn`}> 6 </div>
                    <div className={`queBtn`}> 7 </div>
                    <div className={`queBtn`}> 8 </div>
                    <div className={`queBtn`}> 9 </div>
                    <div className={`queBtn`}> 10 </div>
                </div>
            </div>

            {/* Legend */}
            <div className="border-2 border-gray-600 rounded my-3 bg-sky-300">
                <div className='bg-blue-500 text-white p-1 font-semibold'> Legend (Click to View) </div>
                <div className='grid grid-cols-2'>
                    <div className={`legendBtn ${'bg-green-600'}`}> 4 Answer </div>
                    <div className={`legendBtn ${'bg-red-500'}`}> 2 No Answer </div>
                    <div className={`legendBtn ${'bg-purple-500'}`}> 1 Review+Ans </div>
                    <div className={`legendBtn ${'bg-yellow-300'}`}> 1 Review-Ans </div>
                    <div className={`legendBtn ${'bg-gray-500'}`}> 1 Dump </div>
                    <div className={`legendBtn ${'bg-white'}`}> 1 No Visit </div>
                </div>
                <div className='flex justify-center py-[1px] bg-blue-600 font-semibold'> 10 All Questions </div>
                <hr className='h-0.5 bg-white mt-4' />
                <div className='grid grid-cols-2 gap-x-4 gap-y-1 my-2'>
                    <div className={`endBtn`}> Profile </div>
                    <div className={`endBtn`}> Instr </div>
                    <div className={`endBtn`}> Questions </div>
                    <div className={`endBtn`}> Submit </div>
                </div>
            </div>
        </div>
    )
}

export default RightSide