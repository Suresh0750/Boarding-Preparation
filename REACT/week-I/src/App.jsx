import React, { useRef, useState,useEffect } from "react";

function Timer() {
  const count = useRef(0);
  const [renderCount, setRenderCount] = useState(0);
  const renderRef= useRef(null)

  useEffect(()=>{
    console.log('componennt re render')
  })

  const increment = () => {
    count.current += 1; // Updates ref but does not trigger re-render
    console.log("Current count (ref):", count.current);
    renderRef.current.innerText = count.current
  };

  const forceRender = () => {
    setRenderCount(renderCount + 1); // Forces re-render
  };

  return (
    <div>
      <h1>useRef Value Example</h1>
      <button onClick={increment}>Increment Ref Value</button>
      <button onClick={forceRender}>Re-render</button>
      <p>Render Count: {renderCount}</p>
      <p>Ref Count: <span ref={renderRef}>{count.current}</span></p>
      <p>Check console for ref value updates!</p>
      <div>
       
      </div>
    </div>
  );
}

export default Timer;
