import {FaGithub} from 'react-icons/fa';
import {CgMail} from 'react-icons/cg';
import {IconContext} from 'react-icons';


let ContactBar = () => {

  return (

      <div className="contact-bar">
      <span>Let's talk </span>
      <IconContext.Provider value={{ className: "default", size: "1.5em", margin: "0px 8px", color: 'black' }}>
      <a href="https://github.com/rontrias7" rel="noreferrer" target="_blank"><FaGithub /></a>
      </IconContext.Provider>
      <IconContext.Provider value={{ className: "default", size: "1.5em", margin: "0px 8px", color: 'black' }}>
      <a href="mailto:rontrias7@gmail.com" rel="noreferrer" target="_blank"><CgMail /></a>
      </IconContext.Provider>
      </div>



  );
}


export default ContactBar;