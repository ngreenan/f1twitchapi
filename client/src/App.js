import React, { useState, useEffect } from "react"
import F1Client from './F1Client'
import Session from './Session'
import Tower from './Tower'
import RawData from './RawData'

function App() {
  
  return (
    <div>
      <F1Client />
      
      <Tower />
      {/* <Session /> */}
      
      
      <RawData />

    </div>
  );
}

export default App;