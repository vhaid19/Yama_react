import React from 'react'
import Navbar from './Componants/Navbar/Navbar'
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
          <Background_slider />
      </div>
      </div>
    )
}

export default App