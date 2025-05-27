import React from "react";
import Home from "./Home";
import RoundOne from "./components/circle/circleOne";
import RoundTwo from "./components/circle/circleTwo";
import RoundThree from "./components/circle/circleThree";
import RoundFour from "./components/circle/circleFour";
import RoundFive from "./components/circle/circleFive";


function App() {
  return (
    <div className="w-full lgl:h-screen font-bodyfont overflow-hidden text-textColor bg-black relative">
      <div className="max-w-screen-2xl h-full mx-auto flex justify-center items-center">
        <Home />


      </div>
      <div className="w-full h-full absolute top-0 left-0 z-10">
        <RoundOne />
        <RoundTwo />
        <RoundThree />
        <RoundFour />
        <RoundFive />
      </div>
    </div>
  );
}

export default App;