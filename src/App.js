import react, { useState } from "react";
function App() {
  const [color, setColor] = useState("red");

  function updatecolor() {
    setColor("blue");
  }

  return (
    <>
      {}
      <button style={{ backgroundColor: color }} onClick={updatecolor}>
        changecolor
      </button>
    </>
  );
}
export default App;
