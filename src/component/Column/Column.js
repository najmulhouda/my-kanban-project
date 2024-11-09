import React from 'react'
import Card from '../Card/Card'
import "./index.css"
const column1 = [ 1 ,2 ,3 ,4 , 5 , 6 , 7 , 8 ,9 ,10 ] 
const column2 = [ 1 ,2 ,3 ,4 , 5 , 6 , 7 , 8 ,9 ,10 ] 
const column3 = [ 1 ,2 ,3 ,4 , 5 , 6 , 7 , 8 ,9 ,10 ] 
const column4 = [ 1 ,2 ,3 ,4 , 5 , 6 , 7 , 8 ,9 ,10 ] 
const column5 = [ 1 ,2 ,3 ,4 , 5 , 6 , 7 , 8 ,9 ,10 ] 
const column6 = [ 1 ,2 ,3 ,4 , 5 , 6 , 7 , 8 ,9 ,10 ] 

const Column = () => {
  return (
    <div className="flex p-6 mt space-x-6 overflow-x-scroll custom-scrollbar w-full">

      {/* Incomplete Column */}
      <div className="w-[420px] bg-gray-100  shadow-lg ">
        {/* Header with Red Design */}
        <div className="flex items-center justify-between mb-4 p-2">
          <div className="flex items-center">
            {/* Red Design Element */}
            <div className="w-3 h-3 bg-red-600 rounded-full mr-2"></div>
            <h2 className="font-bold text-lg">Incomplete</h2>
          </div>
          <span className="bg-gray-300 text-sm px-2 py-1 rounded-full">0</span>
        </div>

        {/* Scrollable Card List */}
        <div className="overflow-y-auto overflow-x-hidden h-[700px] p-2 space-y-2 custom-scrollbar">
          {column1.map((item) => (
            <div key={item} className="space-y-4 mb-4"> 
              <Card item={item} />
            </div>
          ))}
        </div>
      </div>
      <div className="w-[420px] bg-gray-100  shadow-lg ">
        {/* Header with Red Design */}
        <div className="flex items-center justify-between mb-4 p-2">
          <div className="flex items-center">
            {/* Red Design Element */}
            <div className="w-3 h-3 bg-blue-600 rounded-full mr-2"></div>
            <h2 className="font-bold text-lg">To Do</h2>
          </div>
          <span className="bg-gray-300 text-sm px-2 py-1 rounded-full">0</span>
        </div>

        {/* Scrollable Card List */}
        <div className="overflow-y-auto overflow-x-hidden h-[700px] p-2 space-y-2 custom-scrollbar">
          {column2.map((item) => (
            <div key={item} className="space-y-4 mb-4"> 
              <Card item={item} />
            </div>
          ))}
        </div>
      </div>
      <div className="w-[420px] bg-gray-100  shadow-lg ">
        {/* Header with Red Design */}
        <div className="flex items-center justify-between mb-4 p-2">
          <div className="flex items-center">
            {/* Red Design Element */}
            <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
            <h2 className="font-bold text-lg">Doing</h2>
          </div>
          <span className="bg-gray-300 text-sm px-2 py-1 rounded-full">0</span>
        </div>

        {/* Scrollable Card List */}
        <div className="overflow-y-auto overflow-x-hidden h-[700px] p-2 space-y-2 custom-scrollbar">
          {column3.map((item) => (
            <div key={item} className="space-y-4 mb-4"> 
              <Card item={item} />
            </div>
          ))}
        </div>
      </div>
      <div className="w-[420px] bg-gray-100  shadow-lg ">
        {/* Header with Red Design */}
        <div className="flex items-center justify-between mb-4 p-2">
          <div className="flex items-center">
            {/* Red Design Element */}
            <div className="w-3 h-3 bg-emerald-300 rounded-full mr-2"></div>
            <h2 className="font-bold text-lg">Under Review</h2>
          </div>
          <span className="bg-gray-300 text-sm px-2 py-1 rounded-full">0</span>
        </div>

        {/* Scrollable Card List */}
        <div className="overflow-y-auto overflow-x-hidden h-[700px] p-2 space-y-2 custom-scrollbar">
          {column4.map((item) => (
            <div key={item} className="space-y-4 mb-4"> 
              <Card item={item} />
            </div>
          ))}
        </div>
      </div>
      <div className="w-[420px] bg-gray-100  shadow-lg ">
        {/* Header with Red Design */}
        <div className="flex items-center justify-between mb-4 p-2">
          <div className="flex items-center">
            {/* Red Design Element */}
            <div className="w-3 h-3 bg-green-600 rounded-full mr-2"></div>
            <h2 className="font-bold text-lg">Completed</h2>
          </div>
          <span className="bg-gray-300 text-sm px-2 py-1 rounded-full">0</span>
        </div>

        {/* Scrollable Card List */}
        <div className="overflow-y-auto overflow-x-hidden h-[700px] p-2 space-y-2 custom-scrollbar">
          {column5.map((item) => (
            <div key={item} className="space-y-4 mb-4"> 
              <Card item={item} />
            </div>
          ))}
        </div>
      </div>
      <div className="w-[420px] bg-gray-100  shadow-lg ">
        {/* Header with Red Design */}
        <div className="flex items-center justify-between mb-4 p-2">
          <div className="flex items-center">
            {/* Red Design Element */}
            <div className="w-3 h-3 bg-red-600 rounded-full mr-2"></div>
            <h2 className="font-bold text-lg">Overdue</h2>
          </div>
          <span className="bg-gray-300 text-sm px-2 py-1 rounded-full">0</span>
        </div>

        {/* Scrollable Card List */}
        <div className="overflow-y-auto overflow-x-hidden h-[700px] p-2 space-y-2 custom-scrollbar">
          {column1.map((item) => (
            <div key={item} className="space-y-4 mb-4"> 
              <Card id={item} />
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}

export default Column