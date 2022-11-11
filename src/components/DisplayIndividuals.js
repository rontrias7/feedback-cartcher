import { IconContext } from "react-icons/lib";
import { GiPlainCircle } from "react-icons/gi";

const DisplayIndividuals = ({results: {bad, good, excellent}}) =>{

  
  return(
  <div className="ind-quant-stats">

    <p><IconContext.Provider value={{ className: "no-pointer bad-dot", size: "0.7em" }}><GiPlainCircle /></IconContext.Provider> Bads <br /> <span className="numbers">{bad}</span></p>
    <p><IconContext.Provider value={{ className: "no-pointer good-dot", size: "0.7em" }}><GiPlainCircle /></IconContext.Provider> Goods <br /> <span className="numbers">{good}</span></p>
    <p><IconContext.Provider value={{ className: "no-pointer excellent-dot", size: "0.7em" }}><GiPlainCircle /></IconContext.Provider> Excellent <br /> <span className="numbers">{excellent}</span></p>

  </div>

  );
  }


  export default DisplayIndividuals;