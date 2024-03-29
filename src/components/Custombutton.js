import { useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';


function Custombutton(props) {
  const navigate = useNavigate();
  let location = useLocation();


  function handleClick() {
    navigate(props.link);
  }

  if (location.pathname == props.link) {
        return  <button onClick={handleClick} style = {{"text-decoration":"underline" }}>{props.page}</button>
  }
  return  <button onClick={handleClick}>{props.page}</button>


}
export default Custombutton;
