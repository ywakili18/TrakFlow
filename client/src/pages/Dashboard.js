import React from 'react'
import Newticket from '../components/Newticket'
import Currenttickets from '../components/Currenttickets'
const Dashboard = (props) => {
  return (
    <div className="">
      {/* <header class="border h-screen w-2/5 text-2xl text-center">
        Dashboard
      </header> */}
      <Newticket {...props} />
      <div className="bg-pink-100">
        <Currenttickets {...props} />
      </div>
    </div>
  )
}

export default Dashboard
