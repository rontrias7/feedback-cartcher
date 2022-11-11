

// prop mood refers to the meaning of the button: bad, good & excellent
const ButtonXP = ({text, onClick, className, mood}) => <button className={className} onClick={onClick} value={mood}>{text} {mood}</button>













export default ButtonXP;