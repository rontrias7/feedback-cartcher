


const Total = ({results: {bad, good, excellent}}) => {
  return (
  
    // conditional rendering, if component has no values then render 'No data yet', else do it work
    <p>Total Results <br /> <span className="numbers">
    {bad+good+excellent > 0 ?
     bad + good + excellent
    : 'No data'}
   
    </span></p>
  
    )
  
  }



  export default Total;