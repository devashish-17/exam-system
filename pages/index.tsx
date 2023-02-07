import type { NextPage } from 'next'
import Head from 'next/head'
import LeftSide from '../components/LeftSide'
import RightSide from '../components/RightSide'
import { useState } from 'react'

const Home: NextPage = () => {
  
  const [color, setColor] = useState("");

  return (
    <div className="flex flex-col h-screen justify-between">
      <Head>
        <title>Examination System</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header Section */}
      <header className='bg-blue-700 text-white h-12 flex justify-center items-center'>
        <span className='text-xl font-bold'> DEMO ONLINE TEST </span>
      </header>

      {/* Main Section */}
      <div className="grid grid-cols-10 h-full">
        <LeftSide setColor={setColor}/>
        <RightSide color={color}/>
      </div>

      {/* Footer Section */}
      <footer className='bg-slate-600 text-white flex justify-center items-center'>
        <span className='text-lg font-bold py-1'> &#169; Addmen </span>
      </footer>    
    </div>
  )
}

export default Home
