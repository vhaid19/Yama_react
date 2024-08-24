import React from 'react'
import './Css/Loading.css'
function Loading() {
    window.addEventListener("load", ()=>{
        document.getElementById("loading").style.display = "none";
      })
    return (
        <div>
            <div className="loding_effect" id='loading'>
                <div className="loader"></div>
            </div>
        </div>
    )
}

export default Loading