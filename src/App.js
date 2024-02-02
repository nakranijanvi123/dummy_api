import { Routes, Route} from "react-router-dom"
import './App.css';
import Home from './Home';
import Single from './Single';


function App(){
  return(
    <>
    <Routes>
      <Route path="/" element={ <Home/> } />
      <Route path="/SinglePage/:id" element={ <Single/> } />
      </Routes>
    </>
  )
}
export default App;

// Link
// Route ma Id
// useParams
