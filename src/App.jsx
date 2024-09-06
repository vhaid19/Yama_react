import React from 'react'
import Navbar from './Componants/Navbar/Navbar'
import Background_slider from './Componants/Background_slider/Background_slider'
import Loading from './Componants/Loading animation/Loading';
import Info_yama from './Componants/index Page/Info_yama';

function App() {
  window.addEventListener("load", ()=>{
    document.querySelector(".loading").style.display = 'block';
  })
    return(
      <div className='Loadings bg-stone-800'>
        <Loading />
        <div className='loading hidden'>
          <Navbar />
          <Background_slider />
          <Info_yama />
      </div>
      </div>
    )
}

export default App