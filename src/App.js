
import Heading from './components/Heading';
import './index.css';
import { BrowserRouter as Router, Route, Routes, Navigate, Redirect, Link , withRouter} from 'react-router-dom';
import background from './background.png';


function App() {
  return (<>
  <div style={{ backgroundImage: `url(${background})` , margin: "0px", padding: "0px", width: "100%", height: "100vh", backgroundPosition: 'center',
  backgroundSize: 'cover', overflow: 'hidden'}} >
  <Router>
  <Heading></Heading>
  </Router>
  </div>
  </>);
}

export default App;
