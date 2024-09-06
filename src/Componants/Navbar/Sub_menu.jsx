import React from 'react'

function Sub_menu() {
  return (
    <>
    <div className="sub-menu absolute z-10 right-[18rem] w-[20vw] top-32 transition-all rounded-md bg-[#f1f5f95e]">
        <div className="construction uppercase cursor-pointer">Construction</div>
        <div className="consulting uppercase cursor-pointer">consulting</div>
        <div className="trunkey solution uppercase cursor-pointer">trunkey solution</div>
        <div className="Project management uppercase cursor-pointer">Project management</div>
    </div>
    </>
  )
}

export default Sub_menu