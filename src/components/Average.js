
const Average = ({results: {bad, good, excellent}}) => {
  
  const averageMood = Math.floor(((bad*10+good*100+excellent*1000)/(bad+good+excellent))/10 ) + 0;

  return (

<p>Mood <br /> <span className="numbers">{!averageMood? 'No data' : `${averageMood}%` }</span></p>

  )

}


export default Average;