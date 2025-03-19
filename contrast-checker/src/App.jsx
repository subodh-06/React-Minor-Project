import { useState } from 'react';
import { FaStar } from 'react-icons/fa';

function App() {
  const [textColor, setTextColor] = useState('#0E2239');
  const [bgColor, setBgColor] = useState('#B9D0E9');

  return (
    <>
      <header className='h-[35vh] bg-white flex flex-col items-center justify-center text-center px-6'>
        <h1 className='font-extrabold text-4xl sm:text-5xl'>Color Contrast Checker</h1>
        <p className='text-gray-600 text-lg sm:text-xl mt-4'>Calculate the contrast ratio of text and background colors.</p>
      </header>
      <div className=" pl-2 pr-2">
    <div className="flex  flex-col-reverse  md:flex-row max-w-5xl mx-auto  rounded-lg border-2 border-gray-200 overflow-hidden mb-10">
      {/* Left Side - Controls */}

      <div className="w-full md:w-1/2 p-8 bg-white border-r-[2px] border-gray-200">
       <div className='flex  justify-between items-center'>
       <div className=' flex flex-col'>
      <h2 className="text-md font-medium mb-2">Text color</h2>
        <div className="flex items-center mb-6 relative">
          <input
            type="text"
            value={textColor}
            onChange={(e) => setTextColor(e.target.value)}
            className="border rounded-lg p-2 w-36 sm:w-40 focus:outline-none focus:ring-2 focus:ring-indigo-600 pr-12 text-center"
          />
          <div
            className="absolute right-2 top-1/2 transform -translate-y-1/2 w-8 h-8 rounded border bg-gray-200"
            style={{ backgroundColor: textColor }}
          ></div>
        </div>
       </div>
        {/*  */}
       <div className="flex flex-col ">
       <h2 className="text-md font-medium mb-2">Background color</h2>
        <div className="flex items-center mb-6 relative">
          <input
            type="text"
            value={bgColor}
            onChange={(e) => setBgColor(e.target.value)}
            className="border rounded-lg p-2 w-36 sm:w-40 focus:outline-none focus:ring-2 focus:ring-indigo-600 pr-12 text-center"
          />
          <div
            className="absolute right-2 top-1/2 transform -translate-y-1/2 w-8 h-8 rounded border bg-gray-200"
            style={{ backgroundColor: bgColor }}
          ></div>
        </div>
       </div>
       </div>


        <h2 className="text-xl font-medium mb-4">Contrast</h2>
        <div className="bg-green-100 rounded-lg p-4 mb-2">
          <div className="flex justify-between items-center">
            <div className="text-green-800 text-6xl font-bold">10.15</div>
            <div className="text-right">
              <div className="text-lg mb-1">Very good</div>
              <div className="flex">
                {[...Array(4)].map((_, i) => (
                  <FaStar key={i} className="text-green-800" />
                ))}
                <FaStar className="text-green-200" />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-green-100 p-4 rounded">
            <div className="flex">
              <div className="text-green-800 flex">
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
            </div>
            <div className="mt-2">Small text</div>
          </div>
          <div className="bg-green-100 p-4 rounded">
            <div className="flex">
              <div className="text-green-800 flex">
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
            </div>
            <div className="mt-2">Large text</div>
          </div>
        </div>

        <p className="text-gray-600 mt-6 text-sm">
          Good contrast for small text (below 18pt) and great contrast for large text (above 18pt or bold above 14pt). <a href="#" className="text-blue-500">Click to enhance</a>
        </p>
      </div>

      {/* Right Side - Quote Preview */}
      <div 
        className="w-full md:w-1/2 p-8 flex flex-col items-center justify-center text-center"
        style={{ backgroundColor: bgColor, color: textColor }}
      >
        <h2 className="text-4xl font-bold mb-6">Quote n. 31</h2>
        <p className="text-lg mb-4">
          There's so much comedy on television. Does that cause comedy in the streets?
        </p>
        <p className="text-lg font-medium">Dick Cavett</p>
      </div>
    </div>
    </div>
    </>
  );
}

export default App;
