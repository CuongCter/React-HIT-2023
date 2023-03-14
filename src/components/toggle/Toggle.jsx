import React, { useState } from "react";
import "./ToggleStyle.css";
// stateless functional component: component nhưng không sử dụng state
// function Toggle() {
//   return <div className="toggle"></div>;
// }
// // stateful functional component: component có sử dụng state
// function Toggle2() {
//   // const [count, setCount] = useState();
//   return <div className="toggle"></div>;
// }

function Toggle() {
  
  const [on, setOn] = useState(false);
  console.log(on);
  const handleToggle = (enable) => {
    setOn((on) => !on);

  };
  return (
    <div>
      <div className={`toggle ${on ? "active" : ""}`} onClick={handleToggle}>
        <div className={`spinner ${on ? "active" : ""}`}></div>
      </div>
      {/* <div className="toggle-control">
        <div className="toggle-on" onClick={() => setOn(true)}>
          On
        </div>
        <div className="toggle-off" onClick={() => setOn(false)}>
          Off
        </div>
      </div> */}
    </div>
  );
}
export default Toggle;