import { useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';


function Custombutton(props) {
  const navigate = useNavigate();
  let location = useLocation();


  function handleClick() {
    props.setMenu(props.page);
  }

  if (props.page === props.currentMenu) {
        return  <button onClick={handleClick} style = {{"text-decoration":"underline", textUnderlineOffset: "15px" }}>{props.page}</button> //add text-underline-offset
  }
  return  <button onClick={handleClick}>{props.page}</button>


}
export default Custombutton;
