

const DisplayHistory = ({history}) => {

  const welcomeMessage = <div className="presentation">
                          <h4>Welcome to Feedback Catcher! </h4>
                          <p>To start, add a few items taping the buttons in the left panel.<br/>
                          It's just a learning project. <br/> If you want to send me some feedback email me at: rontrias7@gmail.com</p>
                          
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