import React, {useState} from 'react';
import './app.scss';

// importing icons from reacticons
import {BiHappyAlt} from 'react-icons/bi';
import {RiEmotionUnhappyLine} from 'react-icons/ri';
import {TbMoodCrazyHappy} from 'react-icons/tb';
import {GiPlainCircle} from 'react-icons/gi';
import fc_hor_logo from './fc_hor_logo.svg'


// importing the Context of react-icons to change its properties
import { IconContext } from "react-icons";





function App() {

 
  // setting up the state of the results
  const [results, setResults] = useState({

    bad: 0,
    good: 0,
    excellent: 0
  })

  //setting up history status
  const [history, setHistory] = useState([]);



  // handler function to capture the onClick events of buttons/icoButtons
 const handleText = (e) =>{


  // catching the value instead of textContent (as before) cause it was not working with icons
  let resultClicked = e.target.value;
  console.log(e.target.value)
  
  console.log(resultClicked); // just for debug
  

  let newObj = {...results}
  newObj[resultClicked] = newObj[resultClicked] + 1;


  setResults(newObj);

  setHistory(history.concat(resultClicked));
  console.log(newObj);
  console.log(history);

 } 


  return (
    <div className="global-container">
      <section className="right-bar">
        <div className="main-card">
          

        <img className='logo' src={fc_hor_logo} alt="Feedback catcher logo"></img>
          

          <ButtonXP className="button bad" onClick={handleText} mood="bad" text={<IconContext.Provider value={{ color: "black", className: "no-pointer", size: "3em" }}><RiEmotionUnhappyLine /></IconContext.Provider>} />
          {/*<ButtonXP className="button bad" onClick={handleText} mood="bad" text="Bad" />  Deprecated because of icons */}
          
          <ButtonXP className="button good" onClick={handleText} mood="good" text={<IconContext.Provider value={{ color: "black", className: "no-pointer", size: "3em" }}><BiHappyAlt /></IconContext.Provider>} />
          {/*<ButtonXP className="button good" onClick={handleText} mood="good" text="Good" />   Deprecated because of icons */}

          <ButtonXP className="button excellent" onClick={handleText} mood="excellent" text={<IconContext.Provider value={{ color: "black", className: "no-pointer", size: "3em" }}><TbMoodCrazyHappy /></IconContext.Provider>} />
          {/* <ButtonXP className="button excellent" onClick={handleText} mood="excellent" text="Excellent" /> Deprecated because of icons */} 
        </div>
        
      
      
      <StatisticsContainer results={results}/>
      </section>
      <section className="history-area">


       
        <DisplayHistory history={history} />

      </section>


      
    </div>
    
  );
}


const StatisticsContainer = ({results}) => {


    return (
      <div className="statistics-card">
          <h3>Statistics</h3>
          <Display  results={results}/>
          <TotalAndAverage results={results} />
      </div>

    );


    
}


 
const Display = ({results: {bad, good, excellent}}) =>{

  
  return(
  <>

    <p><IconContext.Provider value={{ className: "no-pointer bad-dot", size: "0.7em" }}><GiPlainCircle /></IconContext.Provider> Bads <br /> <span className="numbers">{bad}</span> <br/>
    <IconContext.Provider value={{ className: "no-pointer good-dot", size: "0.7em" }}><GiPlainCircle /></IconContext.Provider> Goods <br /> <span className="numbers">{good}</span><br/>
    <IconContext.Provider value={{ className: "no-pointer excellent-dot", size: "0.7em" }}><GiPlainCircle /></IconContext.Provider> Excellent <br /> <span className="numbers">{excellent}</span> </p>

  </>

  );
  }


// prop mood refers to the meaning of the button: bad, good & excellent
const ButtonXP = ({text, onClick, className, mood}) => <button className={className} onClick={onClick} value={mood}>{text} {mood}</button>




const TotalAndAverage = ({results: {bad, good, excellent}}) => {
  
  const averageMood = Math.floor(((bad*10+good*100+excellent*1000)/(bad+good+excellent))/10 ) + 0;

  return [

  // conditional rendering, if component has no values then render 'No data yet', else do it work
  <p>Total Results <br /> <span className="numbers">
  {bad+good+excellent > 0 ?
   bad + good + excellent
  : 'No data'}
 
  </span></p>, <p>Mood <br /> <span className="numbers">{!averageMood? 'No data' : `${averageMood}%` }</span></p>

  ]

  
}


const DisplayHistory = ({history}) => {

  const welcomeMessage = <div>
                          <h4>Welcome to Feedback Catcher! </h4> <br/>
                          <p>To start, add a few items taping the buttons in the left panel.</p>
                          <p>It's just a learning project. <br/> If you want to send me some feedback email me at: rontrias7@gmail.com</p>
                          
                          </div>

  return (

      
      <>


      {/* Conditional rendering of the welcome text */}
      {history.length === 0 ? welcomeMessage : ''}


      {/* Rendering of the pills using switch */}
    {history.map( (item, index) => {

              
          switch(item){

            case 'bad':
              console.log(`Bad added, id: ${index}`);
              return  <span className="bad-pill pill somethingWrong" key={index} data-id={index} >Bad</span>;
            case 'good':
              console.log(`Good added, id: ${index}`);
              return <span className="good-pill pill appearIn" key={index} data-id={index} >Good</span>;
            case 'excellent':
              console.log(`Excellent added, id#: ${index}`);
              return <span className="excellent-pill pill excellentMotion" key={index} data-id={index} >Excellent</span>;
            default:
              return 'this is empty';

          }

      })}
    </>

  )

}




export default App;