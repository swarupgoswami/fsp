import React from 'react'

const Domin = () => {

    function ct(){
        const box=document.getElementById("box");
        box.innerHTML="wassup my boi";
        box.style.backgroundColor="red";
    }
  return (
    <div id="box">
        <button onClick={ct}>click me</button>
    </div>
  )
}

export default Domin
