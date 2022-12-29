import React from 'react'

function Dashboard() {
  return (
    <>
     <p className="text-gray-700 text-3xl mb-10 font-bold">Dashboard</p>

     <div className="grid grid-cols-3 gap-5 mb-14" >
        <div className="rounded bg-white h-40 shadow-sm"></div>
        <div className="rounded bg-white h-40 shadow-sm"></div>
        <div className="rounded bg-white h-40 shadow-sm"></div>
      </div>
      <div className="grid col-1 bg-white h-96 shadow-sm"></div>
    </>
  )
}

export default Dashboard