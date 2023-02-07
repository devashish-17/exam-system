import React from 'react'

interface ColorButtonsProps {
    setColor: (color: string) => void;
}

const LeftSide: React.FC<ColorButtonsProps> = ({ setColor }) => {
    const handleClick = (clickedColor: string) => {
        setColor(clickedColor);
    };

    return (
        <div className='px-2 col-span-8 flex flex-col'>

            {/* Subjects List */}
            <div className="flex text-white gap-1 my-2">
                <button className='bg-blue-900 h-7 w-36 rounded cursor-pointer'> All Sections </button>
                <button className='bg-blue-500 h-7 w-36 rounded cursor-pointer hover:bg-blue-600'> PHYSICS </button>
                <button className='bg-blue-500 h-7 w-36 rounded cursor-pointer hover:bg-blue-600'> CHEMISTRY </button>
                <button className='bg-blue-500 h-7 w-36 rounded cursor-pointer hover:bg-blue-600'> MATHS </button>
            </div>

            <hr className='bg-gray-400 h-[2px]' />

            {/* Question Section */}
            <div className='my-2 border-2 border-gray-600 rounded flex-grow shadow-lg shadow-gray-300'>
                <div className="flex justify-between bg-blue-500 text-white p-1 font-bold">
                    <span> Q No.: 1 </span>
                    <div className='flex'>
                        <span className='whitespace-nowrap mr-1'> View in:  </span>
                        <div className="relative max-w-sm border border-black px-1 bg-white">
                            <select className="text-gray-700 border outline-none appearance-none focus:border-indigo-600 font-medium">
                                <option> English </option>
                                <option> option 1 </option>
                                <option> option 2 </option>
                                <option> option 3 </option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-2">
                    <div className='h-full'>
                        <div className='text-blue-800 font-bold border border-gray-300 px-2'> QUESTION INSTRUCTIONS </div>
                        <p className='p-2 font-semibold border-r'>
                            Passage You want to hit a small box on the floor with a marble fired from a spring-loaded gun that is mounted on the table. The target box is a distance R horizontally from the edge on the table; see the figure to the right. You compressed the spring a distance d, but the centre the marble falls short by a distance r of the centre of the box. How far should you compress the spring to score a direct hit (neglect friction)?
                        </p>
                    </div>
                    <div className='h-full'>
                        <div className='text-blue-800 font-bold border border-gray-300 px-2'> QUESTION </div>
                        <p className='px-2 font-semibold'>
                            A block of mass m is projected with velocity <i> V<sub>0</sub></i> as shown in the fig. The distance between free ends is <i> l<sub>0</sub></i>. Maximum displacement of the block during the motion.
                        </p>

                        <div className='border border-black m-4 w-72 h-32 flex items-center justify-center'> Diagram img. </div> <br />
                        <hr className='mb-4' />
                        <div className='ml-2 flex flex-col'>
                            <div><input type="radio" name='list-radio' id='list-radio-a' /> (A). <label htmlFor='list-radio-a' className='font-semibold'><i> l+v<sub>0</sub>  √( m / k<sub>2</sub> ) </i></label> </div> <hr className='my-4' />
                            <div><input type="radio" name='list-radio' id='list-radio-b' /> (B). <label htmlFor='list-radio-b' className='font-semibold'><i> l+2v<sub>0</sub>  √( m / k<sub>1</sub>+ k<sub>2</sub> ) </i></label> </div> <hr className='my-4' />
                            <div><input type="radio" name='list-radio' id='list-radio-c' /> (C). <label htmlFor='list-radio-c' className='font-semibold'><i> l+2v<sub>0</sub>  √[m(k<sub>1</sub>+ k<sub>2</sub>) / k<sub>1</sub> k<sub>2</sub>] </i></label> </div> <hr className='my-4' />
                            <div><input type="radio" name='list-radio' id='list-radio-d' /> (D). <label htmlFor='list-radio-d' className='font-semibold'><i> l<sub>0</sub>+v<sub>0</sub>  √[m(k<sub>1</sub>+ k<sub>2</sub>) / k<sub>1</sub> k<sub>2</sub>] </i></label> </div> <hr className='my-4' />
                        </div>
                    </div>
                </div>
            </div>

            {/* Buttons */}
            <div className="flex text-white gap-1 my-2">
                <button className='bg-blue-500 h-7 px-7 rounded cursor-pointer hover:bg-blue-600' onClick={() => handleClick("white")}> CLEAR RESPONSE </button>
                <button className='bg-blue-500 h-7 px-7 rounded cursor-pointer hover:bg-blue-600' onClick={() => handleClick("yellow")}> REVIEW </button>
                <button className='bg-blue-500 h-7 px-7 rounded cursor-pointer hover:bg-blue-600' onClick={() => handleClick("gray")}> DUMP </button>
                <button className='bg-blue-500 h-7 px-7 rounded cursor-pointer hover:bg-blue-600'> PREVIOUS </button>
                <button className='bg-blue-900 h-7 px-7 rounded cursor-pointer' onClick={() => handleClick("green")}> NEXT </button>
            </div>
        </div>
    )
}

export default LeftSide