import React from 'react'
import Navbar from './Componants/Navbar/Navbar'
// import Sub_menu from './Componants/Navbar/Sub_menu';
import Background_slider from './Componants/Background_slider/Background_slider'
import Loading from './Componants/Loading animation/Loading';

function App() {
  window.addEventListener("load", ()=>{
    document.querySelector(".loading").style.display = 'block';
  })
    return(
      <div className='Loadings bg-stone-800'>
        <Loading />
        <div className='loading hidden'>
          <Navbar />
          {/* <Sub_menu /> */}
          <Background_slider />
          <div className="short_info w-full h-full flex justify-evenly">
            <div className="short_info_left w-1/2 h-full flex flex-col justify-center
            items-center"></div>
            <div className="short_info_right w-1/2 h-full flex flex-col justify-center
            items-center"></div>

          </div>
      </div>
      </div>
    )
}

export default App