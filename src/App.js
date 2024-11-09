import React from 'react';
import Card from './component/Card/Card';
import Column from './component/Column/Column';

const App = () => {
  const columns = [
    { title: 'Incomplete', count: 0 },
    { title: 'To Do', count: 0 },
    { title: 'Doing', count: 0 },
    { title: 'Under Review', count: 0 },
    { title: 'Completed', count: 0 },
    { title: 'Overdue', count: 0 },
  ];

  return (
    <div className='bg-gray-50 flex justify-center'>
      <div className="flex overflow-auto  w-[1500px]  mt-12 p-6  space-x-6 ">
      <Column/>

      {/* {columns.map((column, index) => (
        <div key={index} className=" w-[430px] h-[430px] bg-gray-200 rounded-lg shadow-lg p-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-bold text-lg">{column.title}</h2>
            <span className="bg-gray-300 text-sm px-2 py-1 rounded-full">{column.count}</span>
          </div>
          <div className="space-y-4 ">
           
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      ))} */}
    </div>
    </div>
  );
};

export default App;
