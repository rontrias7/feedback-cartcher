
import feedbackEmpty from "../feedback-empty.svg";



const DisplayHistory = ({history}) => {

  const welcomeMessage = <div className="presentation">
                          <p>Hello! The History zone is still empty. <br/>
                          To add some registers please go to the left side area.</p>
                          <img className="feedback-ill" src={feedbackEmpty} alt="no feedback illustration"></img>
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
              return  <span key={index+353} className="bad-pill pill somethingWrong"  data-id={index} >Bad</span>;
            case 'good':
              console.log(`Good added, id: ${index}`);
              return <span key={index+234} className="good-pill pill appearIn"  data-id={index} >Good</span>;
            case 'excellent':
              console.log(`Excellent added, id#: ${index}`);
              return <span key={index+1213} className="excellent-pill pill excellentMotion" data-id={index} >Excellent</span>;
            default:
              return <p key={index}>'this is empty'</p>;

          }

      })}
    </>

  )

}

export default DisplayHistory;