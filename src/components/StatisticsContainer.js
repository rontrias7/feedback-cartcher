import DisplayIndividuals from "./DisplayIndividuals.js";
import Average from "./Average.js";
import Total from "./Total.js";

const StatisticsContainer = ({results}) => {


    return (
      <div className="statistics-card">
          <h3 className="subtitle" >Statistics</h3>
          <DisplayIndividuals  results={results}/>
          <hr className="divider" />
          <div className='total-quant-stats'>
            <Average results={results} />
            <Total results={results} />
          </div>
      </div>

    );


    
}


export default StatisticsContainer;