import { useState, useEffect } from "react";
import Name from "../../assets/Name.png";
import SixBit from "../../assets/6bit.png";
import YouFoundMe6 from "../../assets/YouFoundMe6.png";
import EasterEggAudio from "/EasterEggAudio.mp3";

import "./assets/Header.css";
import EasterEgg from "../EasterEgg/EasterEgg";
import Records from "../Records/Records";

const Header = () => {
  const [isFound, setIsFound] = useState(false);

  const easterEggAudio = new Audio(EasterEggAudio);

  const handleClick = () => {
    setIsFound(!isFound);
  };

  useEffect(() => {
    console.log(isFound);
  }, [isFound]);
  return (
    <div id="header">
      <div id="logo" onClick={handleClick}>
        <img
          id="SixBit"
          className="hidden"
          src={SixBit}
          alt="6Bit Logo"
          onMouseOver={(e) => (e.currentTarget.src = YouFoundMe6)}
          onMouseOut={(e) => (e.currentTarget.src = SixBit)}
        />
        <img src={Name} alt="6Bit Calvin" />
      </div>
      <Records />
      <EasterEgg
        isFound={isFound}
        setIsFound={setIsFound}
        easterEggAudio={easterEggAudio}
      />
    </div>
  );
};

export default Header;
