import React, {useState} from 'react';
import './app.scss';
import ButtonXP from './components/ButtonXP';
import StatisticsContainer from './components/StatisticsContainer';
import DisplayHistory from './components/DisplayHistory';
import ContactBar from './components/ContactBar';

// importing icons from reacticons
import {BiHappyAlt} from 'react-icons/bi';
import {RiEmotionUnhappyLine} from 'react-icons/ri';
import {TbMoodCrazyHappy} from 'react-icons/tb';
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

      <ContactBar />

      </section>
      <section className="history-area">

      <DisplayHistory history={history} />

      </section>


      
    </div>
    
  );
}





 












export default App;